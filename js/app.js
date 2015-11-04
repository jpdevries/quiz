$(document).ready(function(){
	

	var ques = {
		one:"Who was Dante's muse?",
		two:"What is the name of Dante's treatsie on the vernacular called?",
		three:"From what Italian city did Dante hail from?",
		four:"How many circles did Dante determine the Inferno to have?",
		five:"Who did Dante put in the Beast's central mouth?"
	};

	$('#card').hide();
	

	$('#button').on('click', function(){
		$('#intro').hide();
		$('#card').fadeIn();
		
	
	});

	$('#card').on('click',function(){
		//console.log("clicked");
		$('#card').flip({
			front:'auto',
			axis:'x',
			speed:'100'
		});
		$('.back').show();

	});

	$('#ques').text(ques.four);
	$('#ans').text("Beatrice");

	//var answers = [1:4,2:2,3:1,4:2,5:3];
	

});