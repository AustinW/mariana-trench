$(function() {
	$("a.expeditions-item").click(function(e) {

		var speed = ($('.hms-challenger').is(':hidden') && $('.trieste').is(':hidden') && $('.deepsea-challenger').is(':hidden')) ? 0 : 500;

		$('#expedition-note').hide();

		$('.expeditions-individual').fadeOut(speed, function() {

			$('.hms-challenger,.trieste,.deepsea-challenger').hide();
			$('.' + $(e.target).attr('data-expedition')).show();

			$('.expeditions-individual').fadeIn(500);
		});
	});
});