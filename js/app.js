(function() {
  var app = angular.module('rezzelution', []);

  app.controller('MainController', function() {
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
  });
})();
