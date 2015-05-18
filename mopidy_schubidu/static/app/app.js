(function () {
  'use strict';

  angular
    .module('schubidu', [
      'ngRoute',
      'ngMaterial',
      'angular.filter',
      'schubidu.mopidy',
      'schubidu.browse',
      'schubidu.controls',
      'schubidu.tracklist',
      'schubidu.playback',
      'schubidu.search',
      'schubidu.utils'
    ])
    .controller('AppCtrl', AppCtrl)
    .config(function ($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('green')
        .accentPalette('orange');
    })
    .config(function ($routeProvider) {
      $routeProvider
        .when('/browse', {
          controller: 'BrowseCtrl',
          templateUrl: 'app/parts/browse/browse.html'
        })
        .when('/search', {
          controller: 'SearchResultCtrl',
          templateUrl: 'app/parts/search/search_results.html'
        })
        .otherwise({redirectTo: '/browse'});
    });

  function AppCtrl($scope, $mdSidenav, playback) {
    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    // put playback service into main controller, so every template
    // can call "playback.playAsNext(item)"
    $scope.playback = playback;
  }

})();