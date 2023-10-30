function gridResize() {
	if($('#grid-view').hasClass('active')) {
		// What a shame bootstrap does not take into account dynamically loaded columns
		cols = $('#column-right, #column-left').length;
//alert('ready');
		if (cols == 2) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12');
			$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
		} else if (cols == 1) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-sm-3 col-xs-12');
			$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
			if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth > 1299) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-sm-3 col-xs-12');
				$('#content .product-layout:nth-child(2n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(2n+2)').addClass('last-item');
			}
			if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 979) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-sm-3 col-xs-12');
				$('#content .product-layout:nth-child(2n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(2n+2)').addClass('last-item');
			}
			if (document.documentElement.clientWidth < 980 && document.documentElement.clientWidth > 767) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6');
				$('#content .product-layout:nth-child(2n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(2n+2)').addClass('last-item');
			}
		if (document.documentElement.clientWidth < 768) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6');
				$('#content .product-layout:nth-child(2n+1)').addClass('first-item');
				$('#content .product-layout:nth-child(2n+2)').addClass('last-item');
			}
			if (document.documentElement.clientWidth < 479) {
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-6 col-sm-12 col-xs-12 last-item');
				$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-6 col-sm-12 col-xs-12 last-item');
			}
		} else {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
			$('#content .product-layout:nth-child(3n+1)').addClass('first-item');
			$('#content .product-layout:nth-child(3n+3)').addClass('last-item');
		}
		}
}
$(document).ready(function() {gridResize();});
$( window ).resize(function() {gridResize();});


var widthClassOptions = [];
var widthClassOptions = ({
			bestseller       : 'bestseller_default_width',		
			featured         : 'featured_default_width',
			special          : 'special_default_width',
			latest           : 'latest_default_width',
			related          : 'related_default_width',
			additional       : 'additional_default_width',
			module           : 'module_default_width',
			tabbestseller    : 'tabbestseller_default_width',		
			tabfeatured      : 'tabfeatured_default_width',
			tabspecial       : 'tabspecial_default_width',
			tablatest        : 'tablatest_default_width',
			testimonial		 : 'testimonial_default_width'			
});

