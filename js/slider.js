$(function() {
	
	//Configuration 
	var pause =3000;
	var speed=1000;
	var width=800;
	var current=1;

	//cach
	var $slider=$('#slider');
	var $container=$slider.find('.slides');
	var $slides=$container.find('.slide');

	//slide js variable
	var interval;

	//Slide Main function
	function startSlider(){
	interval= setInterval(function(){
		$container.animate({'margin-left':'-='+width},speed, function(){
			current++;
			if (current===$slides.length) {
				current=1;
				$container.css('margin-left', 0);
				};
			});
		},pause);
	}

	// stop slide function  
	function stopSlider(){
		clearInterval(interval);
	}

	//When you keep your Mouse on slide, it will be pause
	// And when keep out your Mouse from slide it will be sliding 
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	// After keep out mouse from slide, then start slide function 
	startSlider();

	//Left indicator, that slide start from start point, function
	function lincoln(){
		$container.animate({'margin-left': '+='+width}, speed, function(){
				// current--;
				// if (current ===1) {
				// current=$slides.length;
				$container.css('margin-left',0);
			// };
		}), pause;
	}

	//Right indicator, that slide start from its own position, function
	function mahmud(){
		$container.animate({'margin-left':'-='+width}, speed, function(){
			current++;
			if (current===$slides.length) {
				current=1;
				$container.css('margin-left', 0);
			};
		}), pause;
	}

	//When you click on Left indicator it will work
	$('.previous').click(function(){
		lincoln();
	});

	//When you click on Right indicator it will work
	$('.next').click(function(){
		mahmud();
	});
	
});
