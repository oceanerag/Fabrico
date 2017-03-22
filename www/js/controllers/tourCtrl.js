/**
  * @desc controller for virtual tour page
  * @author Guilherme and Oceane on 09/01/2017
  * @required jquery and jquery-ui
*/

angular.module('starter')

.controller('tourCtrl', function($scope, $state){

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
			showSceneNextPrevCtrl: false, /**right/left arrows next/previous scenes*/
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
					//titleHtml:true,
					titleSelector: "#titleScene",
					//title: "Main Scene",
					yaw: 0,
					pitch: 0,
					compassNorthOffset: 0,
					image: "img/Yoko4.jpg",
					//hotSpots definition
					hotSpots: [
						{
							yaw: 297,
							pitch: -20,
							sceneId: "next", //Link beetween scenes
							popoverShow: true, //set to true if you wan to display your popup on default
							popoverPlacement: "top",
							popoverContent: "Pour aller vers la salle suivante",
						},
						{
							yaw: 319,
							pitch: -14,
							popoverShow: true,
							popoverPlacement: "top",
							popoverContent: "Un tableau",
						},
						{
							yaw: 45,
							pitch: -17,
							popoverShow: false,
							popoverPlacement: "top",
							popoverHtml: true, //this line and the next are used to display HTML elements, such as videos or images
							popoverSelector: "#popover1",
						},
					],
				},
				next: {
					type: "sphere", // specifies the scene type ("box", "sphere", "cylinder")
					title: "Flash Gordon",
					image: "img/Flahs1.jpg",
					yaw: 118,
					pitch: -28,
					hotSpots: [
						{
							yaw: 122,
							pitch: -19,
							popoverShow: true,
							popoverContent: "Ca travaille dur!",
						}
					],
				},
			},
		});


		$("#fullscreen").click(function() {
			panorama.ipanorama("fullscreen");
		});
	});

});
