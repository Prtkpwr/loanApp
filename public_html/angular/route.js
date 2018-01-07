myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
              templateUrl : "views/main.html",
              controller: "mainController",
              controllerAs : "mainCtrl"
            })
    .when("/loan/:id",{
              templateUrl : "views/loan-detail.html",
              controller : "controller",
              controllerAs : "mainCtrl"
            })


			.otherwise(
                {
                   redirectTo:'/'
                          
                 }
               );
          }]);