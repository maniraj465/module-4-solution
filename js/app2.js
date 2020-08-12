(function(){
  'use strict';
angular.module("MyApp", [])
.controller("SearchController", SearchController)
.service("ShoppingService", ShoppingService);


SearchController.$inject = ['ShoppingService'];
function SearchController(ShoppingService){
  var search = this;
  var listItems = [];
  
  var promise = ShoppingService.getItem();
  promise.then(function (response){
    search.listItems = (response.data).menu_items;
    listItems = (response.data).menu_items;
  })
  .catch(function (error){
    console.log(error)
  });

  search.searchItem = function(itemName){
    search.filteredItemList = ShoppingService.searchItem(itemName, listItems);
  } 
  search.removeItem = function(index){
    search.filteredItemList.splice(index, 1);
  }
}

ShoppingService.$inject = ['$http'];
function ShoppingService($http){
  var service = this;
  service.getItem = function(){
    var response = $http({
      method : "GET",
      url : ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    return response;
  };
  
  service.searchItem = function(itemName, listItems){
    var filteredItem = [];
    angular.forEach(listItems, function(item, sNo){
      if((item.categories).indexOf(itemName) > -1){
        filteredItem.push(item);
      }
    });
    return filteredItem;
  }

}
})();