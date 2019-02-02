
/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;


//    show_commercial_residence_corporativehybrid(computed_data)
function collect_data(){
	var nbr_cagesC = parseInt(document.getElementById("row1a").value);
	var nbrfloorC = parseInt(document.getElementById("row1b").value);

	var rentalspaces = parseInt(document.getElementById("row2a").value);
	var nbfloorR = parseInt(document.getElementById("row2b").value);
	var nbr_cagesR = parseInt(document.getElementById("row2c").value);
	
	var nbfloorCH = parseInt(document.getElementById("row3a").value);
	var nbr_cagesCH = parseInt(document.getElementById("row3b").value);

	return {rentalspaces: rentalspaces, nbfloorR: nbfloorR, nbr_cagesR: nbr_cagesR, nbrfloorC: nbrfloorC, nbfloorCH: nbfloorCH, nbr_cagesC: nbr_cagesC,
	nbr_cagesCH: nbr_cagesCH}
}
//commercial y o t i sdonne a s

$("input").keyup(function(){
	console.log("yyy")
	var collected_data = collect_data();
	console.log("ooo")
	var final_nbr_cagesC = compute_data(collected_data);
	console.log("aaa")
	show_results(final_nbr_cagesC);  
});

function compute_data(collected_data){
	console.log("ttt")
   final_nbr_cagesC = CalcCommercial(collected_data);
   return final_nbr_cagesC;
}


function CalcCommercial(collected_data) {
	console.log("iii")

	var final_nbr_cagesC = Math.ceil(collected_data.nbr_cagesC * (collected_data.nbrfloorC / 20));
	console.log("sdonne")

	return {final_nbr_cagesC: final_nbr_cagesC, collected_data: collected_data};
}

function show_results(final_nbr_cagesC){
	console.log("sss")
	document.getElementById("answer").value = final_nbr_cagesC.collected_data.nbr_cagesC;
}



//residetial

/* var number_of_cages = function(collected_data){

		
		

		var average = (collected_data.nbfloorR/collected_data.rentalspaces)/6;
		var nbr_cagesR = collected_data.nbfloorR / 20;
		nbr_cagesR = Math.ceil(nbr_cagesR);
    return {nbr_cagesR : nbr_cagesR,nbr_cagesC: nbr, average: average};
}
		
$("input").keyup(function(){
	var collected_data = collect_data();
	var nbr_cagesR = compute_data(collected_data);
	show_results(nbr_cagesR);  
});


var compute_data = function(collected_data){
  nbr_cagesR = residentialavegrage(collected_data);
  return nbr_cagesR;
}

var show_results = function(nbr_cagesR){

	$('#nbr_cagesR').html(nbr_cagesR);
} */
 

// corporative+hybrid





// var corporativehybrid = fonction(){

// }

/* 
$( "inputinfo" ).keyup(function() {
	corporativehybrid();

   data = collect_data();
   
var resfunc = document.getElementById("residentialfunction").value;


var residentialfuction = function(){
	var resfunc = document.getElementById("residentialfunction").value;
	
}}); */


//    computed_data = compute(data)




//department choice



//building type slider
$(".row1,.row2,.row3,.row4").hide();

//building type slider
function buildingtype() {
	var building_type = document.getElementById("buildingtype").value;
	if (building_type === "commercial"){
		$(".row1").show();
		$(".row2,.row3,.row4").hide()
		}
	else if (building_type === "residential"){
		$(".row2").show();
		$(".row1,.row3,.row4").hide()
		}
	else if (building_type === "corporative"){
		$(".row3").show();
		$(".row1,.row2,.row4").hide()
		}
	else if (building_type === "hybrid"){
		$(".row4").show();
		$(".row1,.row2,.row3").hide()
		}
};

$("#buildingtype").change(function(){
	console.log("uuu")
	buildingtype();
});





//service return (Standard, Premium, Exelium)

var service = document.getElementById("submit");






/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();
