
// ;$(function(){
// 	'use strict';

// 	var knowmebtn = $('.knowmebtn');

// 	knowmebtn.on('click',function()
// 	{
// 		$('html,body').animate({
// 			scrollBy:770px	
// 		},200)

// 	})

// })

// $(".logo").on('click',function(){
// 	$(".side").animate({
// 		 width: "toggle",
//                 height:"toggle"

//             });
$(function () {

	//侧边栏
	$("#sidebar-btn").on('click',function () {
	// $("#sidebar").css('display','block');
	$("#sidebar").fadeIn(400);
	$(".mask").fadeIn(400);
});

	$(".mask").on('click',function () {
		$("#sidebar").fadeOut(400);
		$(".mask").fadeOut(400);
		$(".login-box").hide();
	})


	//回到顶部
	$("#backTop img").hover(
		function () {
		this.src='img/backTopChange.png';
	}
	,
		function(){
		this.src='img/backTop.png';
	});
	
	$("#backTop").on('click',function () {
		$('html,body').animate({
			scrollTop:0
		},800)
	})

	$(window).on('scroll',function () {
		if ($(window).scrollTop() >$(this).height()) 
			$("#backTop").fadeIn();
		else
			$("#backTop").fadeOut();
	});

	$(window).trigger('scroll');

	//登录注册切换
	$("#denglu").click(
		function () {
	    $('#zhuce').css('border','none');
	    $('#denglu').css('border-bottom', '1px solid red');

	    $('.form2').hide();
	    $('.form1').show();
	})

	$("#zhuce").click(
	    function () {
	    $('#denglu').css('border','none');
	    $('#zhuce').css('border-bottom', '1px solid red');
	    
	    $('.form1').hide();
	    $('.form2').show();
	})

	//点击右上角login触发
	$("#nav-loginbtn").click(
		function () {
			$(".mask").fadeIn(400);
			$(".login-box").fadeIn(400);
		})
	$(".closebtn").click(function () {
		$(".login-box").hide();
		$(".mask").fadeOut(400);
	})



	//滚动事件
	var winHei = $(window).height()*0.75;
	var wrap = $(".wrap").offset().top-winHei;
	var section1 = $("#text-section1").offset().top-winHei;
	var section2 = $("#text-section2").offset().top-winHei;
	var section3 = $("#text-section3").offset().top-winHei;
	var purple = $(".heading-wrapper").offset().top-winHei;
	var card1 = $("#card1").offset().top-winHei;
	var card3 = $("#card3").offset().top-winHei;
	var card5 = $("#card5").offset().top-winHei;
	var inner = $("#inner").offset().top-winHei;
	$("#inner").addClass("action7");
	// alert(wrap);

	$(window).scroll(function () {
		var top = $(this).scrollTop();
		
		
		
		if (top>wrap) {
			$(".wrap").addClass("action1");
			
			// $(".wrap h1").addClass("green-h1-action");
			// $("#green-hr").addClass("green-hr-action");
			// $("#green-p").addClass("green-p-action");
			// $(".wrap h1").css({
			// 	transform: 'translateY(0)',
			// 	opacity: 1,
			// 	transition: 'all .5s ease-out'
			// })
			
			// $("#green-hr").css({
			// 	transform: 'translateY(0)',
			// 	opacity: 1,
			// 	transition: 'all .5s .2s ease-out'
			// })
			// $("#green-p").css({
			// 	transform: 'translateY(0)',
			// 	opacity: 1,
			// 	transition: 'all .5s .4s ease-out'
			// })
		}
		if(top>section1){
			$("#text-section1").addClass("action2");
		}
		if(top>section2){
			$("#text-section2").addClass("action2");
		}
		if(top>section3){
			$("#text-section3").addClass("action2");
		}
		if(top>purple){
			$(".heading-wrapper").addClass("action3");
		}
		if(top>card1){
			$("#card1").addClass("action4");
			$("#card2").addClass("action4");
		}if(top>card3){
			$("#card3").addClass("action4");
			$("#card4").addClass("action4");
		}if(top>card5){
			$("#card5").addClass("action4");
			$("#card6").addClass("action4");
		}
	})
})


