angular.module('ichiba').controller('MenuCtrl', ['$scope', '$state', '$stateParams', '$mdSidenav', function ($scope, $state, $stateParams, $mdSidenav) {

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function () {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }
}]).controller('LeftCtrl', function ($state, $scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });

    };

    $scope.routes = [{
        tooltip: 'Fil d\'actualité',
        icon: 'public',
        state: 'app.Feed'
    }, {
        tooltip: 'Joueurs',
        icon: 'group',
        state: 'app.Players'
    }, {
        tooltip: 'Marché',
        icon: 'shopping_cart',
        state: 'app.Sell'
    }, {
        tooltip: 'F.A.Q.',
        icon: 'feedback',
        state: ''
    }]

    $scope.go = (state) => {
        $state.go(state)
    }
})
