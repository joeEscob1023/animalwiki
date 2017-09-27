var animal = prompt("What animal do you want to read about? Penguins, Spiders, or Squirrels?").toUpperCase();

if(animal === 'PENGUINS') {
	$("#penguins").show();
	$("#spiders").hide();
	$("#squirrels").hide();
	$("#error").hide();
} else if(animal === 'SPIDERS'){
	$("#spiders").show();
	$("#penguins").hide();
	$("#squirrels").hide();
	$("#error").hide();
} else if(animal === "SQUIRRELS") {
	$("#squirrels").show();
	$("#penguins").hide();
	$("#spiders").hide();
	$("#error").hide();
} else {
	$("#error").show();
	$("#squirrels").hide()		
	$("#penguins").hide()
	$("#spiders").hide()
}

$('.clickable-spider').click(function() {
	$('.hidden-spider').slideToggle();
});

$('.clickable-penguin').click(function() {
	$('.hidden-penguin').slideToggle();
});

$('.clickable-squirrel').click(function() {
	$('.hidden-squirrel').slideToggle();
});
