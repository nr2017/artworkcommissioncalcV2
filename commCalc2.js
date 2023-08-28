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
		
		//Error message variables
		var prodCostsElem = document.getElementById("productionCosts");
		var hoursRateElem = document.getElementById("rateHours");
		var hoursElem = document.getElementById("hours");
		var commissionErrorElem = document.getElementById("percentage");
		var errorTotalElem = document.getElementById("errorTotal");
		
		
		let = productionCosts
		//error handling (Production costs)
		if (isNaN(production) || (production) < 1 ) {
			  prodCostsElem.innerHTML = "Enter the total production costs. ";
		
		} else if (production > 999 ) {
			  prodCostsElem.innerHTML = "Amount entered cannot be more than £999.";
		
		} else {	
			  prodCostsElem.innerHTML = "";
		}
		
		
		let = rateHours
		//error handling (Hourly rate)
		if (isNaN(hourRate) || (hourRate) < 1 ) {
			  hoursRateElem.innerHTML = "Enter the hourly rate above. ";
		
		} else if (hourRate > 999 ) {
			  hoursRateElem.innerHTML = "Hours entered cannot be more than £999.";
		
		} else {	
			  hoursRateElem.innerHTML = "";
		}
		
		let = hours;
		//error handling (Hours worked)
		if (isNaN(numHours) || (numHours) < 1 ) {
			  hoursElem.innerHTML = "Enter number of hours worked. ";
		
		} else if (numHours > 72 ) {
			  hoursElem.innerHTML = "Hours entered cannot be more than 72.";
		
		} else {	
			  hoursElem.innerHTML = "";
		}
	
		let = percentage;
		//error handling (Commission rate)
		if (isNaN(commission) || (commission) < 1 ) {
			  commissionErrorElem.innerHTML = "Enter a minimum of 1% commission.";
		
		} else if (commission > 100 ) {
			  commissionErrorElem.innerHTML = "Enter a maximum of 100% commission.";
		
		} else {	
			  commissionErrorElem.innerHTML = "";
		}
		
		let = errorTotal;
		//error handling (Total)
		if (isNaN(total) || (total) < 1 ) {
			  errorTotalElem.innerHTML = "Enter amounts more than £1. Where no amount or time is required, input zero. " + "<br>" + "Decimal points accepted, no commas allowed.";
		
		} else if (total > 10000 ) {
			  errorTotalElem.innerHTML = "Warning: A total of &pound" + Math.round(total) + " will require extra insurance cover if over £10k.";
		
		} else {	
			  errorTotalElem.innerHTML = "";
			
			   
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

	
		
	