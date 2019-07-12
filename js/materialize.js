$(document).ready(function(){
    $('.slider').slider({
        height: 600,
        indicators: false
    });
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        'onOpenEnd': initCarouselModal
    });

    function initCarouselModal() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {'fullWidth': true, 'indicators':true});
    }
});