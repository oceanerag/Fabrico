/**
  * @desc controller for reference detail page
  * @author Hugo G on 03/04/2017
  * @required angular-touch.js and angular-carousel.jq
*/


angular.module('starter').controller('refDetailCtrl', function ($scope, $rootScope){

  // get the number of images for the selected ref
  var nbImg;
  for(var i=0;i<$rootScope.references.length;i++){
    if($rootScope.references[i].selected){
      nbImg = $rootScope.references[i].imgUrl.length;
    }
  }
  $scope.currentSlide = 0;
  var slideInterval = setInterval(nextSlide,3000);

  // stop the interval when leaving
  $scope.$on("$ionicView.afterLeave", function(event, data){
    clearInterval(slideInterval);
  });

  // change the selected slide to next
  // $apply to change effectively the value, does not work else
  function nextSlide(){
    $scope.$apply(function(){
      $scope.currentSlide = ($scope.currentSlide+1)%nbImg;
    });
  };


});
