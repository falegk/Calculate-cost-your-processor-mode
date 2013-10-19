$(document).ready(function(){
	
	/*
	 * AJAX Section
	 * This function will handle the contact process through AJAX
	 */
	 $('#slickform').submit(
		function slickcontactparse() {			

			// Values
			var failedmessage = "There was a problem, please try again!";
			var tdp = $('#tdp');
			var hoursCpu = $('#hoursCpu');
			var costKilovat = $('#costKilovat');
			var url = "";
			
			//Checking information is correct before sending data

			if (hoursCpu.val() == "" || isNaN(hoursCpu.val()) ) {
				$(".slickbutton").animate({marginTop:'50px'},1000).delay(6000).animate({marginTop:'0px'},1000);
				$(".errorcontainer").html('Please fill in the field "hours of operation CPU" only numbers. ');
				$(".errorcontainer").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			
			if (costKilovat.val() == "" || isNaN(hoursCpu.val()) ) {
				$(".slickbutton").animate({marginTop:'50px'},1000).delay(6000).animate({marginTop:'0px'},1000);
				$(".errorcontainer").html('Please fill in the field "Cost per kWh" only numbers. ');
				$(".errorcontainer").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}

			if (tdp.val() == "" || isNaN(tdp.val()) ) {
				$(".slickbutton").animate({marginTop:'50px'},1000).delay(6000).animate({marginTop:'0px'},1000);
				$(".errorcontainer").html('Please fill in the field "TDP" only numbers.');
				$(".errorcontainer").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			//CHECKING SUBJECT WAS SELECTED
			
			
			$.post(url,{ tdp: tdp.val(), hoursCpu: hoursCpu.val(), costKilovat: costKilovat.val() } , function(data) {
				data = 'success';
				if(data == 'success'){
					
					var sumCost = ((tdp.val()*hoursCpu.val()) / 1000)*costKilovat.val();

					$(".slickbutton").animate({marginTop:'50px'},1000).delay(6000).animate({marginTop:'0px'},1000);
					$(".successcontainer").html("The total cost in euros is "+sumCost);
					$(".successcontainer").delay(1200).fadeIn(1000).delay(10000).fadeOut(15000);
					//$("#tdp").val('');
					//$("#hoursCpu").val('');
					//$("#costKilovat").val('');
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				
				} else {
					
					$(".slickbutton").animate({marginTop:'50px'},1000).delay(6000).animate({marginTop:'0px'},1000);
					$(".errorcontainer").html(failedmessage);
					$(".errorcontainer").delay(1200).fadeIn(1000).delay(4000).fadeOut(1000);
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
					return false;
					
				}
				
			});
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
		}
		
	);
	
});