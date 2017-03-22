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


		$("#fullscreen").click(function() {
			panorama.ipanorama("fullscreen");
		});
	});
