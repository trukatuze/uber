$(document).ready(function() {
    $('.about').submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url:"test.php",
            data:data,
            success:function (about){
                $('.about').html(about);
            }
        });
    });
});
$('.ok').on('click', (function (e) {
    e.preventDefault();
}));
$('#home').on('click', (function (e) {
    e.preventDefault();
}));
$('#about').on('click', (function (e) {
    e.preventDefault();
}));
$('#contact').on('click', (function (e) {
    e.preventDefault();
}));

$(function(){
    var vid = document.getElementById('bgvid');
    var pause = $('#info-block button');

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
