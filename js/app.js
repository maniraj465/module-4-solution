(function(){
    'use strict';
    angular.module('MyApp', [])
    .controller('ListController', ListController)
    .service('GetMenuService', GetMenuService);
      
    ListController.$inject = ['GetMenuService'];
    function ListController(GetMenuService){
      var MenuList = this;
      var promise = GetMenuService.getmenu();
      promise.then(function(response){
        MenuList.listItems = (response.date).menu_items;
      })
      .catch(function(error){
        console.log(error);
      });
    }
  
  
  
    GetMenuService.$inject = ['$http'];
    function GetMenuService($http){
      var getMenuService = this;
      getMenuService.getmenu = function(){
        var response = $http({
          method : 'GET',
          url : "https://davids-restaurant.herokuapp.com/menu_items.json"
        });
        return response;
      };
    }
  
  
  })();