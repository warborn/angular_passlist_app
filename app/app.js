angular.module('passlistApp', ['ui.router'])
.run(function ($rootScope,$timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    });
    var mdlUpgradeDom = false;
    setInterval(function() {
      if (mdlUpgradeDom) {
        componentHandler.upgradeDom();
        mdlUpgradeDom = false;
      }
    }, 200);

    var observer = new MutationObserver(function () {
      mdlUpgradeDom = true;
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('groups', {
      url: '/groups/:id',
      templateUrl: 'app/views/groups.show.html',
      controller: 'groupsCtrl'
    })
    .state('group_new', {
      url: '/groups/new/',
      templateUrl: 'app/views/group.new.html',
      controller: 'groupsCtrl'
    })
    .state('classes', {
      url: '/classes/:id',
      templateUrl: 'app/views/course_classes.show.html',
      controller: "courseClassesCtrl"
    });
}]);
