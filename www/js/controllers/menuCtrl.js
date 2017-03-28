/**
  * @desc controller for menu page
  * @author Hugo G on 11/12/2016
  * @required jquery
*/

angular.module('starter')

.controller('menuCtrl', function($scope, $state){

  //initialize the triangles
  $scope.initMenu = function($scope){
    $(function(){

      //calculate triangle height and width
      var width = $("#presentation-tab").css('width').replace('px', '');
      var height = $("#presentation-tab").css('height').replace('px', '');


      //add svg canvas to presentation-tab
      $("#presentation-tab").svg();
      var svg = $("#presentation-tab").svg('get');
      // add the over triangles with functions on click to go to other pages
      svg.polygon([[0,0],[width,0],[0,height]], {fillOpacity : '0', onclick : "goToPage('presentation')"});
      svg.polygon([[width,height],[width,0],[0,height]], {fillOpacity : '0', onclick : "goToPage('virtualTour')"});

      $("#references-tab").svg();
      svg = $("#references-tab").svg('get');
      svg.polygon([[0,0],[width,0],[width,height]], {fillOpacity : '0', onclick : "goToPage('references')"});
      svg.polygon([[width,height],[0,0],[0,height]], {fillOpacity : '0', onclick : "goToPage('virtualTour')"});

      $("#offers-tab").svg();
      svg = $("#offers-tab").svg('get');
      svg.polygon([[0,0],[width,height],[0,height]], {fillOpacity : '0', onclick : "goToPage('offers')"});
      svg.polygon([[width,height],[0,0],[width,0]], {fillOpacity : '0', onclick : "goToPage('virtualTour')"});

      $("#agenda-tab").svg();
      svg = $("#agenda-tab").svg('get');
      svg.polygon([[width,0],[width,height],[0,height]], {fillOpacity : '0', onclick : "goToPage('agenda')"});
      svg.polygon([[0,height],[0,0],[width,0]], {fillOpacity : '0', onclick : "goToPage('virtualTour')"});

    });
  };

  // action performed when a page is selected
  goToPage = function(page){
    $(function(){

      if(page==='virtualTour'){

        $(".menu-tab")

        .animate({
          width: $(".menu-tab").parent().width()*0.2,
          height: $(".menu-tab").parent().height()*0.2,
          fontSize: '0.45em'
        }, {
          duration : 600,
          queue : false
        });

        $('.background-image').toggleClass('blurred');

        // go to the virtualTour
        setTimeout(function(){
          $state.go(page);
        }, 800);

      } else {

        var pageSelector = '#'.concat(page).concat('-tab');
        // select the tab to animate
        $(pageSelector)

        //put it in front
        .css('zIndex', '10')

        //increase its size
        .animate({
          width: $(pageSelector).parent().width()*2.2,
          height: $(pageSelector).parent().height()*2.2,
          fontSize : '3em'
        }, {
          duration : 400,
          queue : false
        });

        //decrease the size of the other triangles
        $(".menu-tab").not(pageSelector)

        .animate({
          width: $(pageSelector).parent().width()*0.2,
          height: $(pageSelector).parent().height()*0.2,
          fontSize: '0.45em'
        }, {
          duration : 400,
          queue : false
        });

        //change page after the animation
        setTimeout(function(){
          $state.go(page);
        }, 500);

      }
    })
  };

  $scope.goToPage = goToPage;


});
