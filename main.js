console.log("hola");

let headerResize=document.querySelector(".data-header-resize");
// var headerResize = $('#banner').data('header-resize');

if( headerResize == 1 ) {
	$(window).bind('scroll', toggleNavClass);
}

// function toggleNavClass() {
// 	var scrollTop = $(window).scrollTop();
// 	var windowWidth = $(window).width();
// 	$('#banner').toggleClass( 'smallbar', scrollTop > 100 );
// }