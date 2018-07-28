angular.module('ichiba').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('SignIn', {
            url: '/SignIn',
            templateUrl: 'app/views/signin/signin.html',
            controller: 'SignInCtrl',
            controllerAs: 'ctrl'
        })
        .state('ForgotPassword', {
            url: '/ForgotPassword',
            templateUrl: 'app/views/forgotpassword/forgotpassword.html',
            controller: 'ForgotPasswordCtrl',
            controllerAs: 'ctrl'
        })
        .state('app', {
            url: '/app',
            templateUrl: 'app/views/menu/menu.html',
            controller: 'MenuCtrl',
            controllerAs: 'ctrl',
            data: {
                name: 'menu'
            }
        })
        .state('app.Feed', {
            url: '/Feed',
            views: {
                'content': {
                    templateUrl: 'app/views/feed/feed.html',
                    controller: 'FeedCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('app.Players', {
            url: '/Players',
            views: {
                'content': {
                    templateUrl: 'app/views/players/players.html',
                    controller: 'PlayersCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/SignIn');

}]);
