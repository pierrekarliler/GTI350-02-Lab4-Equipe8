angular.module('ichiba').controller('TransactionCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    this.tran = {
        nom: 'Cristiano Ronaldo',
        ancien: 'Real Madrid C.F.',
        nouveau: 'Juventus F.C.',
        prix: '110M EUR',
        salaire: '210 EUR',
        duree: '3 ans'
    }
}])
