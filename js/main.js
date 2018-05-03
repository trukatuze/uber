$(document).ready(function() {
    // pause and video
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
         // bg black on menu
    // $('.bg').map(function() {
    //     $('.bg').click(function () {
    //         $('.bg').addClass('active')
    //
    //     });
    // });
    $('.bg').click(function(){
        $('.bg').map(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    })
    // $('li').click(function() {
    //     $(this).removeClass('active');
    // });
});
