var slide = $('.carousel img');

$('.carousel').carousel();

slide.on('click', function () {
    $('.testimonial ul li').hide();
    $($(this).data('testimonial')).fadeIn();
});

slide.first().click();


