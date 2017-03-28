/**
  * @desc controller for virtual tour page
  * @author Guilherme and Oceane on 09/01/2017
  * @required jquery and jquery-ui
*/

angular.module('starter')

.controller('tourCtrl', function($scope, $state, $ionicHistory){

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
          duration : 1000,
          queue : false
        });

        //decrease the size of the other triangles
        $(".virtualTour-tab").not(pageSelector)

        .animate({
          width: $(pageSelector).parent().width()*0.2,
          height: $(pageSelector).parent().height()*0.2,
        }, {
          duration : 500,
          queue : false
        });

        //change page after the animation
        setTimeout(function(){
          $state.go(page);
        }, 1000);

        //give back their size to the triangles (permits to recover the virtual Tour as it was)
       setTimeout(function(){
        $(".virtualTour-tab")
        .css({
          width: $(".virtualTour-tab").parent().width()*2.2,
          height: $(".virtualTour-tab").parent().height()*2.2,
          fontSize: '1.4em',
          zIndex: '25'
        })
      }, 2000);

    })
  };

});
