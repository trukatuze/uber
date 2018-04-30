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

    $('li').click(function(){
        $(this).css({'background-color':'black'});
        
    })

});
