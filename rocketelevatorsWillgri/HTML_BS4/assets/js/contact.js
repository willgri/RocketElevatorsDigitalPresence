
/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;



//commercial

/* var commercial = function(collected_data) {
	var nbr_cagescommercial = parseInt(document.getElementById("row1a").value) / 20;
	nbr_cagescommercial = Math.ceil(nbr_cagescommercial);
	return nbr_cagescommercial;
}

$("input").keyup(function(){
	var collected_data = collect_data();
	var nbr_cagescommercial = compute_data(collected_data);
	show_results(nbr_cagescommercial);  
});
var compute_data = function(collected_data){
	nbr_cagescommercial = commercial(collected_data);
	return nbr_cagescommercial;
}
var show_results = function(nbr_cages){

	$('#nbr_cages').html(nbr_cages);
} */
 


//residential //chek
var number_of_cages = function(collected_data){

		
		var final_nbr_cagesC = nbr_cagesC*Math.ceil(nbrfloorC/20);
		

		var average = collected_data.nbfloorR/collected_data.rentalspaces;
		var go = average/6
		var nbr_cagesR = collected_data.nbfloorR / 20;
		nbr_cagesR = Math.ceil(nbr_cagesR);
    return {nbr_cagesR : nbr_cagesR,nbr_cagesC: nbr, Final_nbr_cagesC: final_nbr_cagesC, go: go};
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

	$('#nbr_cages').html(nbr_cagesR, nbr_cagesC);
}

// corporative+hybrid





// var corporativehybrid = fonction(){

// }


$( "inputinfo" ).keyup(function() {
	corporativehybrid();

   data = collect_data();
   
var resfunc = document.getElementById("residentialfunction").value;


var residentialfuction = function(){
	var resfunc = document.getElementById("residentialfunction").value;
	
}});


//    computed_data = compute(data)






//    show_commercial_residence_corporativehybrid(computed_data)
var collect_data = function(){
		var nbr_cageC = parseInt(document.getElementById("row1a").value);
		var nbrfloorC = parseInt(document.getElementById("row1b").value);

		var rentalspaces = parseInt(document.getElementById("row2a").value);
		var nbfloorR = parseInt(document.getElementById("row2b").value);
		var nbr_cagesR = parseInt(document.getElementById("row2c").value);
		
		var nbfloorCH = parseInt(document.getElementById("row3a").value);
		var nbr_cagesCH = parseInt(document.getElementById("row3b").value);
	
		return {rentalspaces: rentalspaces, nbfloorR: nbfloorR, nbr_cagesR: nbr_cagesR, nbfloorC: nbfloorC, nbfloorCH: nbfloorCH, nbr_cagesC: nbr_cagesC,
		nbr_cagesCH: nbr_cagesCH, nbr_cageC: nbr_cageC, nbrfloorC: nbrfloorC}
}






//department choice
$(".row1,.row2,.row3,.row4").hide();

var choice = document.getElementById("buildingtype");


var buildingtype = function(){
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
}



choice.addEventListener("change", buildingtype);



//service return (Standard, Premium, Exelium)

var service = document.getElementById("submit");






/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();
