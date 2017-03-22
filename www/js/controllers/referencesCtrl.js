/* Page for list of references in the references page
author: Oceane
*/
angular.module('starter')


.controller('referencesCtrl', function($scope, $rootScope,$ionicSideMenuDelegate,$state)
{

 // Change the parameter selected to true for the selected reference.
/*goToDetail = function(){
  $(function(){
    for (var i = 0, c = $rootScope.references.length; i < c; i++) {
        $rootScope.references[i].selected = false; // Initialize all the reference.selected to false
        };
        var x = document.getElementById("mySelect").selectedIndex;
      	$rootScope.references[x-1].selected = true;
      	$state.go('refDetail');
  });
};

(function(){
    /*1var customSelects = document.querySelectorAll(".custom-dropdown__select");
    2for(var i=0; i<customSelects.length; i++){
        if (customSelects[i].hasAttribute("disabled")){
            customSelects[i].parentNode.className += " custom-dropdown--disabled";
        }
    }
})()*/

});
