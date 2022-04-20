var Slider = function(){
    
    var Images = function(){
        $(".is-background").imgLiquid();
    }
    
    var Component = function(){
        var $Slider = $('.js-slider');
        
        // bind event listener first
        $Slider.on('ready.flickity', function() {
            // Loader...
            TweenMax.to($('.js-slider-loader'), 1,{
                delay: 0.5,
                autoAlpha: 0,
                ease: Expo.easeInOut,
                onComplete: function(){
                    // Slider...
                    TweenMax.to($Slider, 0.5,{
                        delay: 0,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });

                    // Text...
                    TweenMax.to($('.slider__item__text h1'), 0.8,{
                        delay: 0.3,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to($('.slider__item__text p'), 0.8,{
                        delay: 0.6,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                    TweenMax.to($('.slider__item__text a'), 0.8,{
                        delay: 0.9,
                        autoAlpha: 1,
                        ease: Expo.easeInOut
                    });
                }
            });
        });
        
        $Slider.flickity({
            cellAlign: 'left',
            contain: true,
            draggable: true,
            cellSelector: '.slider__item',
            wrapAround: true,
            autoPlay: 3600,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false
        });
        
        // Controls...
        $('.js-slider-button-prev').on( 'click', function() {
            $Slider.flickity('previous');
        });
        $('.js-slider-button-next').on( 'click', function() {
            $Slider.flickity('next');
        });
    }

	return{
		init: function(){
            Images();
            Component();
		}
	};
}();

// Run...
Slider.init();
