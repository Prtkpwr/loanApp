http://localhost:3000/


myApp.service("cService",function($http){

	var main = this ;


	
	var baseUrl= "http://localhost:3000/loans";

	this.loanApi = function(){

		return $http.get(baseUrl);
	}
	


});