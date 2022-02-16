$(document).ready(function() {
	'use strict';

	/* header script */
	var clk = 0;
	var index = $('.gnb_nav ul li.active').index();
	//var lf = $('.gnb_nav ul li.active').offset().left;

	$('body').delegate('.btn_gotoTop','click',function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});

	$('.gnb_nav').hover(function() {
		$('.header').addClass('action');
	});

	$('.gnb_nav ul li').click(function() {

		index = $(this).index();
		clk = +1;
		$(this).addClass('active');

	});

	$('.gnb_nav').mouseleave(function() {

		if(clk === 0){
			$('.gnb_nav ul li').removeClass('active');
			$('.gnb_nav ul li').eq(index).addClass('active');
			$('.ani').css({"left":"0","width":"0"});
		}

		if ($(document).scrollTop() >= 1) {
			$('.gnb_nav ul li').removeClass('active');
		} else {
			$('.header').removeClass('action');
			$('.gnb_nav ul li').removeClass('active');
		}

		if(index < 0){
			$('.gnb_nav ul li').removeClass('active');
		}else{
			$('.gnb_nav ul li').eq(index).addClass('active');
			var lf = $('.gnb_nav ul li').eq(index).offset().left;
			$('.ani').css({"left":lf,"width":"95px"});
		}
	});

	$('.gnb_nav ul li').hover(function(e) {
		var lf = $(this).offset().left;

		//$('.ani').css({"left":lf,"width":"95px"});
		$('.ani').css({"left":lf,"width":"95px","-webkit-transition":"all 0.6s ease","transition":"all 0.6s ease"});
	});

	if($('.gnb_nav ul li.active').hasClass('active')){
		var lf = $('.gnb_nav ul li.active').offset().left;
		$('.ani').css({"left":lf,"width":"95px"});
	}

	$(document).on('scroll', function() {
		//e.stopPropagation();
		if ($(this).scrollTop() >= 1) {
			$('.header').addClass('action');
			$('.bnt_totop_wrap').css("bottom","40px");
		} else {
			$('.header').removeClass('action');
			$('.bnt_totop_wrap').css("bottom","-60px");
		}

		$('.header').css('left', -$(this).scrollLeft() + "px");

		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);
		$('.progressbar').css('width', scrollPercentRounded +"%"  );

	});

	/* tab script */
	$.fn.tabFunc = function() {

		var tabHead = this.find('.tabHead');
		var tabBody = this.find('.tabBody');
		var tabPanel = tabBody.find('> div');
		var tabNode = tabHead.find('.tabNode');
		tabPanel.not(":first").hide();
//		tabPanel.hide();

		/* click event on tab handle */
		tabHead.find('.tabNode').each(function(){
			$(this).click(function(){
				tabNode.removeClass('on');
				$(this).addClass('on');
				var ind = $(this).index();
				tabPanel.hide();
				tabPanel.eq(ind).show();
			});
		});
	};

	$( "#tab_func1" ).tabFunc();
	$( "#tab_func2" ).tabFunc();
	$( "#tab_func3" ).tabFunc();
	$( "#tab_func4" ).tabFunc();

	$('.tbl_lst2 .txt2 a').click(function(e) {
//		$(this).parent().parent().parent().next('.detail_board').find('.area_board').slideToggle(300);
		$(this).parent().parent().parent().toggleClass('active');
		var minHeight = $(this).parent().parent().parent().next('.detail_board').find('.area_board').css('min-height');

		$(this).parent().parent().parent().next('.detail_board').find('.area_board').css('min-height',0).slideToggle(120, function() {
			$(this).css('min-height', minHeight);
		});
//		$(this).parent().parent().parent().next('.detail_board').find('.area_board').animate('min-height', minHeight);
//		 $(this).parent().parent().parent().next('.detail_board').find('.area_board').animate({ 'min-height': minHeight }, 'fast');
//		$(this).toggleClass('on');
	});

});

$(window).scroll(function() {
	 var hT = $('.container').offset().top,
		hH = $('.container').outerHeight(),
		FH = $('.footer').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS >= (hT+hH-wH)){
		$('.bnt_totop_wrap').css({"position":"fixed","bottom":FH+150});
		$('.bnt_totop_wrap').addClass('noTransition');
	}else{

		$('.bnt_totop_wrap').css("position","fixed");
		$('.bnt_totop_wrap').removeClass('noTransition');
	}
});

$(window).resize(function(e) {
	var lf = $('.gnb_nav ul li.active').offset().left;
	$('.ani').css({"left":lf,"width":"95px","-webkit-transition":"all 0s ease","transition":"all 0s ease"});
});
