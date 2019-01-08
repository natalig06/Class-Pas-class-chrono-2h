(function($){
	$('.lleno').on('click', function(){
		$('.row div').addClass('empty');  
	});									
	$('.vacio').on('click',function(){
		$('.row div').removeClass('empty');
	});									

	$('.circle').on('click', function(){
		 $(this).toggleClass('empty');
	});									
										
	$('.square').on('click', function(){ 
		$square = $(this);

		if($square.hasClass('empty')) {
			$square.parents('.row').children('div').removeClass('empty');
		} else {
			$square.parents('.row').children('div').addClass('empty');
		}
		
	});
	$('.diamond').on('click', function(){
		$diamond = $(this);

		if($diamond.hasClass('empty')){
			$diamond.parents('.row').children('div').removeClass('empty');
			$('.column').removeClass('empty');
		}else{
			$diamond.parents('.row').children('div').addClass('empty');
			$('.column').addClass('empty');
		}
	})

})(jQuery);
