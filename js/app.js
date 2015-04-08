(function() {
  var app = angular.module('rezzelution', ['rez-views']);

  app.controller('MainController', function() {
    this.addGame = function() {alert();};

    this.navElements = [
      {
        icon: 'th-list',
        name: 'games',
        label: 'Games'
      },
      {
        icon: 'home',
        name: 'platforms',
        label: 'Platforms'
      },
      {
        icon: 'download-alt',
        name: 'importExport',
        label: 'Import/Export'
      }
    ];

    this.activeNav = this.navElements[0].name;

    this.isActiveNav = function(name) {
      return name === this.activeNav;
    };

    this.setNav = function(name) {
      this.activeNav = name;
    };

    this.data = {
      games: [],
      platforms: []
    };
  });
})();
