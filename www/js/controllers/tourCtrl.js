/**
  * @desc controller for virtual tour page
  * @author Guilherme and Oceane on 09/01/2017
  * @required jquery and jquery-ui
*/

angular.module('starter')

.controller('tourCtrl', function($scope, $state, $rootScope){

  // disables swipe for side menu when enterring state

  $scope.$on("$ionicView.beforeEnter", function(event, data){
    $rootScope.toggleDrag = false;
  });

  // enables swipe for side menu when leaving state

  $scope.$on("$ionicView.afterLeave", function(event, data){
    $rootScope.toggleDrag = true;
  });


  // functions for navigation towards other parts of the app

  //initialize the triangles
  $scope.initTour = function($scope){
    $(function(){

      //calculate triangle height and width
      var width = $("#presentationVT-tab").css('width').replace('px', '');
      var height = $("#presentationVT-tab").css('height').replace('px', '');


      //add svg canvas to presentation-tab
      $("#presentationVT-tab").svg();
      var svg = $("#presentationVT-tab").svg('get');
      // add the over triangles with functions on click to go to other pages
      svg.polygon([[0,0],[width,0],[0,height]], {fillOpacity : '0', onclick : "goToPage('presentation')"});

      $("#referencesVT-tab").svg();
      svg = $("#referencesVT-tab").svg('get');
      svg.polygon([[0,0],[width,0],[width,height]], {fillOpacity : '0', onclick : "goToPage('references')"});

      $("#offersVT-tab").svg();
      svg = $("#offersVT-tab").svg('get');
      svg.polygon([[0,0],[width,height],[0,height]], {fillOpacity : '0', onclick : "goToPage('offers')"});

      $("#agendaVT-tab").svg();
      svg = $("#agendaVT-tab").svg('get');
      svg.polygon([[width,0],[width,height],[0,height]], {fillOpacity : '0', onclick : "goToPage('agenda')"});

      $('.virtualTour-tab').toggleClass('virtualTour-tab').toggleClass('virtualTour-tab');

    });
  };

  // action performed when a page is selected
  goToPage = function(page){
    $(function(){

        var pageSelector = '#'.concat(page).concat('VT-tab');
        // select the tab to animate
        $(pageSelector)

        //put it in front
        .css('zIndex', '30')

        //increase its size
        .animate({
          width: $(pageSelector).parent().width()*2,
          height: $(pageSelector).parent().height()*2,
          fontSize : '3em'
        }, {
          duration : 400,
          queue : false
        });

        //decrease the size of the other triangles
        $(".virtualTour-tab").not(pageSelector)

        .animate({
          width: $(pageSelector).parent().width()*0.2,
          height: $(pageSelector).parent().height()*0.2,
        }, {
          duration : 400,
          queue : false
        });

        //change page after the animation
        setTimeout(function(){
          $state.go(page);
        }, 500);

        //give back their size to the triangles (permits to recover the virtual Tour as it was)
       setTimeout(function(){
        $(".virtualTour-tab")
        .css({
          width: $(".virtualTour-tab").parent().width()*2.2,
          height: $(".virtualTour-tab").parent().height()*2.2,
          fontSize: '1.4em',
          zIndex: '25'
        })
      }, 1000);

    })
  };

  $scope.goToPage = goToPage;




  // virtual tour part

  $(document).ready(function() {
		"use strict";

		//This is where you declare the differents options of your virtual tour
		var panorama = $("#panorama").ipanorama({
			theme: "ipnrm-theme-default",
			hotSpotSetup: false, 	//Set this setup at true to display pitch and yawn into the browser console
			onHotSpotSetup: function(yaw, pitch, cameraYaw, cameraPitch, cameraZoom) {
				console.log("yaw: " + yaw + ", pitch: " + pitch + ", cameraYaw: " + cameraYaw + ", cameraPitch: " + cameraPitch + ", cameraZoom: " + cameraZoom);
			},
			hoverGrab: false,
			autoLoad: true,
			showControlsOnHover: false,
			showSceneThumbsCtrl: false,
			showSceneMenuCtrl: false, /**menu icon to preview different scenes*/
			showSceneNextPrevCtrl: true, /**right/left arrows next/previous scenes*/
			showZoomCtrl: false,
			showShareCtrl: false,
			showFullscreenCtrl: false,
			sceneNextPrevLoop: true,
			popoverHideTrigger: "manual",
			popoverShowClass: "fx-rotateIn",
			popoverHideClass: "fx-bounceOut",
			pitchLimits: false,
			sceneThumbsVertical: true,
			mobile: true, //Mandatory if you want to display your tour on phone or tablet
			compass: false,
			sceneId: "main", //Every scene is attached to an ID, this option sets the default scene
			scenes: {
				main: {
					type: "sphere", // specifies the scene type ("box", "sphere", "cylinder")
					yaw: 0,
					pitch: 0,
					image: "img/Salle1_Gauche.JPG",
					//hotSpots definition
					hotSpots: [
						{
							yaw: 51.64,
							pitch: -11.70,
							popoverShow: true,
							popoverPlacement: "top",
							popoverHtml: true, //this line and the next are used to display HTML elements, such as videos or images
							popoverSelector: "#popover1", //this select the element you want to show
						},
						{
							yaw: 300.52,
							pitch: -18.81,
							popoverShow: true,
							popoverPlacement: "top",
							popoverHtml: true, //this line and the next are used to display HTML elements, such as videos or images
							popoverSelector: "#popover2", //this select the element you want to show
						},
						{
							yaw: 344.08,
							pitch: -6.32,
							popoverShow: true,
							sceneId: "Middle",
							popoverPlacement: "top",
							popoverContent: "Avancer dans la viste vituelle",
						}

					],
				},
				Middle: {
					type: "sphere", // specifies the scene type ("box", "sphere", "cylinder")
					image: "img/Salle1_Milieu.jpg",
					yaw: 105.85,
					pitch: -5.95,
					hotSpots: [
						{
							yaw: 116.45,
							pitch: -1.34,
							popoverShow: true,
							popoverContent: "Groupe-seb",
						},
						{
							yaw: 55.99,
							pitch: 0.40,
							popoverShow: true,
							sceneId: "Right",
							popoverPlacement: "top",
							popoverContent: "Avancer dans la viste vituelle",
						},
						{
							yaw: 180.82,
							pitch: -6.28,
							popoverShow: true,
							sceneId: "main",
							popoverPlacement: "top",
							popoverContent: "Revenir en arrière",
						}
					],
				},
				Right: {
					type: "sphere", // specifies the scene type ("box", "sphere", "cylinder")
					image: "img/Salle1_Droite.jpg",
					yaw: 65.56,
					pitch: -13.21,
					hotSpots: [
						{
							yaw: 39.04,
							pitch: -13.69,
							popoverShow: true,
							popoverContent: "seche-environnement",
						},
						{
							yaw: 177.48,
							pitch: -2.30,
							popoverShow: true,
							sceneId: "Middle",
							popoverPlacement: "top",
							popoverContent: "Revenir en arrière",
						}
					],
				},
			},
		});
	});

});
