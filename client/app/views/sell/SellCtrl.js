angular.module('ichiba').controller('SellCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    
    this.vendreToggle = false;

    this.achat = false;

    this.toggleVendre = () => this.vendreToggle = !this.vendreToggle;

    this.toggleAchat = () => this.achat = !this.achat;

    this.player = {
        nom: 'Luis Suárez',
        prix_min: '103.5M EUR',
        prix_buyout: '155M EUR',
        date_limite: '18-10-2018'
    }

    this.confirmBuy = () => {
        alert('Opération réalisée avec succès.')
        this.toggleAchat();
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

    this.vendre = () => {
        alert('Opération réalisée avec succès.')
        this.toggleVendre();
    }

    this.devises = ['CAD', 'USD', 'EUR']

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
