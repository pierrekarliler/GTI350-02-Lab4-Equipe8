angular.module('ichiba').controller('FeedCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    this.newsList = [{
        picture: 'app/assets/ronaldo.png',
        name: 'Cristiano Ronaldo',
        from: 'Real Madrid C.F.',
        to: 'Juventus F.C.',
        price: '110 M',
        salary: '210 M',
        duration: '3 ans',
        date: '15-01-2018',
    }, {
        picture: 'app/assets/zlatan.jpg',
        name: 'Zlatan Ibrahimovic',
        from: 'A.C. Milan',
        to: 'Paris Saint-Germain F.C.',
        price: '90 M',
        salary: '114 M',
        duration: '5 ans',
        date: '14-01-2018',
    }, {
        picture: 'app/assets/radamel.jpg',
        name: 'Radamel Falcao',
        from: 'Atlético Madrid',
        to: 'AS Monaco F.C.',
        price: '125 M',
        salary: '13.5 M',
        duration: '4 ans',
        date: '14-01-2018',
    }]
}])
