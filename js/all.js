$(document).ready(function() {
	
	$('.fadeItem').click(function (e) { 
		$('.box').fadeToggle(1500);
		//fadeIn 淡入
		//fadeOut 淡出
	});
	$('.slideItem').click(function (e) { 
		$('.box').slideToggle(1000);
		//slideeIn 滑進
		//slideOut 滑出
	});
	$('.autoRunItem').click(function (e) { 
		$('.box').slideUp().slideDown().fadeOut().fadeIn().slideUp().slideDown().fadeOut().fadeIn().slideUp().slideDown().fadeOut().fadeIn();
	});


});


