$('body').delegate('#marker_data img', 'click', showLightbox);
$('body').delegate('#lightbox .prev', 'click', changeLightboxPrev);
$('body').delegate('#lightbox .next', 'click', changeLightboxNext);
$('body').append($(''));
var lightboxes = { images : [], active : 0 };
function showLightbox() {
	lightboxes.images = [];
	var self = $(this), n = 0;;
	$('img',$(this).parent()).each(function() {
		console.log($(this).attr('src'));
		lightboxes.images.push($(this).attr('src'));
		if ($(this).attr('src') == self.attr('src')) {
			lightboxes.active = n;
		}
		n++;
	});
	lightbox('<img src="'+$(this).attr('src')+'"/>');
	checkLightboxButtons();
}

function changeLightboxPrev() { changeLightbox(-1); }
function changeLightboxNext() { changeLightbox(1); }

function checkLightboxButtons() {
	if ( lightboxes.active == lightboxes.images.length - 1) {
		$('#lightbox .next').addClass('inactive');
	} else {
		$('#lightbox .next').removeClass('inactive');
	}
	if ( lightboxes.active == 0) {
		$('#lightbox .prev').addClass('inactive');
	} else {
		$('#lightbox .prev').removeClass('inactive');
	}
}

function changeLightbox(n) {
	if (lightboxes.active + n >= 0 && lightboxes.active + n < lightboxes.images.length) {
		lightboxes.active += n;
		lightbox('<img src="'+lightboxes.images[lightboxes.active]+'"/>');
	}
	checkLightboxButtons();
}

function lightbox(insertContent, ajaxContentUrl){

	// add lightbox/shadow <div/>'s if not previously added
	if($('#lightbox').size() == 0){
		var theLightbox = $('<div id="lightbox"/>').html('<div class="content"></div><div class="prev">&lt;</div><div class="next">&gt;</div>');
		var theShadow = $('<div id="lightbox-shadow"/>');
		$(theShadow).click(function(e){
			closeLightbox();
		});
		$('body').append(theShadow);
		$('body').append(theLightbox);
	}

	// remove any previously added content
	$('#lightbox .content').empty();

	// insert HTML content
	if(insertContent != null){
		$('#lightbox .content').append(insertContent);
	}

	// insert AJAX content
	if(ajaxContentUrl != null){
		// temporarily add a "Loading..." message in the lightbox
		$('#lightbox').append('<p class="loading">Loading...</p>');

		// request AJAX content
		$.ajax({
			type: 'GET',
			url: ajaxContentUrl,
			success:function(data){
				// remove "Loading..." message and append AJAX content
				$('#lightbox').empty();
				$('#lightbox').append(data);
			},
			error:function(){
				alert('AJAX Failure!');
			}
		});
	}

	// move the lightbox to the current window top + 100px
	//$('#lightbox').css('top', $(window).scrollTop() + 100 + 'px');

	// display the lightbox
	$('#lightbox').show();
	$('#lightbox-shadow').show();

}

// close the lightbox
function closeLightbox(){

	// hide lightbox and shadow <div/>'s
	$('#lightbox').hide();
	$('#lightbox-shadow').hide();

	// remove contents of lightbox in case a video or other content is actively playing
	$('#lightbox .content').empty();
}