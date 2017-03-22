/**
  * @desc controller for the virtualTour
  * @author Leon Durand on  [15/01/2017]
  * @required Look at the plugin documentation dor more information
*/


	$(document).ready(function() {
		"use strict";

		//This is where you declare the differents options of your virtual tour
		var panorama = $("#panorama").ipanorama({
			theme: "ipnrm-theme-default",
			hotSpotSetup: true, 	//Set this setup at true to display pitch and yawn into the browser console
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
