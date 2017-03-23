/**
  * @desc controller for references page, contains the references and their content
  * @author Hugo G on 11/01/2016
  * @required
*/

angular.module('starter')

.controller('offersCtrl', function($scope, $state){

    $scope.goToPage= function(page){
      $state.go(page);
    }
    
});
