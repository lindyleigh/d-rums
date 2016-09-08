;(function(){

  angular.module('drums')
    .component ('drumsComponent', {
        templateUrl: 'app/components/drums/drums.html',
        controller: DrumsController,
        controllerAs: "dc"
    })

    


    function DrumsController(ngAudio, $interval, $timeout) {
        var dc = this;
        var recording = false;
        var record = [];

        dc.hit = function() {
            dc.audio = ngAudio.load();
            dc.audio.play();
        }

        dc.openNav= function() {
            angular.element(document.getElementById("mySidenav").style.width = "250px");
}

        dc.openNavTwo= function() {
            angular.element(document.getElementById("mySidenavTwo").style.width = "250px");
}

        dc.record = function(){
                recording = !recording;
            }
            
            
            dc.playRecorded = function(){
                if (recording){
                    recording = false
                }
                
                var i = 0;
                var interval = $interval(function() {
                    if(i > 0){
                        record[i-1].lightUp = false;
                    }
                    record[i].lightUp = true;
                    dc.hit(record[i]);
                    i++;
                    if (i >= record.length) {
                        $timeout(function(){
                            record[i-1].lightUp = false;
                        }, 600)
                        $interval.cancel(interval);
                    }
            }, 600);
            }
        

      



    // dc.hitSnare = function() {
    //     dc.snareAudio = ngAudio.load("snareaudio.mp3");
    //     dc.snareAudio.play();
    // }

    //  dc.hitFloorTom = function() {
    //     dc.floorTomAudio = ngAudio.load("floortom.mp3");
    //     dc.floorTomAudio.play();
    // }

    // dc.hitHiHat = function() {
    //     dc.hiHatAudio = ngAudio.load("hihat.mp3");
    //     dc.hiHatAudio.play();
    // }

    // dc.hitCrash = function() {
    //     dc.crashAudio = ngAudio.load("crash.mp3");
    //     dc.crashAudio.play();
    // }

    // dc.hitTomOne = function() {
    //     dc.tomOneAudio = ngAudio.load("tomone.mp3");
    //     dc.tomOneAudio.play();
    // }

    // dc.hitTomTwo = function() {
    //     dc.tomTwoAudio = ngAudio.load("tomtwo.mp3");
    //     dc.tomTwoAudio.play();
    // }

    // dc.hitKick = function() {
    //     dc.kickAudio = ngAudio.load("kickdrum.mp3");
    //     dc.kickAudio.play();
    // }

    // dc.hitRide = function() {
    //     dc.rideAudio = ngAudio.load("ride.mp3");
    //     dc.rideAudio.play();
    // }


    }

}());