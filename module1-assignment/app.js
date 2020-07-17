(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=[$scope]
function LunchCheckController($scope){
   $scope.item=""
   $scope.check=function(){
   if($scope.item=="")
   {
      $scope.colors="color1"
      $scope.message="Please enter data first"
       }
    else
    {
      const words = $scope.item.split(',');
      console.log(words);
      if(words.length <= 3)
       {
          $scope.colors="color2"
          $scope.message="Enjoy!"
            }
       else
        {
           $scope.colors="color2"
           $scope.message="Too much!"
           }        
        }
       }
       }
})();



