$("#portfolio").click(function(){
	$("#footer").show();
	$("#imgplaceholder").empty();
	$("#imgplaceholder").append("<div id=\"gallery\"></div>");
	$("#imgplaceholder").css("background-image", "url(images/bck_portfolio.jpg)"); 
	$("#gallery").empty();
	$("#gallery").show();
	var pics = [
		{
			title:'',
			src:'portfolio_1.jpg'
		},
		{
			title:'',
			src:'portfolio_2.jpg'
		},
		{
			title:'',
			src:'portfolio_3.jpg'
		},
		{
			title:'',
			src:'portfolio_4.jpg'
		},
		{
			title:'',
			src:'portfolio_5.jpg'
		},
		{
			title:'',
			src:'portfolio_6.jpg'
		},
		{
			title:'',
			src:'portfolio_7.jpg'
		},
		{
			title:'',
			src:'portfolio_8.jpg'
		}
		
	];

	for(i in pics){
		var divStr = "<div class=\"galleryitem\"><a  rel=\"gallery1\" id=\"port" + i + "\" title=\"" + pics[i].title + "\" href=\"images/" + pics[i].src + "\"><img src=\"images/thumb_" + pics[i].src + "\"/></a></div>";
		$("#gallery").append(divStr);
		
		$("#inline").fancybox({
			'hideOnContentClick': true
		});
	}

	$("#gallery .galleryitem a").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
	});

});

$("#bands").click(function(){
	$("#footer").show();
	$("#imgplaceholder").empty();
	$("#imgplaceholder").append("<div id=\"gallery\"></div>");
	$("#imgplaceholder").css("background-image", "url(images/bck_bands.jpg)"); 
	$("#gallery").empty();
	$("#gallery").show();
	var pics = [
		{
			title:'',
			src:'bands_2.jpg'
		},
		{
			title:'',
			src:'bands_3.jpg'
		},
		{
			title:'',
			src:'bands_5.jpg'
		},
		{
			title:'',
			src:'bands_6.jpg'
		},
		{
			title:'',
			src:'bands_7.jpg'
		},
		{
			title:'',
			src:'bands_8.jpg'
		},
		{
			title:'',
			src:'bands_9.jpg'
		},
		{
			title:'',
			src:'bands_10.jpg'
		},
		{
			title:'',
			src:'bands_11.jpg'
		}
		
	];
	for(i in pics){
		var divStr = "<div class=\"galleryitem\"><a rel=\"gallery1\" id=\"port" + i + "\" title=\"" + pics[i].title + "\" href=\"images/" + pics[i].src + "\"><img src=\"images/thumb_" + pics[i].src + "\"/></a></div>";
		$("#gallery").append(divStr);
		
		$("#inline").fancybox({
			'hideOnContentClick': true
		});
	}
	$("#gallery .galleryitem a").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
	});
});

$("#art").click(function(){
	$("#footer").show();
	$("#imgplaceholder").empty();
	$("#imgplaceholder").append("<div id=\"gallery\"></div>");
	$("#imgplaceholder").css("background-image", "url(images/bck_art.jpg)"); 
	$("#gallery").empty();
	$("#gallery").show();
	var pics = [
		{
			title:'',
			src:'art_1.jpg'
		},
		{
			title:'',
			src:'art_2.jpg'
		},
		{
			title:'',
			src:'art_3.jpg'
		},
		{
			title:'',
			src:'art_4.jpg'
		},
		{
			title:'',
			src:'art_5.jpg'
		},
		{
			title:'',
			src:'art_6.jpg'
		},
		{
			title:'',
			src:'art_7.jpg'
		},
		{
			title:'',
			src:'art_8.jpg'
		},
		{
			title:'',
			src:'art_9.jpg'
		}
	];
	for(i in pics){
		var divStr = "<div class=\"galleryitem\"><a rel=\"gallery1\" id=\"port" + i + "\" title=\"" + pics[i].title + "\" href=\"images/" + pics[i].src + "\"><img src=\"images/thumb_" + pics[i].src + "\"/></a></div>";
		$("#gallery").append(divStr);

		$("#inline").fancybox({
			'hideOnContentClick': true
		});


	}
	$("#gallery .galleryitem a").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
	});
});


$("#references").click(function(){

	$("#imgplaceholder").empty();

	$("#footer").hide();
	$("#gallery").empty();
	$("#imgplaceholder").append("<div id=\"gallery\"></div>");
	$("#imgplaceholder").css("background-image", "url(images/bck_references.jpg)"); 
	$("#gallery").hide();
	var pics = [
		
	];
	for(i in pics){
		var divStr = "<div class=\"galleryitem\"><a rel=\"gallery1\" id=\"port" + i + "\" title=\"" + pics[i].title + "\" href=\"images/" + pics[i].src + "\"><img src=\"images/thumb_" + pics[i].src + "\"/></a></div>";
		$("#gallery").append(divStr);

		/* Using custom settings */
		
		$("#inline").fancybox({
			'hideOnContentClick': true
		});

		/* Apply fancybox to multiple items */
	}
	$("#gallery .galleryitem a").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
	});
});


$("#me").click(function(){
	var szoveg = "1989. BUDAPEST (hungary). BABY. FAMILY. childhood. FOLKDANCE. UNIVERSITY. WORK. visuality. BLOG. italy. CANON. LOVE. DIPLOMA. website. MOMENTS. PHOTOGRAPHY! ********************************************************************************************************** contact: PHOTO@VERADEAK.COM, (36)30 625 9089";
	$("#footer").hide();
	$("#gallery").hide();
	$("#gallery").empty();
	$("#imgplaceholder").css("background-image", "none");
	$("#imgplaceholder").append("<div class=\"left_me\"><img src=\"images/art_2.jpg\"></div><div class=\"right_me\">" + szoveg + "</div>");
});
	

$("#blog").click(function(){
	window.open('http://kulturajanlo.blog.hu', 'kulturajanlo');
 	return false;
});

$("#facebook").click(function(){
	window.open('https://www.facebook.com/veradeakphoto', 'facebook');
 	return false;
});

// $("#imgplaceholder").hover(
// 	function(){
// 	  $('#gallery').fadeIn('slow', function() {
	 
// 	  });
// 	},
// 	function(){
// 	  $('#gallery').fadeOut('slow', function() {
	 
// 	  });
// 	}
// );

$(document).ready(function() {

	/* This is basic - uses default settings */
	$("#mcs_container").mCustomScrollbar();
	
	
});

