$(function(){
	scrollbar();
});

function scrollbar(){
	$(window).scroll(function(){
		if($(this).scrollTop()+264>662)
		{
			$(".returnTop").show();
		}
		else{
			$(".returnTop").hide();
		}
		$(".returnTop").css("top",($(this).scrollTop()+264)+"px");

	});
	$(".returnTop").hover(function(){

		$(".returnTop").addClass("hoverimg");
			
	},function(){
		$(".returnTop").removeClass("hoverimg");
		
	});
}