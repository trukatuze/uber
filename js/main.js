$(document).ready(function() {
$(function(){
    var vid = document.getElementById('bgvid');
    var pause = $('#info-block #pause');

    vid.onEnded = function(){
        this.pause();
        this.classList.add('stopfade');
    }

    pause.on('click', function(){
        vid.classList.toggle('stopfade');

        if(vid.paused){
            vid.play();
            $(this).html('Pause');
        }
        else{
            vid.pause();
            $(this).html('Paused');
        }
        });
    });

    document.body.onkeydown = function(e){
        e = e || window.event;
        var c = e.keyCode;
//Убирает эвент на стрелках, на pageDown, PageUp, Home, End
        if(c>36 && c<41 || c>32 && c<37) return false;
    }
});
