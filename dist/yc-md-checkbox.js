angular.module('yc.md.checkbox', ['ngMaterial'])
    .directive('ycMdCheckbox', function () {
        return {
            restrict: 'E',
            transclude: true,
            require: 'ngModel',
            scope: {
                ngModel: '=ngModel',
                list: '=list',
                ctrl: '=ctrl'
            },
            controller: ['$scope', function ($scope) {
                if(!$scope.ngModel)
                    $scope.ngModel = [];
                    
                this.toggle = function (item) {
                    if(!$scope.ngModel)
                        return;
                    var idx = $scope.ngModel.indexOf(item);
                    if (idx > -1) {
                        $scope.ngModel.splice(idx, 1);
                    }
                    else {
                        $scope.ngModel.push(item);
                    }
                };
                
                this.exists = function (item) {
                    if(!$scope.ngModel)
                        return false;
                    return $scope.ngModel.indexOf(item) > -1;
                };
                
                this.isIndeterminate = function() {
                    if(!$scope.ngModel)
                        return false;
                    return ($scope.ngModel.length !== 0 &&
                        $scope.ngModel.length !== $scope.list.length);
                };
                this.isAllChecked = function() {
                    if(!$scope.ngModel)
                        return false;
                    return $scope.ngModel.length === $scope.list.length;
                };
                this.toggleAll = function() {
                    if(!$scope.ngModel)
                        return;
                    if ($scope.ngModel.length === $scope.list.length) {
                        $scope.ngModel = [];
                    } else if ($scope.ngModel.length === 0 || $scope.ngModel.length > 0) {
                        $scope.ngModel = $scope.list.slice(0);
                    }
                };
                
                $scope.ctrl = this;
            }],
            template: '<ng-transclude></ng-transclude>'
        }
    })