function contact() {
	var check = $("#content div:last");
	if(check.hasClass("contact")){
		$("#content div:last").remove();
	}

	var div1 = $('<div>');
	var desc_l1 = $("<p>This is a dummy Website</p>");
	var desc_l2 = $("<p>All the links in this website dont get redirected to another page</p>");
	var desc_l3 = $('<p>All the pages in the links are created during runtime using <bold>JQuery</bold></p>');
	// var add_contact = $('<div><p>This is a dummy Website</p><p>All the links in this website dont get redirected to another page</p><p>All the pages in the links are created during runtime using jquery</p>');
	$("#content").append(div1);
	var dd = $("#content div:last");
	dd.addClass("contact");
	// var par_div = $("#content").find(".contact");
	$(".contact").append(desc_l1);
	$(".contact").append(desc_l2);
	$(".contact").append(desc_l3);
}

// $('#home').on('click','button' ,function() {
// 	confirm("da");
//   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
//   $('#content').append(message);
  
// });

function menu() {
	var check = $("#content div:last");
	if(check.hasClass("contact")){
		$("#content div:last").remove();
	}
	// $("body").css({
	// 	"background-image", "url(Images/Menu.jpg)"
	// });
	$("body").css({ "background-image": "url(Images/Menu.jpg )" });
}

function offer(){
	var check = $("#content div:last");
	if(check.hasClass("contact")){
		$("#content div:last").remove();
	}

	$("body").css({ "background-image": "url(Images/Restaurant.jpg )" });

	var div1 = $('<div>');
	$("#content").append(div1);
	var dd = $("#content div:last");
	dd.addClass("contact");
	var img = $("<img src='Images/sad.png'>");
	$(".contact").append(img);
	// $(".contact img").addId("smiley");
	$('.contact img').attr('id', 'smiley');
	var sry = $("<p style='text-align:center; position:relative; right:20px;'>Sorry, NO offer today </p>")
	$(".contact").append(sry);
	$(".contact").css({ "background-color": "#FF5722" });
}

function home(){
	var check = $("#content div:last");
	if(check.hasClass("contact")){
		$("#content div:last").remove();
	}
	$("body").css({ "background-image": "url(Images/main.jpg )" });
}