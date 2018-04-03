$(document).ready(function() {
    $('li').click(function () {
        var parent = $(this).parents('ul');
        parent.find('li').addClass('active');
        // parent.find('li').removeClass('active');
    })
});
