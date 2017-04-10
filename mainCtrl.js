(function(){
 'use strict';

 angular.module('mainModule')
 .controller('HomeController', ["$log", HomeController]);

function HomeController($log){
    var vm = this;
    vm.title = "Hello World";

}

})();