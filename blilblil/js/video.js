window.onload = function() {
  		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay: {
			    delay: 4000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
		},
		// 如果需要分页器
		pagination :{
		    el: '.swiper-pagination',
		    clickable :true,
	    },
	  })        
	}