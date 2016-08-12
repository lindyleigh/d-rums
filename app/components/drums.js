;(function(){

  angular.module('drums')
    .component ('drumsComponent', {
        templateUrl: 'app/components/drums.html',
        controller: DrumsController,
        controllerAs: "dc"
    })


    function DrumsController(ngAudio) {
        var dc = this;

    dc.hitSnare = function() {
        dc.snareAudio = ngAudio.load("snareaudio.mp3");
        dc.snareAudio.play();
    }

     dc.hitFloorTom = function() {
        dc.floorTomAudio = ngAudio.load("floortom.mp3");
        dc.floorTomAudio.play();
    }

    dc.hitHiHat = function() {
        dc.hiHatAudio = ngAudio.load("hihat.mp3");
        dc.hiHatAudio.play();
    }

    dc.hitCrash = function() {
        dc.crashAudio = ngAudio.load("crash.mp3");
        dc.crashAudio.play();
    }

    dc.hitTomOne = function() {
        dc.tomOneAudio = ngAudio.load("tomone.mp3");
        dc.tomOneAudio.play();
    }

    dc.hitTomTwo = function() {
        dc.tomTwoAudio = ngAudio.load("tomtwo.mp3");
        dc.tomTwoAudio.play();
    }

    dc.hitKick = function() {
        dc.kickAudio = ngAudio.load("kickdrum.mp3");
        dc.kickAudio.play();
    }

    dc.hitRide = function() {
        dc.rideAudio = ngAudio.load("ride.mp3");
        dc.rideAudio.play();
    }

    }

}());