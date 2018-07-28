angular.module('ichiba').controller('SignInCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    this.signIn = () => {   
        $state.go('app.Feed')
    }

}])
