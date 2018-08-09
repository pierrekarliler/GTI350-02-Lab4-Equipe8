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
        .state('Reset', {
            url: '/Reset',
            templateUrl: 'app/views/reset/reset.html',
            controller: 'ResetCtrl',
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
        .state('app.Transaction', {
            url: '/Transaction',
            views: {
                'content': {
                    templateUrl: 'app/views/transaction/transaction.html',
                    controller: 'TransactionCtrl',
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
        .state('app.Player', {
            url: '/Player',
            views: {
                'content': {
                    templateUrl: 'app/views/player/player.html',
                    controller: 'PlayerCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })
        .state('app.Sell', {
            url: '/Sell',
            views: {
                'content': {
                    templateUrl: 'app/views/sell/sell.html',
                    controller: 'SellCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/SignIn');

}]);
