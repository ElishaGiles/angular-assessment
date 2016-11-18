angular.module('assessment')
  .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, $http, $stateParams, mainServ) {

    $scope.getData = mainServ.getData()
      .then(function(response) {
        console.log(response);
        $scope.products = response;
      });
  }
