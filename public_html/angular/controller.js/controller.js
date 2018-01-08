myApp.controller("mainController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	//this.loanData = [];
	this.Id = $routeParams.id;
	this.data;
	this.loanTenure;
	this.loanAmount;
	this.interest;
	

	
	
	this.loanDetail = function(){

	
		cService.loanApi()
		.then(function successCallback(response){
	
		main.data = response.data;
		//main.loanData.push(response.data);

		//console.log(main.string);
		
	this.details = function(){
		for (var a in main.data){
			if (main.data[a]._id == main.Id){
					main.loanTenure = main.data[a].loan_tenure;
					main.loanAmount = main.data[a].loan_amount;
					main.interest = main.data[a].per_month_interest;
			}// if ends
		}// for ends
	} //details function ends

this.details();

		},function errorCallback(reason){
			alert("Problem in Get");
		})
	};

	this.loanDetail();

	


}])