//lazy loader

jQuery(function() {
$("img.listingProductImage").show().lazyload({ 
 	threshold : 400,
	effect      : "fadeIn"
});

});

//sitemap

$('#siteMapList button').click(function() {
	 $('#siteMapList ul li ul').toggle(); 
	 });