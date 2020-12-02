/*--$(document).ready(function(){  
    $("h1").click(function(){     
        $(this).css("background-color","red");
    }); 
});

$(document).ready(function(){
   $(".btn-full").click(function(){
       $("h1").toggle();
   }); 
});*/



/*---WE USE JQUERY PLUGIN CALLED- WAYPOINTS(USED WHEN WE SCROOL ANY ELEMENT)-go to waypoints.com and dowload it and copy jquery waypoints.min in vendors/js.alsoin body where all java script files.-*/
/*very ipm- humesha ye main script ke upr ayegi..own script humesa last me.*/
/*offset ka matlab sec-features se 60px phle--*/

/* for the sticky navigation*/
$(document).ready(function(){
    $(".js--section-features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    },{
         offset: '100px;'
    });
    
    
    
    /* scroll on buttons */
    
    $(".js--scroll-to-plan").click(function(){
        $("html,body").animate({scrollTop: $(".js--section-plan").offset().top},1000);
    });
   
    
     $(".js--scroll-to-features").click(function(){
        $("html,body").animate({scrollTop: $(".js--section-features").offset().top},1000);
    });
    
 
    /*navigation scroll*/
    /*v-imp-code snippets jquery smooth scrolling (bs copy or paste niche aur kahi nhi*/
    $(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
    
        /*------------------animations on scrool-- -----*/
    
    /*** rules to animate with css in "GITHUB"-*/
    
    /*--VERY IMPORTANT rule- .addClass("animated fadeIn"); -isme animate or phir jo animation chayiye vohi ayega bs rule hai*/
    
    
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeIn");
    },{
        offset:'45%'
    });
      
      $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeInUp");
    },{
        offset:'45%'
    });
      
      $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    },{
        offset:'45%'
    });
      
      $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    },{
        offset:'45%'
    });
      

    
    /*===== mobile navigation----------*/
    /*--give class to nav icon first when we click on it--*/
    
    
    /*important- variables-- (in which we can store things) , isme nav me store krenge kuch */
    /*- var nav = write $(result of selecting hi ayega class de kar-{matlab var nav = uske andar ye hai}) */
    /*slidetoggle-is to open or close box only with 0.2s -200milisecond*/
    
    /*IMPORTANT-var nav,icon isliye le rhe hai taki hume repat nhi krna pade aage YE CLASS LAMBI HAI BHOT */
    
    /*-if is used to take decision-*/
    
    
    $(".js--nav-icon").click(function(){
        var nav = $(".js--main-nav");
        var icon= $(".js--nav-icon i");
        
        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-ios-close");
            icon.removeClass("ion-navicon-round");
        }else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-ios-close");
        }
        
    });
 
    $(".ashish").click(function(){
        $("html,body").animate({scrollTop: $("#features").offset().top},1000);
        
    });
    
    
}); 


/* 
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
offset ka matlab sec-features se 60px phle
*/