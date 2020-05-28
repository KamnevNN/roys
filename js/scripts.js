(function ($) {
	function moveContacts() {
		if ($(document).width() < 1040) {
			$(".main-right__list").after($(".main-contacts"));
		} else {
			$(".main-images").after($(".main-contacts"));
		}
	}

	moveContacts();
	$(window).resize(function () {
		moveContacts();
	});
})(jQuery)