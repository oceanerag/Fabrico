/**
  * @desc controller for references page, contains the references and their content
  * @author Hugo G on 11/01/2016
  * @required
*/

angular.module('starter')

.controller('refCtrl', function($rootScope,$scope,$state){

    // set the inital index for the coverflow
    var initialIndex = 2;
    $scope.coverData = {coverIndex : initialIndex};

    // change the stored value of the selected index for the references name and details to update
    // called when the value is changed in the coverflow
    changeIndex = function(index){
      $scope.$apply(function(){
        $scope.coverData.coverIndex = index;
      });
    };

    $(function() {

    // enable the coverflow for the selected div
    $('#coverflow').coverflow({
        index : initialIndex,
        duration : 'slow',
        enableWheel : false,
        enableKeyboard : false,

        // called when the selected cover is changed
        change :			function(event, cover, index) {
          changeIndex(index);
        },
        //When the user click on the current cover (the cover with the same index as the cover in the center og the screen)
        confirm : function(event, cover, index){
          //Set all the references.selected array to false
          for (var i = 0, c = $rootScope.references.length; i < c; i++) {
              $rootScope.references[i].selected = false;
          };
          //Set the cover selected to true in order to display the proper detailled reference page
          $rootScope.references[index].selected = true;
          //Go to the detailled reference
          $state.go('refDetail');
        },
    });
  });

  // list part
  // Change the parameter selected to true for the selected reference.
  goToDetail = function(){
    for (var i = 0, c = $rootScope.references.length; i < c; i++) {
      $rootScope.references[i].selected = false; // Initialize all the reference.selected to false
    };
    var x = document.getElementById("mySelect").selectedIndex;
    $rootScope.references[x-1].selected = true;
    $state.go('refDetail');;
  };

  (function(){
     /*1*/var customSelects = document.querySelectorAll(".custom-dropdown__select");
     /*2*/for(var i=0; i<customSelects.length; i++){
         if (customSelects[i].hasAttribute("disabled")){
             customSelects[i].parentNode.className += " custom-dropdown--disabled";
         }
     }
  })();

});
