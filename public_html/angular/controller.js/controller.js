myApp.controller("mainController",["$http","cService","$routeParams",function($http,cService,$routeParams){
	
	var main = this;

	this.loanData;

	
	
	this.loanDetail = function(){

	
		cService.loanApi()
		.then(function successCallback(response){
	
		main.loanData.push(response.data);
		console.log(this.loanData);



		},function errorCallback(reason){
			alert(reason);
		})
	};

	this.loanDetail();


}])