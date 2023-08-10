// Author: neil robinson
// Function to calculate total price of artwork
// Date: 30th May 2021
// Revision: 10th August 2023

// Calculate button
	window.addEventListener("load", function() {
    var button = document.getElementById("totalPriceButton");
	button.addEventListener("click", function() {
		
		// Framing/Mounting & Production costs
		var prodCostsElem = document.getElementById("prodCosts");
		var hourlyRateElem = document.getElementById("hourlyRate");
		var numHoursElem = document.getElementById("numberHours");
		var totalHourlyRateElem = document.getElementById("totalHourlyRate");
		var transportCostsElem = document.getElementById("transportationCosts");
		var mountFrameCostsElem = document.getElementById("mountFrameCosts");
				
		// Gallery commission including VAT	
		var galleryCommElem = document.getElementById("galleryCommission");	
			
		// Method for working out commission, VAT and production costs
		var production = parseFloat(prodCostsElem.value);
		var framing = parseFloat(mountFrameCostsElem.value);
		var hourRate = parseFloat(hourlyRateElem.value);
		var numHours = parseFloat(numHoursElem.value);
		var transport = parseFloat(transportCostsElem.value);
		var commission = parseFloat(galleryCommElem.value);				
		
		// Hourly rate calculations
		var totalHourlyCosts = parseFloat(hourRate * numHours);
		
		// Calculations and roundings
		var totalProd = parseFloat(production) + parseFloat(totalHourlyCosts) + parseFloat(transport) + parseFloat(framing);
		var commissionTotal = parseFloat(totalProd * commission) / 100;
		var total = parseFloat(commissionTotal + totalProd);
		var rounded = Math.ceil(total/5)*5;
		
		
		// Output and error handling
		var totalHourlyPayElem = document.getElementById("totalHourlyRate");
		var totalOutputElem = document.getElementById("totalOutput");
		var roundedOutputElem = document.getElementById("roundedOutput");
		var errorElem = document.getElementById("error");
		var commissionErrorElem = document.getElementById("percentage");
		
		let = percentage;
		//error handling
		if (isNaN(commission) || (commission) < 1 ) {
			  commissionErrorElem.innerHTML = "Enter a minimum of 1% commission.";
		
		} else if (commission > 60 ) {
			  commissionErrorElem.innerHTML = "Enter a maximum of 60% commission.";
		
		} else {	
			   commissionErrorElem.innerHTML = "";
		}
		
		
		let = error;
		if (isNaN(total) || (total) < 1 ) {
			  errorElem.innerHTML = "Enter amounts above. Where no amount is required input zero. " + "<br>" + "Decimal points accepted, no commas allowed.";
		
		} else if (total > 10000 ) {
			  errorElem.innerHTML = "Warning: A total of &pound" + Math.round(total) + " will require extra insurance cover if over £10k.";
		
		} else {	
			   errorElem.innerHTML = "";
			   
		//totals
		totalOutputElem.innerHTML = 
		"Production costs = &pound" + totalProd.toFixed(2) + "<br>" + "<br>"  +
		"Total labour costs = &pound" + totalHourlyCosts.toFixed(2) + "<br>" + " at £" + hourRate + " per hour" + "<br>" + "<br>" +
		"Total costs plus gallery commission = &pound" + total.toFixed(2);
		//total cost multiplied by 2
		roundedOutputElem.innerHTML = "&pound" + rounded *2;
		}
}, false);
	}, false);

	
		
	