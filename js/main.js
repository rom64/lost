$(function(){
	$('.menu__btn').on('click', function()  {
		$('.menu__list').toggleClass('menu__list--active')
	});

 	$('.heroes__slider-img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button  class="slick__btn slick-prev"><img src="images/arrow_left.svg" alt="предыдущий"></button>',
	  nextArrow: '<button  class="slick__btn slick-next"><img src="images/arrow_right.svg" alt="следующий"></button>',
	  asNavFor: '.heroes__slider-text'
	});
	
	$('.heroes__slider-text').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  asNavFor: '.heroes__slider-img',
	  arrows: false
	});
});

