angular.module('ichiba').controller('ForgotPasswordCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    this.validated = false

    this.validate = () => this.validated = !this.validated
}])
