(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.message = '';
    $scope.items = '';
    $scope.fontColor = {};
    $scope.borderColor = {};

    $scope.checkItems = function(){
      var itemList = $scope.items.split(',');
      var count = 0;

      itemList.forEach((item) => {
        if(item != false){
          count++;
        }
      });

      if(count > 0 && count < 4){
        $scope.message = 'Enjoy!';
        $scope.fontColor = {"color": "green"};
        $scope.borderColor = {"border-color": "green"};
      }
      else if(count >= 4){
        $scope.message = 'Too much!';
        $scope.fontColor = {"color": "green"};
        $scope.borderColor = {"border-color": "green"};
      }
      else{
        $scope.message = 'Please enter data first!!';
        $scope.fontColor = {"color": "red"};
        $scope.borderColor = {"border-color": "red"};
      }

    };

  }
})();
