var prev_li = $("#first");
var setCounter = 1;

$(document).ready(function() {
	console.log("hi");
	$("#add").click( function() {
		var li = document.createElement('li');
		var ul = document.getElementById("imagesets");
		li.innerHTML = "<div class='block' style ='height: 50px; padding-top:40px'>+ Drag Images Here</div><div class='upload'>Upload</div>";
		ul.insertBefore(li, prev_li);
		prev_li = li;

		setCounter++;
		var set_li = document.createElement('li');
		var set_ul = document.getElementById("list_numbers");
		set_li.innerHTML = "<a href='#'>"+setCounter+"</a>";
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