$(document).ready(function(){
	$('#content select').customSelect();
	$('ul.breadcrumb').appendTo('#breadcrumb .container');
	$('.aboutus h1, .affiliate-success h1').prependTo('#breadcrumb .container');
	
	
	/*$('#content select').customSelect();
		$('ul.breadcrumb').prependTo('.row #content');*/
	
	
	// Last Word
	$("#common-home .blog_stats .hl").html(function(){
	  var text= $(this).text().trim().split(" ");
	  var last = text.pop();
	  return text.join(" ") + (text.length > 0 ? " <span class='last-word'>" + last + "</span>" : last);
	});
	
	if ($(document).width() <= 1299) {
		$('.content_headercms_top .language-currency-block').appendTo('.header-nav-wrapper .header-nav-left');
	}
	
	 if ($(document).width() <= 979) {
		$('.header-nav-wrapper .header-nav-right  .dropdown.search').appendTo('.nav-full-wrapper .container');
		$('#footer .footer-logo').insertBefore('#footer .column.first');
		$('.header-nav-left .social-block').appendTo('#footer .column.forth');
		$('#footer .copyright-container').appendTo('#footer .column.forth');	
	}
	
	
	/*$('.language-currency-block').click(function(event) {
	    $(this).toggleClass('active');
	    event.stopPropagation();
	    $(".language-currency-block-inner").slideToggle("slow");
		$(".myaccount-menu").slideUp("slow");
            $(".myaccount > .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			
			$(".cart-menu").slideUp("slow");
	});*/
	
	
	$("#cart .dropdown-toggle").click(function(){
            $(this).toggleClass("active");
			$(".cart-menu").slideToggle("slow");
			$(".myaccount-menu").slideUp("slow");
			$(".language-menu").slideUp("slow");
			$(".currency-menu").slideUp("slow");
            $(".myaccount > .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			
			$(".header-search.dropdown-toggle").removeClass('active');
			$(".block-top-contact-inner").slideUp("slow");
        	return false;
    });
		
	$("#form-currency .dropdown-toggle").click(function(){
			$('#form-currency').addClass("active");
           	$(".language-menu").slideUp("slow");
        	$(".currency-menu").slideToggle("slow");
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideUp("slow");
			$(".myaccount > .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			
			$(".header-search.dropdown-toggle").removeClass('active');
			$(".block-top-contact-inner").slideUp("slow");
        	return false;
    });
		
    $("#form-language .dropdown-toggle").click(function(){
			$('#form-language').addClass("active");
            $(".currency-menu").slideUp("slow");
        	$(".language-menu").slideToggle("slow");
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideUp("slow");
			$(".myaccount > .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			
			$(".header-search.dropdown-toggle").removeClass('active');
			$(".block-top-contact-inner").slideUp("slow");
        	return false;
    });
		
	$(".myaccount > .dropdown-toggle").click(function(){          
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideToggle("slow");	
 			$(this).toggleClass("active");		
			$(".language-menu").slideUp("slow");
			$(".currency-menu").slideUp("slow");
			$("#cart .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			
			$(".header-search.dropdown-toggle").removeClass('active');
			$(".block-top-contact-inner").slideUp("slow");
        	return false;
    });
	// append footer contact js
	
	
	$(".header-search.dropdown-toggle").click(function(){
			$(this).toggleClass('active');
			$("#search").slideToggle("slow");
        	$(".language-menu").slideUp("slow");
       		$(".currency-menu").slideUp("slow");
			$(".cart-menu").slideUp("slow");
			$(".myaccount-menu").slideUp("slow");
			$(".myaccount > .dropdown-toggle").removeClass('active');
			$(".menu_toggle").slideUp("slow");
			$(".block-top-contact-inner").slideUp("slow");
        	return false;
    });
	
		
	$( ".inner" ).append( "<p>Test</p>" );
	
	$(".filterbox .list-group-items a").click(function() {
		$(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
	});

	$('.write-review, .review-count').on('click', function() {
		$('html, body').animate({scrollTop: $('#tabs_info').offset().top}, 'slow');
	});
	
	if ($(window).width() > 979) {
        $("#pxzoom1,#pxzoom2,#pxzoom3").elevateZoom({
                
                gallery:'additional-carousel',
                //inner zoom                 
                                 
                //zoomType : "inner", 
                //cursor: "crosshair" 
                
                //tint
                
                //tint:true, 
                //tintColour:'#F90', 
                //tintOpacity:0.5
                
                //lens zoom
                
                zoomType : "lens", 
                lensShape : "round", 
                lensSize : 200 
                
                //Mousewheel zoom
                
                //scrollZoom : true
                
                
            });
        var z_index = 0;
                            
                            $(document).on('click', '.thumbnail', function () {
                              $('.thumbnails').magnificPopup('open', z_index);
                              return false;
                            });
                        
                            $('.additional-carousel a').click(function() {
                                var smallImage = $(this).attr('data-image');
                                var largeImage = $(this).attr('data-zoom-image');
                                var ez =   $('#tmzoom').data('elevateZoom');    
                                $('.thumbnail').attr('href', largeImage);  
                                ez.swaptheimage(smallImage, largeImage); 
                                z_index = $(this).index('.additional-carousel a');
                                return false;
                            });
            
    }else{
        $(document).on('click', '.thumbnail', function () {
        $('.thumbnails').magnificPopup('open', 0);
        return false;
        });
    }
$(document).ready(function() {     
    $('.thumbnails').magnificPopup({
        delegate: 'a.elevatezoom-gallery',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
});
	
});

/* JS FOR FILTER */

/*function leftFilter(){
if ($(window).width() <= 979) {
$('#column-left .filterbox').appendTo('.row #content .category_list');
$('#column-right .filterbox').appendTo('.row #content .category_list');
} else {
$('.row #content .category_list .filterbox').appendTo('#column-left .sidebarFilter');
$('.row #content .category_list .filterbox').appendTo('#column-right .sidebarFilter');
}
}
$(document).ready(function(){leftFilter();});
$(window).resize(function(){leftFilter();});
*/
function mobileToggleMenu(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$("#footer .mobile_togglemenu").remove();
		$("#footer .column h5").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#footer .column h5").addClass('toggle');
		$("#footer .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
		});
		$("#footer .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('.block-aboutus').toggle('slow');
		});

	}else{
		$("#footer .column h5").parent().find('ul').removeAttr('style');
		$("#footer .column h5").removeClass('active');
		$("#footer .column h5").removeClass('toggle');
		$("#footer .mobile_togglemenu").remove();
	}	
	
}
$(document).ready(function(){mobileToggleMenu();});
$(window).resize(function(){mobileToggleMenu();});


function menuResponsive(){
	//alert($(window).width());
	if ($(window).width() < 980)
	{
		$('.nav.navbar-nav').css('display','none');
		$("#menu").addClass('responsive-menu');
		$("#menu").removeClass('main-menu');
		$('.nav-responsive').css('display','block');
		$("#menu .mobile_togglemenu").remove();
		$("#menu ul li.dropdown").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#menu ul li.dropdown").addClass('toggle');
		
		$("#menu .nav > li.dropdown .mobile_togglemenu").click(function(){
			 $(this).parent().toggleClass('active');
			 $(this).siblings("li .dropdown-menu").slideToggle('slow');
		});

	}else{
		$("#menu").addClass('main-menu');
		$("#menu").removeClass('responsive-menu');
		$("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
		$("#menu ul li.dropdown").removeClass('active');
		$("#menu ul li.dropdown").removeClass('toggle');
		$("#menu .mobile_togglemenu").remove();
		$('.nav-responsive').css('display','none');
		$('.nav.navbar-nav').css('display','block');
	}	
}
$(document).ready(function(){menuResponsive();});
$(window).resize(function(){menuResponsive();});


$(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $("ul.dropdown-toggle").toggle('slow');
  });
});


function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
		}, 3000);
	});	
}


