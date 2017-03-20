(function (angular) {
    'use strict';
    angular.module('myapp')
    .controller('mycontroller', Constructor);
    Constructor.$inject = ['$http'];
    function Constructor($http) {
        var vm = this;
        vm.arr = [];
       
        init();
      /*  $http.get('//localhost:2934/api/Author/GetAuthor/' + 2).then(function (response) {
            vm.arr.push(response.data);
            //debugger;
        }), function (error) {
            //
        };*/
        function add()
        {
            console.log(vm.AthrId);
            var author = {
                Id: vm.AthrId,
                Name: vm.AthrNm
            }
           // debugger;
            $http.post('http://localhost:2934/api/Author/PostAuthor/', author).then(function (response) {
                return $http.get('http://localhost:2934/api/Author/GetAuthors');
            }).then(function (response) {

                vm.arr = response.data;

            }), function (error) {
                //
            };
        }

        function init()
        {
            $http.get('http://localhost:2934/api/Author/GetAuthors').then(function (response) {
                vm.arr = response.data;
            }), function (error) {
                //
            };
        }


      /*  $http.put('//localhost:2934/api/Author/PutAuthor/' + 4, author).then(function (response) {
            return $http.get('//localhost:2934/api/Author/GetAuthors');
            
        }).then(function (response) {

            vm.arr = response.data;

        }), function (error) {
            //
        };
        */
       
        vm.add = add;
        vm.init = init;

    }

})(window.angular);