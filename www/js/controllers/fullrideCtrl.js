/**
  * @desc controller for fullride page
  * @author Hugo G on 29/03/2017
  * @required
*/

angular.module('starter')

.controller('fullrideCtrl', function($scope, $rootScope, $state){

  $scope.goToOffer = function(type){
    $rootScope.themeClick= type;
    $state.go('offerDetail');
  };

  $scope.focusTheme = function(theme) {
    $rootScope.themeFocus = theme;
  }

});
