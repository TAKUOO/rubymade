$(function(){
$('.menu-trigger').on('click',function(){
	$(this).toggleClass('active');
	$('html').toggleClass('scroll-prevent')
	$('.g-nav').slideToggle();
	return false;
});
});

$(function() {
	$('a[href^="#"]').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-0;
		$('body, html').animate({scrollTop:position}, speed, 'swing');
		$('.g-nav').css('display','none');
		$('.menu-trigger').toggleClass("active");
		$('html').toggleClass("scroll-prevent");
		return false;
	});
});

/*$(function(){
$('.menu-trigger').on('click',function(){
	$(this).toggleClass('active');
	$('.g-nav').slideToggle();
	return false;
});
});*/

$(document).ready(function(){
$('#slider').bxSlider({
	auto: true,
	infiniteLoop: true,
	speed: 1000,
	pager: false,
	controls: false
});
});

$(function(){
$(window).scroll(function (){
		$('.fadein').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 150){
						$(this).addClass('scrollin');
						}
				});
		});
});

$(function() {
	var topBtn = $('#page-top');    
	topBtn.hide();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
					topBtn.fadeIn();
			} else {
					topBtn.fadeOut();
			}
	});
	topBtn.click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500);
			return false;
	});
});

var map;
function initMap() {

	// マップ基本設定
	var latLng = new google.maps.LatLng(33.589679, 130.398393);
	map = new google.maps.Map(
		document.getElementById("map"),
		{
			zoom: 17,  // 拡大率
			center: latLng,
			scrollwheel: false  // マウスホイールで拡縮しなくなる
		}
	);

		 // マーカーの設定
	 var markerImg = {
		url: './img/icon.png'
	};
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		icon: markerImg
	});


	var mapStyle = [
		{
				"stylers": [
					{ "saturation": -100 }
				]
		}
	];
	var mapType = new google.maps.StyledMapType(mapStyle);
	map.mapTypes.set('GrayScaleMap', mapType);
	map.setMapTypeId('GrayScaleMap');


}