$(document).ready(function(){


});



function leftright()
{
	if ($(window).width() < 980){
			if($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right')==true){
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
			}
	}
}

$(document).ready(function(){leftright();});
$(window).resize(function(){leftright();});


/*//vertical more menu 


$(document).ready(function() {
    jQuery(function($) {

        var max_elem = 7;
       
        if ($(window).width() <= 1799) {
            max_elem = 5;
        }
        if ($(window).width() <= 1299) {
            max_elem = 4;
        }
        if ($(window).width() < 980) {
            max_elem = 12;
        }

        $('.vertical-category #nav-one li').first().addClass('home_first');
        var items = $('.vertical-category #nav-one li.top_level');
        var surplus = items.slice(max_elem, items.length);
        surplus.wrapAll('<li class="top_level hiden_menu dropdown"><div class="dropdown-menu megamenu more"><div class="dropdown-inner">');
        $('.hiden_menu').prepend('<a href="#" class="top-level">More</a>');


    });
});*/

//main more menu 

$(document).ready(function(){
jQuery(function($){

var max_elem = 6;
 if ($(window).width() <= 1799) {
            max_elem = 4;
        }
	if ($(window).width() <= 1299) {
            max_elem = 3;
        }
if($(window).width() <=979){ max_elem = 15;}

$('#menu .navbar-nav li').first().addClass('home_first');
var items = $('#menu .navbar-nav  li.top_level');
var surplus = items.slice(max_elem, items.length);
surplus.wrapAll('<li class="top_level hiden-menu dropdown"><div class="dropdown-menu megamenu"><div class="dropdown-inner">');
$('.hiden-menu').prepend('<a href="#" class="level-top">More</a>');

});

});



