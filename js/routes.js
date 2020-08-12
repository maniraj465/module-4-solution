(function(){
  'use strict';
  angular.module('MyApp', ['ui.router']);
  angular.module('MyApp')
  .config(RoutesConfig);
    
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      template: '<h4>Welcome to our Restaurant</h4>'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'ListController as MenuList'
    });
  }
})();