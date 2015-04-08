(function() {
  var app = angular.module('rez-views', []);

  app.directive('viewGames', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/view-games.html',
      controller: function($scope) {
        var parentCtrl = $scope.$parent.mainCtrl;

        this.add = {
          name: ''
        };

        this.addGame = function() {
          parentCtrl.data.games.push({
            name: this.add.name
          });
        };
      },
      controllerAs: 'gamesCtrl'
    };
  });

  app.directive('viewPlatforms', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/view-platforms.html',
      controller: function($scope) {

      },
      controllerAs: 'platformsCtrl'
    };
  });

  app.directive('viewImportExport', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/view-import-export.html',
      controller: function($scope) {

      },
      controllerAs: 'importExportCtrl'
    };
  });
})();
