
$(document).ready(function() {

	var setCounter = 1;

	$("#drop_down_img").slideDown("slow",function(){
		$("#drop_down_text").fadeIn("slow");
		$("#setColors").fadeIn("slow");
	});

	$("#add").click( function() {
		var li = document.createElement('li');
		var ul = document.getElementById("imagesets");
		li.innerHTML = "<div class='block' style ='height: 60px; padding-top:50px'>+ Drag Images Here</div><div class='upload'>Upload</div>";
		ul.appendChild(li);

		setCounter++;
		var set_li = document.createElement('li');
		var set_ul = document.getElementById("list_numbers");
		set_li.innerHTML = setCounter;
		$(set_li).attr("id",setCounter);
		set_ul.appendChild(set_li);
	});

	$("#add").mousedown( function() {
		$(this).css("color","black");
	});
	$("#add").mouseup( function() {
		$(this).css("css","white");
	});

	$("#add").hover( function() {
		$(this).css("color","white");
	}, function() {
		$(this).css("color","lightgray");
	});

});