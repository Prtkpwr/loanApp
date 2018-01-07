myApp.controller("mainController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	//this.loanData = [];
	this.data;
	

	
	
	this.loanDetail = function(){

	
		cService.loanApi()
		.then(function successCallback(response){
	
		main.data = response.data;
		//main.loanData.push(response.data);

		//console.log(main.string);



		},function errorCallback(reason){
			alert("Problem in Get");
		})
	};

	this.loanDetail();


}])