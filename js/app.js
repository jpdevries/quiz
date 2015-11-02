$(document).ready(function(){
	$('#ques').hide();
	$('#ans').hide();

	$('#button').on('click', function(){
		$('#intro').slideUp(500);
		$('#ques').show();
	});

});