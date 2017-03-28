/**
  * @desc controller for references page, contains the references and their content
  * @author Hugo G on 11/01/2016
  * @required
*/

angular.module('starter')

.controller('offersCtrl', function($rootScope, $state){
        goToOffers= function(page){
          $(function(){
            for (var i = 0, c = $rootScope.themes.length; i < c; i++) {
                if ($rootScope.themes[i].type==page){
                  $rootScope.themes[i].selected = true; //Change the parameter offers.selected to true
                }
                else {
                  $rootScope.themes[i].selected = false; // Change others offers.selected to false
                };
            };
            $rootScope.themeClick= page;
              $state.go('offerDetail');
          });
      };
    });
