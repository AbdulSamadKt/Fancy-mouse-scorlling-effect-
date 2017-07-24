jQuery(document).ready(function($) {
// Flag for checking mouse or trackpad
	
var myflag=true;
function slide_up($v){
    // Check chrome browser
	if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))
    // Check trackpad
		if($v== -3) myflag=false;

	$(".et_pb_row_0").addClass("animate-0");
	$(".et_pb_row_1").addClass("animate-1");
}
//function to Make a down movement for first and second raw
function slide_down(){
	if(myflag){
		$(".et_pb_row_0").removeClass("animate-0");
		$(".et_pb_row_1").removeClass("animate-1");}
		else 
			myflag=true;
	}
	// Function for fire when click the arrow at bottom
	$(".arrow-down").click(function(){
		slide_up();
		
	});
	// Function to check mouse wheel/ trackpad movements			
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if (event.originalEvent.wheelDelta < 0|| event.originalEvent.detail > 0){
			slide_up(event.originalEvent.wheelDelta);
		}
		else {
			slide_down();
		}
	});	
});
