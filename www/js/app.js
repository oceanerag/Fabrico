/**
  * @desc created by ionic at start
  * @author ionic start
  * @edit Hugo G on 07/12/16, creating all the states
  * @edit Hugo G on 13/12/16, adding native transitions and cleared cache for menu
  * @required jquery and jquery-ui
*/

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','ionic-native-transitions','ui.calendar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      return StatusBar.hide();
    };
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

  //Remove the "Back" label on the iOS display
  $ionicConfigProvider.backButton.previousTitleText(false).text('');

  $stateProvider

  //creation of the states corresponding to all of the app's pages
  .state('menu', {
    url:'/menu',
    // this view is reinitialized each time
    cache : false,
    templateUrl: 'views/menu.html',
    controller : 'menuCtrl'
  })

  .state('presentation', {
    url:'/presentation',
    cache : false,
    templateUrl:'views/presentation.html'
  })

  .state('contacts', {
    url:'/contacts',
    templateUrl:'views/contacts.html'
  })

  .state('virtualTour', {
    url:'/virtualTour',
    templateUrl:'views/virtualTour.html',
    controller : 'tourCtrl'
  })

  .state('agenda', {
    url:'/agenda',
    templateUrl:'views/agenda.html',
    controller : 'agendaCtrl'
  })

  .state('references', {
    url:'/references',
    templateUrl:'views/references.html',
    controller: 'refCtrl',
    cache : false
  })

  .state('offers', {
    url:'/offers',
    templateUrl:'views/offers.html',
    controller: 'offersCtrl',
    cache : false
  })

  .state('resRequest', {
    url:'/resRequest',
    templateUrl:'views/resRequest.html'
  })

  .state('requestHistory', {
    url:'/requestHistory',
    templateUrl:'views/requestHistory.html'
  })

  .state('eventRegistration', {
    url:'/eventRegistration',
    templateUrl:'views/eventRegistration.html'
  })

  .state('refDetail', {
    url:'/refDetail',
    templateUrl:'views/refDetail.html',
    cache : false,
  })

  .state('offersList', {
    url:'/offersList',
    templateUrl:'views/offersList.html'
  })

  .state('offerDetail', {
    url:'/offerDetail',
    controller: 'offersCtrl',
    templateUrl:'views/offerDetail.html',
    cache : false
  })

  .state('refPopup', {
    url:'/refPopup',
    templateUrl:'views/refPopup.html'
  })

  .state('fullride',{
    url:'/fullride',
    templateUrl:'views/fullride.html',
    controller : 'fullrideCtrl'
  })

  ;

  //definition of menu as the first page of the app
  $urlRouterProvider.otherwise('/menu');
})

.config(function($ionicNativeTransitionsProvider){

    // set the default transition to fade
    // tranistions work only on mobile device, not in browser
    $ionicNativeTransitionsProvider.setDefaultTransition({
        type: 'fade',
        duration : '300'
    });
})

