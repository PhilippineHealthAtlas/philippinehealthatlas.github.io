var spreadsheets = [
{
		'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/od6',
		description : 'LGU Scorecard (2006)',
		'keyword' : '2006',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/od7',
		description : 'LGU Scorecard (2007)',
		'keyword' : '2007',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/od4',
		description : 'LGU Scorecard (2008)',
		'keyword' : '2008',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/od5',
		description : 'LGU Scorecard (2009)',
		'keyword' : '2009',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];


function commatize(num) {
  nStr = '' + num;
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
	x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

var settings = {
	'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/ock',
	'provname' : 'b'
};

function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}

function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:green;background-color:green">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.target_cutoff + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	} else {
	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.ave_cutoff + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}


var attributes = {

	'f' : {
	
		is_indicator : true,
		description : 'TB Detection Rate',
		target_cutoff: 70,
		ave_cutoff: 71.94,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'g' : {
	
		is_indicator : true,
		description : 'TB Cure Rate',
		target_cutoff: 85,
		ave_cutoff: 80.89,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'h' : {
	
		is_indicator : true,
		description : 'Immunized Child',
		target_cutoff: 95,
		ave_cutoff: 83.50,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'i' : {
	
		is_indicator : true,
		description : 'Newborn Breastfeeding',
		target_cutoff: 85,
		ave_cutoff: 68.14,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'j' : {
	
		is_indicator : true,
		description : 'Protein Energy Malnutrition',
		categ : getCategory,
		details_: getDetails,
		is_reverse: true,
		ave_cutoff: 24,
		target_cutoff: 11.5,
		formatter : twodecimals
	},
	'k' : {
	
		is_indicator : true,
		description : 'Facility-based Delivery',
		target_cutoff: 70,
		ave_cutoff: 32.65,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'l' : {
	
		is_indicator : true,
		description : 'Contraceptive Prevalence Rate',
		target_cutoff: 39.46,
		ave_cutoff: 85,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'm' : {
	
		is_indicator : true,
		description : 'Access to safe water',
		target_cutoff: 84.93,
		ave_cutoff: 94,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'n' : {
	
		is_indicator : true,
		description : 'Access to Sanitary Toilet',
		target_cutoff: 77.83,
		ave_cutoff: 91,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'o' : {
		is_indicator : true,
		description : 'Length of Stay in Hospital',
		target_cutoff: 3.33,
		ave_cutoff: 5,
		is_reverse: true,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'p' : {
	
		is_indicator : true,
		description : 'Hospital Occupancy Rate',
		target_cutoff: 71.33,
		ave_cutoff: 85,
		is_reverse: true,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'q' : {
	
		is_indicator : true,
		description : 'Gross Death Rate',
		target_cutoff: 0.68,
		ave_cutoff: 1,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'r' : {
	
		is_indicator : true,
		description : 'BEMOC to Population Ratio',
		is_reverse: true,
		target_cutoff: 511767,
		ave_cutoff: 125000,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
	's' : {
	   is_indicator : true,
		description : 'OPB',
		target_cutoff: 80,
		ave_cutoff: 48.89,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	't' : {
	
		is_indicator : true,
		description : 'MCP',
		target_cutoff: 90,
		ave_cutoff: 12.94,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	}
}
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});