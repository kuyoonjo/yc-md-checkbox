angular.module('myApp', ['yc.md.checkbox'])
    .controller('ctrl', function ($scope) {
        $scope.employees = [
            {
                name: 'E1',
                id: 001
            },
            {
                name: 'E2',
                id: 002
            },
            {
                name: 'E3',
                id: 003
            },
        ];
    });