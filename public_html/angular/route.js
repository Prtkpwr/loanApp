myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
              templateUrl : "views/1st.html",
              controller: "mainController",
              controllerAs : "mainCtrl"
            })
    .when("/loan/:id",{
              templateUrl : "views/view.html",
              controller : "mainController",
              controllerAs : "mainCtrl"
            })


			.otherwise(
                {
                   redirectTo:'/'
                          
                 }
               );
          }]);