//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn(){
	if ($(window).width() < 980)
	{
		$('#column-left,#column-right').insertAfter('#content');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
		$("#column-left .box-heading,#column-right .box-heading").append( "<a class='mobile_togglemenu'>&nbsp;</a>" );
		$("#column-left .box-heading,#column-right .box-heading").addClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").click(function(){
			$(this).parent().toggleClass('active').parent().find('.box-content,.sidebarFilter,.list-group').slideToggle('slow');
		});
	}else{
		$('#column-left').insertBefore('#content');
		$('#column-right').insertAfter('#content');
		$('.common-home #column-left,.common-home #column-right').insertBefore('#content-top');
		$("#column-left .box-heading,#column-right .box-heading").parent().find('.box-content,.sidebarFilter,.list-group').removeAttr('style');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('active');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('toggle');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
	}
}
$(document).ready(function(){mobileToggleColumn();});
$(window).resize(function(){mobileToggleColumn();});


function productCarouselAutoSet() { 
	$("#content .product-carousel, .banners-slider-carousel .product-carousel ").each(function() {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel','');
		if(myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0,myObject.indexOf("-"));		
		if(widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass= 'grid_default_width';
		var slider = $("#content #" + objectID + ",   .banners-slider-carousel #" + objectID );
		slider.sliderCarousel({
			defWidthClss : myDefClass,
			subElement   : '.slider-item',
			subClass     : 'product-block',
			firstClass   : 'first_item_tm',
			lastClass    : 'last_item_tm',
			slideSpeed : 1000,
			paginationSpeed : 800,
			autoPlay : false,
			stopOnHover : false,
			goToFirst : true,
			goToFirstSpeed : 1000,
			goToFirstNav : true,
			pagination : true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			baseClass : "slider-carousel",
			theme : "slider-theme",
			autoHeight : true
		});
		
		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function(){
			slider.trigger('slider.next');
		})
		prevButton.click(function(){
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function(){productCarouselAutoSet();});


function productListAutoSet() { 
	$("#content .productbox-grid").each(function(){
		var objectID = $(this).attr('id');
		if(objectID.length > 0){
			if(widthClassOptions[objectID.replace('-grid','')])
				var myDefClass= widthClassOptions[objectID.replace('-grid','')];
		}else{
			var myDefClass= 'grid_default_width';
		}	
		$(this).smartColumnsRows({
			defWidthClss : myDefClass,
			subElement   : '.product-items',
			subClass     : 'product-block'
		});
	});		
}
$(window).load(function(){productListAutoSet();});
$(window).resize(function(){productListAutoSet();});


function HoverWatcher(selector){
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function() {
		return self.hovering;
	}

	$(selector).hover(function() {
		self.hovering = true;
	}, function() {
		self.hovering = false;
	})
}

function LangCurDropDown(selector,subsel){
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function() {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
				$(selector).removeClass('active');
		}, 3000);
	});
	
	$(subsel).hover(function() {
		setTimeout(function() {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(480);
		}, 3000);
	});	
}

$(document).ready(function(){

	/*LangCurDropDown('#currency','.currency_div');
	LangCurDropDown('#language','.language_div');*/

	$('.nav-responsive').click(function() {
        $('.responsive-menu .nav.navbar-nav').slideToggle();
		$('.nav-responsive div').toggleClass('active');
		
    }); 

	$(".treeview-list").treeview({
		animated: "slow",
		collapsed: true,
		unique: true		
	});
	$('.treeview-list a.active').parent().removeClass('expandable');
	$('.treeview-list a.active').parent().addClass('collapsable');
	$('.treeview-list .collapsable ul').css('display','block');
});

 
$(document).ready(function(){
  $(".tm_headerlinks_inner").click(function(){
    $(".header_links").toggle('slow');
  });
  
});

/*For Grid and List View Buttons*/
function gridlistactive(){
$('.btn-list-grid button').on('click', function() {
if($(this).hasClass('grid')) {
  $('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.list').removeClass('active');
}
  else if($(this).hasClass('list')) {
$('.btn-list-grid button').addClass('active');
  $('.btn-list-grid button.grid').removeClass('active');
  }
});
}
$(document).ready(function(){gridlistactive()});
$(window).resize(function(){gridlistactive()});


/*For Back to Top button*/
$(document).ready(function(){
$("body").append("<a class='top_button' title='Go To Top' href=''>TOP</a>");

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			$('.top_button').fadeIn();
		} else {
			$('.top_button').fadeOut();
		}
		
	});
	// scroll body to 0px on click
	$('.top_button').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
});

