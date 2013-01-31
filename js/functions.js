$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	//slider caroufredsel

	$('.slider-holder').each(function(){

		var left = $(this).find('a.left-arrow');
		var right = $(this).find('a.right-arrow');	

		$(this).find('.slider').carouFredSel({
			width: '100%',
			height: 441,
			align: false,
			responsive: true,
		    items: {
		        visible: 1		        
		    },
		    scroll: {
		        items: 1,
		        timeoutDuration: 4000,		        
		        duration: 800
		    },
		    pagination: '.pagination',
		    prev: {
		    	key: 'left',
		    	button: left
		    },
		    next: {
		    	key: 'right',
		    	button: right
		    }

		});

	});

	$(window).resize( function(){
		resizer( $( '.slide img' ) )
	}).resize();

	function resizer( $img ) {
        var ww = $( '.slide' ).width(),
            wh = $( '.slide' ).height(),
            iw = $img.width(),
            ih = $img.height(),
            rw = wh / ww,
            ri = ih / iw,
            newWidth, newHeight,
            newLeft, newTop,
            properties;

        if ( rw > ri ) {
            newWidth = wh / ri;
            newHeight = wh;
        } else {
            newWidth = ww;
            newHeight = ww * ri;
        }

        properties = {
            'width': newWidth + 'px',
            'height': newHeight + 'px',
            'top': 'auto',
            'bottom': 'auto',
            'left': 'auto',
            'right': 'auto'
        }

        properties[ 'top' ] = ( wh - newHeight ) / 2;
        properties[ 'left' ] = ( ww - newWidth ) / 2;

        $img.css( properties );
    }

});