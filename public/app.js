var app = angular.module('Amp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  
  // First Page
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })
  .state('home.list', {
  	url: '/list',
  	templateUrl: 'home-list.html',
  })
  .state('home.list2', {
    url: '/list2',
    templateUrl: 'home-list2.html',
  })
  .state('about', {
    url: '/about',
    templateUrl: 'About-us.html'
  })
  .state('home.5steps', {
      url: '/5steps',
      templateUrl: 'index5steps.html'
    })
  .state('scotch', {
    url: '/scotch/:scotch',
    templateUrl: function ($stateParams){
      console.log($stateParams)
      return 'partial-scotch-' + $stateParams.scotch + '.html';
    }
  })


});