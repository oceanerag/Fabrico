/**
  * @desc controller for references page, contains the references and their content
  * @author Hugo G on 11/01/2016
  * @required
*/

angular.module('starter')

.controller('offersCtrl', function($rootScope, $state){
        goToOffer= function(page){
          $(function(){
            if (page==='fullride'){
              $state.go('fullride');
            } else {
              $rootScope.themeClick= page;
              $state.go('offerDetail');
            }
          });
      };
    });