/*  For more menu */

/* $(document).ready(function(){
jQuery(function($){

var max_elem = 10 ;
$('.dropmenu li').first().addClass('home_first');
var items = $('.dropmenu  li.level0');
var surplus = items.slice(max_elem, items.length);
surplus.wrapAll('<li class="level0 level-top hiden_menu"><ul>');
$('.hiden_menu').prepend('<a href="#" class="level-top activSub">More</a>');

});
}); */

/* For Blog Image */ 
function blogCrop(){
if ($(window).width() > 979) {
$('.extension-theme_blog-home .image').each(function() {	   
var that = $(this);
var url = that.find('img').attr('src');
that.css({'background-image':'url("' + url + '")'});
});
}
}
jQuery(document).ready(function() {blogCrop();});
jQuery(window).resize(function() {blogCrop();});


function blogSlider(){
 var psblog = jQuery("#blog-carousel");
    psblog.owlCarousel({
        items: 1, 
        itemsDesktop: [1299, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
        pagination: false,
		navigation: true,
		slideSpeed : 1000,
		rewindSpeed : 1000
		
		
    });
}
jQuery(document).ready(function() {blogSlider();});
jQuery(window).resize(function() {blogSlider();});



function testimonialSlider(){
var psttestimonial = $("#psttestimonial-carousel");
psttestimonial.owlCarousel({
    autoPlay: true,
    pagination: true,
    navigation: false,
	items: 3, //10 items above 1000px browser width	
	itemsDesktop: [1299, 2],
	itemsDesktopSmall: [979, 2],
	itemsTablet: [767, 1],
	itemsMobile: [479, 1],
	slideSpeed : 1000,
	rewindSpeed : 1000,
	
});
}
jQuery(document).ready(function() {testimonialSlider();});
jQuery(window).resize(function() {testimonialSlider();});



/*  category list js start*/

function pstcategorylistcarousel() {
	var pstcategorylist = $(".pstcategorylist-carousel");
	pstcategorylist.owlCarousel({
	    items: 3, //10 items above 1000px browser width
	    itemsDesktop: [1299, 3],
	    itemsDesktopSmall: [979, 2],
	    itemsTablet: [767, 2],
	    itemsMobile: [479, 1],
	
	    pagination: false,
	    navigation: true,
		slideSpeed : 1500,
		rewindSpeed : 1000
	});
}
jQuery(document).ready(function () {
	pstcategorylistcarousel();
});
jQuery(window).resize(function () {
	pstcategorylistcarousel();
});


function responsivecolumn() {

        // ---------------- Fixed header responsive ----------------------
		 var num = 141;
		  if ($(document).width() >= 980) {
				$(window).bind('scroll', function() {
					if ($(window).scrollTop() > num) {
						$('.content_headercms_top').addClass('fixed');
					} else {
						$('.content_headercms_top').removeClass('fixed');
					}
				});
		}
		else {
       	 $('.content_headercms_top').removeClass('fixed');
        }
}
$(document).ready(function() {
    responsivecolumn();
});
$(window).resize(function() {
    responsivecolumn();
});


function responsivecolumn1() {
 var num = 141;
    if ($(document).width() <= 979) {

        // ---------------- Fixed header responsive ----------------------
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > num) {
                $('.content_headercms_top').addClass('fixed');
            } else {
                $('.content_headercms_top').removeClass('fixed');
            }
        });
    }
}
$(document).ready(function() {
    responsivecolumn1();
});
$(window).resize(function() {
    responsivecolumn1();
});