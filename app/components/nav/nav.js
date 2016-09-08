;(function(){

  angular.module('drums')
    .component ('navComponent', {
        templateUrl: 'app/components/nav/nav.html',
        controller: NavController,
        controllerAs: "nc"
    })


    function NavController() {
        var nc = this;

    nc.closeNav= function() {
        angular.element(document.getElementById("mySidenav").style.width = "0");
}

     nc.closeNavTwo= function() {
        angular.element(document.getElementById("mySidenavTwo").style.width = "0");
}
    }

}());