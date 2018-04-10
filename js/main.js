// $(document).ready(function() {
//     $('li').click(function () {
//         var parent = $(this).parents('ul');
//         parent.find('li').addClass('active');
//         // parent.find('li').removeClass('active');
//     })
// });
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
