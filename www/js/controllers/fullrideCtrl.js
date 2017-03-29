/**
  * @desc controller for fullride page
  * @author Hugo G on 29/03/2017
  * @required
*/

angular.module('starter')

.controller('fullrideCtrl', function($scope, $rootScope, $state){

  $scope.focusTheme = function(theme) {
    if(theme===$rootScope.themeFocus){
      $rootScope.themeClick= theme;
      $state.go('offerDetail');
      $rootScope.themeFocus = '';
    } else {
    $rootScope.themeFocus = theme;
    }
  }

});
