
// A $( document ).ready() block.
$( document ).ready(function() {

	$( "div.list ul" ).scrollTop( 300 );

	$("#latest").click(function(){
		$(".latest").show();
		$(".popular").hide();
		$(".most_view").hide();
	});

	$("#popular").click(function(){
		$(".popular").show();
		$(".latest").hide();
		$(".most_view").hide();
	});

	$("#most_view").click(function(){
		$(".most_view").show();
		$(".popular").hide();
		$(".latest").hide();
	});

	 $(".list_head li a").click(function(){
           $('.list_head li').removeClass('active');   
           $(this).parent().addClass('active');   
      });
	 $(".topmenu li a").click(function(){
           $('.topmenu li').removeClass('active');   
           $(this).parent().addClass('active');   
      });


 // $('ul').on('click','li', function ( e ) {
 //        e.preventDefault();
 //        $(this).parents('ul').find('li').removeClass('active').end().end().addClass('active');
 //        $(activeTab).show();
 //    });

	$('.cross_button').click(function(){
		$('.fb_panel').hide();
	});



});