// store all the refences and their content. These references are available from every page of the application
.controller('startCtrl',function($rootScope){

  $rootScope.references= [{
    name : 'Portail B2B',
    customer : 'Somfy',
    selected : false,
    logoUrl : 'img/references/somfy/somfy_logo.png',
    imgUrl : 'img/references/somfy/Somfy.png',
    video : 'video/VideoPresentationCapgemini.720p.mp4',
    subtitle : 'Concrétiser la roadmap réalisée en parrallèle et accélérer sa réalisation ',
    bulletPoints : [
      "Prototyper le nouveau portail",
      "Présenter la nouvelle expérience utilisateur",
      "Penser et préparer l'expérience mobile"
    ],
    numbers : [
      "10 jours",
      "6 templates d'écrans clés",
      "11 écrans travaillés",
      "2 prototypes interactifs"
    ]
  }, {
    name : 'SEB&SHARE',
    customer: 'Groupe SEB',
    selected : false,
    logoUrl : 'img/references/seb/seb_logo.png',
    imgUrl : 'img/references/seb/seb.png',
    subtitle : "Accompagner le client dans la remise en questin de l'ergonomie de son outil",
    bulletPoints: [
      "Wireframes des écrans et fonctionnalités clés à challenger",
      "Réflexion autour de la nouvelle expérience utilisateur",
      "Conception participative : collaborer et co-concevoir au travers d'ateliers utilisateurs"
    ],
    numbers : [
      "12 jours",
      "3 templates d'écrans clés",
      "12 écrans travaillés",
      "1 prototype interactif"
    ]
  }, {
    name : 'Hackaton ENEDIS',
    customer : 'ENEDIS',
    selected : false,
    logoUrl : 'img/references/enedis/enedis_logo.png',
    imgUrl : 'img/references/enedis/enedis.png',
    subtitle : "Comment assurer la sécurité du technicien isolé ? ",
    bulletPoints :[
     " Enjeu : Développer en un temps record un prototype",
     "Etre acteur de l'innovation",
     "Nouvelles idées pour résoudre des défis commerciaux",
     "Apprendre, travailler dans des conditions particulières, produire"
    ],
    numbers : [
      "24h de code",
      "14 participants",
      "2 équipes",
      "2 prototypes"
    ]
  }, {
    name : 'Portail Client - Séché Environnement',
    customer : 'Séché Environnement',
    selected : false,
    logoUrl : 'img/references/secheenvironnement/secheenvironnement_logo.png',
    imgUrl : 'img/references/secheenvironnement/secheenvironnement.png',
    subtitle: "Comment vérifier rapidement l'intégration d'une nouvelle solution dans un SI existant",
    bulletPoints : [
      "Concept: Développer rapidement un POC pour prouver la faisabilité",
      "Idée cliente",
      "Visualisation de solution",
      "Validation technique et fonctionnelle",
      "Mise en production"
    ]
  }];

  $rootScope.themes = [{
      type : 'Ideation',
      imgUrl : 'img/offers/Ideation.png',
      description : 'Come in with an idea, Come out with a project !'
    }, {
      type : 'Visualisation',
      imgUrl : 'img/offers/Visualisation.png',
      description : 'Come in with a project, Come out with a vision !'
    }, {
      type : 'Fabrication',
      imgUrl : 'img/offers/Fabrication.png',
      description : 'Come in with a vision, Come out with a product !'
    }];

  $rootScope.fullride = {
    imgUrl : 'img/offers/Fullride.png'
  }

  $rootScope.offersDetail = [{
    name : 'Accelerated solution environment' ,
    type : 'Ideation' ,
    description : "L’ASE permet de résoudre des problèmes complexes. Nous réunissons des conditions qui permettent à des groupes de 20 à 100 dirigeants d’innover dans la recherche de solutions et de devenir ainsi auteurs et acteurs du changement." ,
    dispositif :"3 jours - 20 à 100 personnes ",
  }, {
    name : 'Digital days' ,
    type : 'Ideation' ,
    description : "L’objectif d'un digital day est de créer un esprit d'innovation grâce à l'innovation actuelle et le partage d’expérience." ,
    dispositif :' 2 jours - 3 personnes',
  }, {
    name : 'Atelier facilités' ,
    type : 'Ideation' ,
    description : ' L ideation 3 est blabla' ,
    dispositif :' 1 jour - 2 personnes',
  }, {
    name : 'Design sprint' ,
    type : 'Visualisation' ,
    description : ' A hackathon is a design sprint-like event in which computer programmers and others,including graphic designers, interface designers,collaborate intensively on software projects',
    dispositif :'24 heures - 14 participants',
  }, {
    name : 'Parcours client' ,
    type : 'Visualisation' ,
    description : ' La visualisation 2 est blabla' ,
    dispositif :"2 jours - 3 personnes",
  }, {
    name : 'Hackaton' ,
    type : 'Fabrication' ,
    description : ' La fabrication 1 est blabla' ,
    dispositif :'24 heures - 14 participants',
  }, {
    name : 'Fabrication2' ,
    type : 'Fabrication' ,
    description : ' La fabrication 2 est blabla' ,
    dispositif :' 5 jours - 6 personnes',
  }
, {
    name : 'Fabrication3' ,
    type : 'Fabrication' ,
    description : ' La fabrication 3 est blabla' ,
    dispositif :"1 jours - 12 personnes",
  }, {
    name : 'Core modèle pilote' ,
    type : 'Fabrication' ,
    description : ' La fabrication 4 est blabla' ,
    dispositif :' 5 jours - 5 personnes',
  }];

   $rootScope.themeClick = '';
   $rootScope.themeFocus = '';

});
