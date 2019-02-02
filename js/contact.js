
/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();



//building type slider
$(".row1,.row2,.row3").hide();

var buildingtype = function() {
	var building_type = document.getElementById("buildingtype").value;
	if (building_type === "commercial"){
		$(".row1").show();
		$(".row2,.row3").hide()
		}
	else if (building_type === "residential"){
		$(".row2").show();
		$(".row1,.row3").hide()
	}
	else if ((building_type === "corporative") || (building_type === "hybrid")){
		$(".row3").show();
		$(".row1,.row2").hide()
	}		
}

$("#buildingtype").change(function(){
	console.log("uuu")
	buildingtype();
});

$('input:radio').click(function() {
  compute();
  });


//commercial 
var final_nbr_cages = 0;
var total_cost = 0;

$("input").keyup(function(){
	compute();
});


var compute = function() {
		//var comercial
		var nbr_cagesC = parseInt(document.getElementById("row1a").value);
		console.log(nbr_cagesC)
		//var residential
		var rentalspaces = parseInt(document.getElementById("row2a").value);
		console.log(rentalspaces)
		var nbfloorR = parseInt(document.getElementById("row2b").value);
		console.log(nbfloorR)
		//var corpo hybrid
		var maxoccupants = parseInt(document.getElementById("row3a").value);
		console.log(maxoccupants)
		var nbr_floorCH = parseInt(document.getElementById("row3b").value);
		console.log(nbr_floorCH)
		//var total price serice selection
		var quality = $("input[name='servicequality']:checked").val();
		
		if (document.getElementById("buildingtype").value == "commercial"){
			//calcul commercial
			final_nbr_cages = nbr_cagesC;
			console.log(final_nbr_cages)
	
				//service selection
				if(quality == "Standard"){
					total_cost = final_nbr_cages * 7565 * 1.10
				}if(quality == "Premium"){
					total_cost = final_nbr_cages * 12345 * 1.13
				}if(quality == "Exilium"){
					total_cost = final_nbr_cages * 15400 * 1.16
				}
	
		} else if (document.getElementById("buildingtype").value == "residential"){
			//calcul residentiel
			var average = ((rentalspaces/nbfloorR)/6);
			final_nbr_cages = Math.ceil(average / 20);
					console.log("test123")
					
	
				//service selection
				if(quality == "Standard"){
					total_cost = final_nbr_cages * 7565 * 1.10
					console.log(total_cost)
				}else if(quality == "Premium"){
					total_cost = final_nbr_cages * 12345 * 1.13
				}else if(quality == "Exilium"){
					total_cost = final_nbr_cages * 15400 * 1.16
				}
	
		} else if ((document.getElementById("buildingtype").value == "corporative") || (document.getElementById("buildingtype").value === "hybrid")){
			//calcul corpo hybrid
			var averageCH = Math.ceil(maxoccupants*nbr_floorCH)/1000;
			averageCH = Math.ceil(averageCH);
			var column = Math.ceil(nbr_floorCH/20);
			final_nbr_cages = Math.ceil(averageCH/column);
			
				//service selection
				if(quality == "Standard"){
					total_cost = final_nbr_cages * 7565 * 1.10
				}else if(quality == "Premium"){
					total_cost = final_nbr_cages * 12345 * 1.13
				}else if(quality == "Exilium"){
					total_cost = final_nbr_cages * 15400 * 1.16
				}
		}
	
		//result
		$("#answer").val(final_nbr_cages);
		$("#cost").val(total_cost);	
	
}