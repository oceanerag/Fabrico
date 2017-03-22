/**
  * @desc controller for the virtualTour
  * @author Leon Durand on  [15/01/2017]
  * @required Look at the plugin documentation dor more information
*/


	/*$(document).ready(function() {
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
			/*showSceneNextPrevCtrl: false, /**right/left arrows next/previous scenes*/
			/*showZoomCtrl: false,
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
	});*/
