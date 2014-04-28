var set1 = ["/public/images/6.png","/public/images/7.png", "/public/images/8.png"];
var set1_colors = [[0,0,0],[197,96,54],[147, 171, 138],[109,157,184]];
var set2 = ["/public/images/1.png","/public/images/2.png", "/public/images/3.png", "/public/images/4.png", "/public/images/5.png"];
var set2_colors = [[142,142,142],[214,164,0],[54,92,127],[220,158,130]];
var set3 = [];
var set3_colors = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
var allsets = [[set1,set1_colors], [set2,set2_colors], [set3, set3_colors]];

function createSets(){
	for (var j=0; j<allsets.length; j++){

		var set = allsets[j][0];
		var id = "set"+(1+j);

		var newset = document.createElement("div");
		newset.setAttribute("id",id);
		var setImages = document.getElementById("setImages");
		setImages.appendChild(newset);

		for (var i=0; i<set.length; i++){
			var set_i = document.createElement("img");
			set_i.setAttribute("src",set[i]);
			newset.appendChild(set_i);
		}

		if (j!=0){
			$("#"+id).css("display","none");
		}
	}
}

function changeColors(i){
	var colors = allsets[i-1][1];

	var color1 = "rgb("+colors[0][0]+","+colors[0][1]+","+colors[0][2]+")";
	$("#color1").css("background-color",color1);

	var color2 = "rgb("+colors[1][0]+","+colors[1][1]+","+colors[1][2]+")";
	$("#color2").css("background-color",color2);

	var color3 = "rgb("+colors[2][0]+","+colors[2][1]+","+colors[2][2]+")";
	$("#color3").css("background-color",color3);

	var color4 = "rgb("+colors[3][0]+","+colors[3][1]+","+colors[3][2]+")";
	$("#color4").css("background-color", color4);
}

function downsizeImage(){
	$("#setImages .active").css("max-height","90px");
	$("#setImages .active").css("width","150px");
	$("#setImages .active").css("z-index","0");
	$("#setImages .active").removeClass("active");
	$("#expand").css("display","none");
}

function webUpsizeImage(){
	$("#setImages .active").css("max-height","190px");
	$("#setImages .active").css("width","190px");
}

function mobileUpsizeImage(){
	$("#setImages .active").css("max-height","305px");
	$("#setImages .active").css("width","305px");
}

$(document).ready(function() {

	$("#drop_down_img").slideDown("slow",function(){
		$("#drop_down_text").fadeIn("slow");
		$("#setColors").fadeIn("slow");
	});

	createSets();

	$(".color").draggable( {
        revert : function(event, ui) {
        	$(this).data("ui-draggable").originalPosition = {
                top : 15,
                left : 200 - (50*$(this).attr("id")[5])
            };
            return !event;
		}
	});

	$("#set_numbers li").click( function() {
		if (!$(this).hasClass("active")){

			var set_i = $("#list_numbers .active").attr("id");
			$("#setImages #set"+set_i).css("display","none");
			$("#list_numbers .active").removeClass("active");

			$(this).addClass("active");
			set_i = $(this).attr("id");
			$("#setImages #set"+set_i).css("display","block");
			changeColors(set_i)
		}
	})

	$("#setImages img").click( function() {

		if (!$(this).hasClass("active")){

			$(this).addClass("active");
			$(this).css("z-index","1");
			$("#expand").css("display","block");

			console.log($(this).css("background-color"));
			if ($(this).css("background-color")=="rgb(0, 0, 255)"){
				mobileUpsizeImage();
			}
			else { webUpsizeImage(); }
		}
	});

	$("#expand").click( function() {
		downsizeImage();
	});

	$("#set_numbers li").click( function() {
		if (!$(this).hasClass("active")){
			downsizeImage();
		}
	})

});