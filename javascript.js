var prev_li = $("#first");
$(document).ready(function() {

	$("#add").click( function() {
		var li = document.createElement('li');
		var ul = document.getElementById("sets");
		li.innerHTML = "<div class='block' style ='height: 50px; padding-top:40px'>+ Drag Images Here</div><div class='upload'>Upload</div>";
		ul.insertBefore(li, prev_li);
		prev_li = li;
	});

});