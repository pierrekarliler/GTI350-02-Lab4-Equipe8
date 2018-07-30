angular.module('ichiba').controller('PlayerCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    

    this.player =  {
        nom: 'Ronaldo',
        prenom: 'Cristiano',
        club: 'Juventus F.C.',
        numero: '93',
        nationalite: 'Portugal',
        anniversaire: '5 février 1985',
        taille: '1.87m',
    }

    this.ajouterJoueur = () => {
        this.players.push(this.player);
        this.player = {
            nom: '',
            prenom: '',
            anniversaire: '',
            taille: '',
            club: '',
            numero: '',
            nationalite: ''
        }
        this.toggleAjouter();
    }

    this.players = [{
        nom: 'Ronaldo',
        prenom: 'Cristiano',
        club: 'Juventus F.C.',
        numero: '93',
        nationalite: 'Portugal',
        prix: ''
    }, {
        nom: 'Messi',
        prenom: 'Lionel',
        club: 'Barcelona F.C.',
        numero: '10',
        nationalite: 'Argentine',
        prix: '45.7 M'
    }, {
        nom: 'Ibrahimova',
        prenom: 'Zlatan',
        club: 'PSG F.C.',
        numero: '43',
        nationalite: 'Russie',
        prix: ''
    }, {
        nom: 'Xavi',
        prenom: '',
        club: 'Juventus F.C.',
        numero: '6',
        nationalite: 'Espagne',
        prix: '96.3 M'
    }, {
        nom: 'Falcao',
        prenom: 'Radamel',
        club: 'AS Mocano F.C.',
        numero: '86',
        nationalite: 'Colombie',
        prix: ''
    }, {
        nom: 'Suarez',
        prenom: 'Luis',
        club: 'Barcelona F.C.',
        numero: '9',
        nationalite: 'Uruguay',
        prix: '103.4 M'
    }]
}])
