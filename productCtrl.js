(function(){
 'use strict';

 angular.module('mainModule')
 .controller('ProductController', [ '$http', ProductController]);

function ProductController($http){
    var vm = this;
    vm.title = "Product Controller...";

}

})();