
$(document).ready(function() { 
	 // $("#img1").show("fade",1000);
	 // $("#dot1").animate({"opacity":"1"},500);
	
	    $("#img1").show();

	$("#dot1").on("click", function() {
	    dot1_active();
	});

	$("#dot2").on("click", function() {
	    dot2_active();
	});

	$("#dot3").on("click", function() {
	    dot3_active();
	});

	$("#img1").on("click", function() {
	    dot2_active();
	});

	$("#img2").on("click", function() {
	    dot3_active();
	});

	$("#img3").on("click", function() {
	    dot1_active();
	});

	function dot1_active(){
		$("#dot1").animate({"opacity":"1"},500);
	    $("#dot2").animate({"opacity":"0.6"},500);
	    $("#dot3").animate({"opacity":"0.6"},500);

	    $("#img1").show("fade",1000);
	    $("#img2").hide();
	    $("#img3").hide("fade",800);

	
		$("#caption").fadeOut(function() {
		  $(this).text("Let Elliot know which suggestions you like and it will automatically schedule events once both people confirm. ")
		}).fadeIn(800);
		

	}

	function dot2_active(){
		$("#dot2").animate({"opacity":"1"},500);
	    $("#dot1").animate({"opacity":"0.6"},500);
	    $("#dot3").animate({"opacity":"0.6"},500);

	    $("#img2").show("fade",1000);

	    $("#img3").hide();
	    $("#img1").hide("fade",800);

	    $("#caption").fadeOut(function() {
		  $(this).text("As you plan your week, let Elliot know what works for you.")
		}).fadeIn(800);
		}

	function dot3_active(){
		$("#dot3").animate({"opacity":"1"},500);
	    $("#dot1").animate({"opacity":"0.6"},500);
	    $("#dot2").animate({"opacity":"0.6"},500);

	    $("#img3").show("fade",1000);

	    $("#img2").hide("fade",800);
	    $("#img1").hide();

	    
		$("#caption").fadeOut(function() {
		  $(this).text("If you and your friend can both meet, Elliot schedules.")
		}).fadeIn(800);
	}
});