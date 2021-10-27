$(document).ready(function(){
    var $slider = $('.contain-slide')
    var $slides = $slider.find('.slider')
    var $slide = $slides.find('.slide')

    var totalSlide = $slide.length
    var slidesSize = $slide.width() + 40
    var speed = 1000
    var delay = 2000
    var currSlide = 0
    $slides.css({
        width: totalSlide * slidesSize + 'px'
    })


    setInterval(function(){
        if(currSlide == totalSlide){
            currSlide = 0;
        }
        $slides.animate({
            'margin-left': -(slidesSize * currSlide)
        }, speed)
        currSlide++
    }, delay)
   

})