
var spreadsheets = [
	/*
	{
		'key' : '0Ahdqio3d31tKdDh0VFkzUEk5YmF2emxPbEVxZVJlcVE/od6',
		'description' : 'Clinical Laboratories',
		'keyword' : 'Clinical Laboratories',
		'marker' : 'cLabs.png',
		size:12
	},*/
	{
		'key' : '0Aq7eQ20tUwmTdHJFUjh3X1ZmUHFZeHc0SExCMzlzWHc/od6',
		'description' : 'Government Hospital',
		'keyword' : 'Government_Hospital',
		'marker' : 'government.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdGdpNldUYmtfTUhoVU14bzByQWdxNEE/od6',
		'description' : 'Private Hospital',
		'keyword' : 'Private_Hospital',
		'marker' : 'private.png',
		'groupby' : {
			'field' : 'regionname',
			'values' : ['ARMM','CORDILLERA ADMINISTRATIVE REGION (CAR)','CARAGA']
		},
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdHdHMEtMOURzZFYtbF92WWhvZWxVcmc/od4',
		'description' : 'Rural Health Unit/Health Center',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdHdHMEtMOURzZFYtbF92WWhvZWxVcmc/od5',
		'description' : 'Barangay Health Station',
		'keyword' : 'Barangay_Health_Station',
		'marker' : 'bhs.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdHdHMEtMOURzZFYtbF92WWhvZWxVcmc/oda',
		'description' : 'Lying-In Clinic',
		'keyword' : 'Lying-In_Clinic',
		'marker' : 'L.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdHdHMEtMOURzZFYtbF92WWhvZWxVcmc/od9',
		'description' : 'Lying-In Clinic & Health Center',
		'keyword' : 'LIC_HC',
		'marker' : 'LH.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od9',
		'description' : 'Social Hygiene Clinic',
		'keyword' : 'Social_Hygiene_Clinic',
		'marker' : 'shc.png',
		'hideLayer' : true,
		size:12,
	}
];

var polygon_spreadsheets = [
{
'key' : '0Aq7eQ20tUwmTdHRNQTNrRWR5RFB1X0VFN1pPX0hFdUE/od6',
		description : 'Municipalities',
		'keyword' : 'municipality',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_municipalities'
		}
];
var provsheets = polygon_spreadsheets;

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
	'provname' : 'name',
	noInfoWindow: true,
	showList : true
};
function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}

function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}
function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:blue;background-color:blue">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.target_cutoff + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> None';
	} else {
	return '</br><span style="color:blue;background-color:blue">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.ave_cutoff + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> None';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'blue') )); 
	} else {
		return ( val > this.target_cutoff ? 'blue' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}

function getOne(val) {
	return (parseInt(val) > 0 ? this.myColor : 'grey');
}

function getOneDetails() {
	return '</br><span style="color:'+this.myColor+';background-color:'+this.myColor+'">__</span> Covered ' 
		   +'</br><span style="color:grey;background-color:grey">__</span> None ';
}
function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:green;background-color:green">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1)  + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	} else {
	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1)  + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 || val == '' ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 || val == ''? 'gray' : 'red') )); 
	}
}
function nonee(val) {
return val;
}
function lister(text) {
    return '</td></tr><tr><td colspan="3"><div style="max-height:500px; overflow:auto">'+text+'</div>';
}
var attributes = {


	'munclass' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Municipality Classification',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	
	},
	'bubdohbudget2014' : {
	
		is_indicator : true,
		myColor: '#610B5E',
		description : 'BUB DOH Budget 2014',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'listed' : {
            is_indicator : false,
            description : 'BUB Description',
            formatter:lister	
	},

	'priority' : {
	
		is_indicator : true,
		myColor: '#1BDDE0',
		description : 'Priority Municipality 2011',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'fourpsarea' : {
	
		is_indicator : true,
		myColor: '#ff0000',
		description : '4Ps Area',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'cct' : {
	
		is_indicator : true,
		myColor: '#ffff00',
		description : 'Conditional Cash Transfer',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'sealofgoodhousekeeping' : {
	
		is_indicator : true,
		myColor: '#E01B6A',
		description : 'Seal of Good Housekeeping',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'kalahicidds' : {
	
		is_indicator : true,
		myColor: '#1B77E0',
		description : 'KALAHI-CIDDS',
		categ : getOne, formatter : nonee, details_: getOneDetails	
	},
	'mt2012' : {
	
		is_indicator : true,
		myColor: '#1B77E0',
		description : 'Makamasang Tugon 2012',
		categ : getOne, formatter : nonee, details_: getOneDetails	
	},
	'injurycases' : {
	
		is_indicator : true,
		myColor: '#08088A',
		description : 'No. of Injury Cases 2012',
		categ : getOne, formatter : nonee, details_: getOneDetails	
	},
	
	'population' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Population',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'magpoor' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Magnitude of Poor Population',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'watless' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Waterless Households',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'cbmsbrgy' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Comm.-Based Monitoring System',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'clinicallaboratory' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 151 ? 'red' : val > 101 ? 'orange' : val > 51 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Clinical Laboratory',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 2 - 20'
			+'</br><span style="color:green;background-color:green">__</span> 21 - 50'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 51 - 100'
			+'</br><span style="color:orange;background-color:orange">__</span> 101 - 150'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},*/
	'privatehospital' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 15 ? 'orange' : val > 10? 'blue' : val > 6 ? 'green' : (val < 6 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Private Hospital',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 5'
			+'</br><span style="color:green;background-color:green">__</span> 6 - 10'
			+'</br><span style="color:blue;background-color:blue">__</span> 11 - 15'
			+'</br><span style="color:orange;background-color:orange">__</span> >15'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'governmenthospital' : {
	
	'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 15 ? 'orange' : val > 10? 'blue' : val > 6 ? 'green' : (val < 6 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Government Hospital',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 5'
			+'</br><span style="color:green;background-color:green">__</span> 6 - 10'
			+'</br><span style="color:blue;background-color:blue">__</span> 11 - 15'
			+'</br><span style="color:orange;background-color:orange">__</span> >15'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'rhu' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 35 ? 'orange' : val > 21 ? 'blue' : val > 11 ? 'green' : (val < 11 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Rural Health Unit',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 20'
			+'</br><span style="color:blue;background-color:blue">__</span> 21 - 35'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'bhs' : {
	
		
		'is_indicator' :false,
		'categ' : function(val) { 
			return ( val > 90 ? 'orange' : val > 61 ? 'blue' : val > 31 ? 'green' : (val < 31 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Barangay Health Station',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 30'
			+'</br><span style="color:green;background-color:green">__</span> 31 - 60'
			+'</br><span style="color:blue;background-color:blue">__</span> 61 - 90'
			+'</br><span style="color:orange;background-color:orange">__</span> >90'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'licandhc' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 35 ? 'orange' : val > 21 ? 'blue' : val > 11 ? 'green' : (val < 11 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Health Center and Lyin-In Clinic',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 20'
			+'</br><span style="color:blue;background-color:blue">__</span> 21 - 35'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'lic' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 35 ? 'orange' : val > 21 ? 'blue' : val > 11 ? 'green' : (val < 11 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Lyin-In Clinic',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 20'
			+'</br><span style="color:blue;background-color:blue">__</span> 21 - 35'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'rnheals3' : {
	
		is_indicator : true,
		myColor: '#FFA500',
		description : 'RNheals Batch III',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'rnheals4' : {
	
		is_indicator : true,
		myColor: '#00FF00',
		description : 'RNheals Batch IV',
		categ : getOne, formatter : nonee, details_: getOneDetails	
	},
	/*'shc' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 35 ? 'orange' : val > 21 ? 'blue' : val > 11 ? 'green' : (val < 11 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Social Hygine Cilinic',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 20'
			+'</br><span style="color:blue;background-color:blue">__</span> 21 - 35'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	}*/
	
}


var settings = {
	//'key' : '0Aq7eQ20tUwmTdHRNQTNrRWR5RFB1X0VFN1pPX0hFdUE/od6',
	'provname' : 'name',
	'geojson_name' : 'NAME_2',
	center: [12.833226,121.725082],
	zoom: 6
};
function showImages(image) {
	image = image.split(',');
	var newtext = '';
	for (var i in image) {
		newtext += '<img src="http://i1292.photobucket.com/albums/b564/dogmapsi/' + image[i] + '" width="330"/>';
		
	}
	return newtext;
}
function getInfoText(datum) {
	return ''
		+ (datum.dohfacilitycode && datum.dohfacilitycode.length > 0? '<br/><b>NHFR Code</b>: ' + datum.dohfacilitycode : '')
		+ (datum.facilitytype && datum.facilitytype.length > 0? '<br/><b>Type of Facility</b>: ' + datum.facilitytype : '')
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/><b>Complete Address</b>: ' + datum.completeaddress : '')
		+ (datum.medicaldirector && datum.medicaldirector.length > 0? '<br/><b>Medical Director</b>: ' + datum.medicaldirector : '')
		+ (datum.headofthefacility && datum.headofthefacility.length > 0? '<br/><b>Head of the Facility</b>: ' + datum.headofthefacility : '')
		+ (datum.telephonenumber && datum.telephonenumber.length > 0? '<br/><b>Telephone Number</b>: ' + datum.telephonenumber : '')
		+ (datum.cellphonenumber && datum.cellphonenumber.length > 0? '<br/><b>Cellphone Number</b>: ' + datum.cellphonenumber : '')
		+ (datum.emailadd && datum.emailadd.length > 0? '<br/><b>Email Address</b>: ' + datum.emailadd : '')
		+ (datum.ophours && datum.ophours.length > 0? '<br/><b>Operational Hours</b>: ' + datum.ophours : '')
		+ (datum.catchmentpopulation && datum.catchmentpopulation.length > 0? '<br/><b>Catchment Population</b>: ' + datum.catchmentpopulation : '')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.bnb && datum.bnb.length > 0? '<br/><b>Botika ng Barangay nearby</b>: ' + datum.bnb :'')
		
		// Referral Hospital
		+ (datum.referralgovthosp || datum.referralprihosp? '<br/><br/><h2>Referral Hospital</h2>':'')
		+ (datum.referralgovthosp && datum.referralgovthosp.length > 0? '<br/><b>Government Hospital</b>: ' + datum.referralgovthosp : '')
		+ (datum.referralprihosp && datum.referralprihosp.length > 0? '<br/><b>Private Hospital</b>: ' + datum.referralprihosp : '')
		
		
		
		// HFEP Allocation
		+ (datum.pcofequip2013 || datum.pcofinfra2013 || datum.pcofequip2011 || datum.pcofequip2012 || datum.pcofinfra2011 || datum.pcofinfra2011? '<br/><br/><h2>HFEP Allocation</h2>':'')
		+ (datum.pcofinfra2013 && datum.pcofinfra2013.length > 0? '<br/><b>PCOF Infrastracture 2013</b>: ' + datum.pcofinfra2013 : '')
		+ (datum.pcofequip2013&& datum.pcofequip2013.length > 0? '<br/><b>PCOF Equipment 2013</b>: ' + datum.pcofequip2013 : '')
		+ (datum.pcoftotal2013 && datum.pcoftotal2013.length > 0? '<br/><b>PCOF Total 2013</b>: ' + datum.pcoftotal2013 : '')
		+ (datum.description2013 && datum.description2013.length > 0? '<br/><b>Description 2013</b>: ' + datum.description2013 : '')
		+ (datum.pcofinfra2012 && datum.pcofinfra2012.length > 0? '<br/><b>PCOF Infrastracture 2012</b>: ' + datum.pcofinfra2012 : '')
		+ (datum.pcofequip2012 && datum.pcofequip2012.length > 0? '<br/><b>PCOF Equipment 2012</b>: ' + datum.pcofequip2012 : '')
		+ (datum.pcoftotal2012 && datum.pcoftotal2012.length > 0? '<br/><b>PCOF Total 2012</b>: ' + datum.pcoftotal2012 : '')
		+ (datum.description2012 && datum.description2012.length > 0? '<br/><b>Description 2012</b>: ' + datum.description2012 : '')
		+ (datum.pcofinfra2011 && datum.pcofinfra2011.length > 0? '<br/><b>PCOF Infrastracture 2011</b>: ' + datum.pcofinfra2011 : '')
		+ (datum.pcofequip2011 && datum.pcofequip2011.length > 0? '<br/><b>PCOF Equipment 2011</b>: ' + datum.pcofequip2011 : '')
		+ (datum.pcoftotal2011 && datum.pcoftotal2011.length > 0? '<br/><b>PCOF Total 2011</b>: ' + datum.pcoftotal2011 : '')
		+ (datum.description2011 && datum.description2011.length > 0? '<br/><b>Description 2011</b>: ' + datum.description2011 : '')
		
		
		// DOH Hospital Budget 
		+ (datum.totalbudget2013 ? '<br/><br/><h2>DOH Hospital Budget</h2>':'')
		+ (datum.totalbudget2013 && datum.totalbudget2013.length > 0? '<br/><b>Total Budget 2013</b>: ' + datum.totalbudget2013 : '')
		+ (datum.totalbudget2012 && datum.totalbudget2012.length > 0? '<br/><b>Total Budget 2012</b>: ' + datum.totalbudget2012 : '')
		+ (datum.totalbudget2011 && datum.totalbudget2011.length > 0? '<br/><b>Total Budget 2011</b>: ' + datum.totalbudget2011 : '')
		+ (datum.totalbudget2010 && datum.totalbudget2010.length > 0? '<br/><b>Total Budget 2010</b>: ' + datum.totalbudget2010 : '')
		
		// Medical Services Offered
		+ (datum.generalpediatrics || datum.obgynebreastfeeding || datum.obgynecesareansection || datum.obgynenormaldelivery || datum.generalmedicine ? '<br/><br/><h2>Medical Services Offered</h2>':'')
		+ (datum.generalmedicine && datum.generalmedicine.length > 0? '<br/><b>General Medicine</b>: ' + datum.generalmedicine : '')
		+ (datum.generalpediatrics && datum.generalpediatrics.length > 0? '<br/><b>General Pediatrics</b>: ' + datum.generalpediatrics : '')
		+ (datum.obgynenormaldelivery && datum.obgynenormaldelivery.length > 0? '<br/><b>OB-Gyne Normal Delivery</b>: ' + datum.obgynenormaldelivery : '')
		+ (datum.obgynecesareansection && datum.obgynecesareansection.length > 0? '<br/><b>OB-Gyne Cesarean Section</b>: ' + datum.obgynecesareansection : '')
		+ (datum.obgynebreastfeeding && datum.obgynebreastfeeding.length > 0? '<br/><b>OB-Gyne Breastfeeding</b>: ' + datum.obgynebreastfeeding : '')
		
		
		// Services Offered
		+ (datum.facilitytype || datum.servicecapability? '<br/><br/><h2>Services Offered</h2>':'')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')	
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<br/><b>X-ray Capability</b>: ' + datum.xraycapability : '')
		+ (datum.ctscanservices && datum.ctscanservices.length > 0? '<br/><b>CT Scan Services</b>: ' + datum.ctscanservices : '')
		+ (datum.mriservices && datum.mriservices.length > 0? '<br/><b>MRI Services</b>: ' + datum.mriservices : '')
		+ (datum.ultrasoundservices && datum.ultrasoundservices.length > 0? '<br/><b>Ultrasound Services</b>: ' + datum.ultrasoundservices : '')
		+ (datum.bemonc && datum.bemonc.length > 0? '<br/><b>BEmONC Facility</b>: ' + datum.bemonc : '')
		+ (datum.birthingfattached && datum.birthingfattached.length > 0? '<br/><b>Attached Birthing Facility</b>: ' + datum.birthingfattached : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<br/><b>Laboratory Services</b>: ' + datum.laboratory : '')
		
		
		// PhilHealth Out-Patient Packages
		+ (datum.phictbdots ? '<br/><br/><h2>PhilHealth Out-Patient Packages</h2>':'')
		+ (datum.phictbdots && datum.phictbdots.length > 0? '<br/><b>TB DOTS</b>: ' + datum.phictbdots : '')
		+ (datum.phicmcp && datum.phicmcp.length > 0? '<br/><b>Maternal & Child Package</b>: ' + datum.phicmcp : '')	
		+ (datum.phicmalaria && datum.phicmalaria.length > 0? '<br/><b>Malaria</b>: ' + datum.phicmalaria : '')
		+ (datum.phicothers && datum.phicothers.length > 0? '<br/><b>Other Services</b>: ' + datum.phicothers : '')
		
		// Surgical Services Offered
		+ (datum.surgicalservices ? '<br/><br/><h2> Surgical Services Offered</h2>':'')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<br/><b>Surgical Services</b>: ' + datum.surgicalservices : '')
		+ (datum.generalsurgery && datum.generalsurgery.length > 0? '<br/><b>General Surgery</b>: ' + datum.generalsurgery : '')
		+ (datum.plastic && datum.plastic.length > 0? '<br/><b>Plastic Surgery</b>: ' + datum.plastic : '')
		+ (datum.microsurgery && datum.microsurgery.length > 0? '<br/><b>Micro-Surgery</b>: ' + datum.microsurgery : '')
		+ (datum.neuro && datum.neuro.length > 0? '<br/><b>Neuro-Surgery</b>: ' + datum.neuro : '')
		+ (datum.thoracardio && datum.thoracardio.length > 0? '<br/><b>Thoracic & Cardio Surgery</b>: ' + datum.thoracardio : '')
		+ (datum.laparoscopy && datum.laparoscopy.length > 0? '<br/><b>Laparoscopy Surgery</b>: ' + datum.laparoscopy : '')
		+ (datum.urologic && datum.urologic.length > 0? '<br/><b>Urologic Surgery</b>: ' + datum.urologic : '')
		+ (datum.colorectal && datum.colorectal.length > 0? '<br/><b>Colorectal Surgery</b>: ' + datum.colorectal : '')
		+ (datum.other && datum.other.length > 0? '<br/><b>Other Surgery</b>: ' + datum.other : '')
		
		// Equipment Available
		+ (datum.ambulance ? '<br/><br/><h2>Equipment Available</h2>':'')
		+ (datum.ambulance && datum.ambulance.length > 0? '<br/><b>Ambulance Availability</b>:' + datum.ambulance : '')
		+ (datum.autoclave && datum.autoclave.length > 0? '<br/><b>Autoclave</b>:' + datum.autoclave : '')
		+ (datum.hemocytometercbc && datum.hemocytometercbc.length > 0? '<br/><b>Hemocytometer (CBC)</b>:' + datum.hemocytometercbc : '')
		+ (datum.refrigeratorforvaccines && datum.refrigeratorforvaccines.length > 0? '<br/><b>Refrigerator for Vaccines</b>:' + datum.refrigeratorforvaccines : '')
		+ (datum.ms && datum.ms.length > 0? '<br/><b>Microscope</b>:' + datum.ms : '')
		+ (datum.bpmadult && datum.bpmadult.length > 0? '<br/><b>BP Machine (Adult)</b>:' + datum.bpmadult : '')
		+ (datum.bpmpedia && datum.bpmpedia.length > 0? '<br/><b>BP Machine (Pedia)</b>:' + datum.bpmpedia : '')
		+ (datum.stethoscope && datum.stethoscope.length > 0? '<br/><b>Stethoscope</b>:' + datum.stethoscope : '')
		+ (datum.aweighingscale && datum.aweighingscale.length > 0? '<br/><b>Adult Weighing Scale</b>:' + datum.aweighingscale : '')
		+ (datum.icweighingscale && datum.icweighingscale.length > 0? '<br/><b>Infant/Child Weighing Scale</b>:' + datum.icweighingscale : '')
		+ (datum.nebulizer && datum.nebulizer.length > 0? '<br/><b>Nebulizer</b>:' + datum.nebulizer : '')
		+ (datum.pus && datum.pus.length > 0? '<br/><b>Portable Ultrasound</b>:' + datum.pus : '')
		+ (datum.ot && datum.ot.length > 0? '<br/><b>Oxygen Tank</b>:' + datum.ot : '')
		+ (datum.de && datum.de.length > 0? '<br/><b>Dental Equipment</b>:' + datum.de : '')
		+ (datum.oe && datum.oe.length > 0? '<br/><b>Otoscope & Other EENT Equipment</b>:' + datum.oe : '')
		+ (datum.da && datum.da.length > 0? '<br/><b>Doppler Apparatus</b>:' + datum.da : '')
		+ (datum.ecg && datum.ecg.length > 0? '<br/><b>ECG</b>:' + datum.ecg : '')
		//+ (datum.diagnosticlabservices && datum.diagnosticlabservices.length > 0? '<br/><b>Diagnostic Laboratory Services</b>: ' + datum.diagnosticlabservices : '')
		
		// Human Resources
		+ (datum.facilitytype || datum.servicecapability? '<br/><br/><h2>Human Resource Complement</h2>':'')
		+ '<table>'
		+ (datum.md2013 && datum.md2013.length > 0? '<tr><th>No. of Medical Doctor</th><td>' + datum.md2013 + '</th></tr>' : '')
		+ (datum.dmd2013 && datum.dmd2013.length > 0? '<tr><th>No. of Medical Dentist</th><td>' + datum.dmd2013 + '</th></tr>' : '')
		+ (datum.rmw2013 && datum.rmw2013.length > 0? '<tr><th>No. of Registered Midwives</th><td>' + datum.rmw2013 + '</th></tr>' : '')
		+ (datum.rn2013 && datum.rn2013.length > 0? '<tr><th>No. of Registered Nurses</th><td>' + datum.rn2013	: '')
		+ (datum.medtech2013 && datum.medtech2013.length > 0? '<tr><th>No. of Medical Technologist</th><td>' + datum.medtech2013 + '</th></tr>' : '')
		+ (datum.nut2013 && datum.nut2013.length > 0? '<tr><th>No. of Nutritionist</th><td>' + datum.nut2013 + '</th></tr>' : '')
		+ (datum.phar2013 && datum.phar2013.length > 0? '<tr><th>No. of Pharmacist</th><td>' + datum.phar2013 + '</th></tr>' : '')
		+ (datum.ot2013 && datum.ot2013.length > 0? '<tr><th>No. of Occupational Therapist</th><td>' + datum.ot2013 + '</th></tr>' : '')
		+ (datum.pt2013 && datum.pt2013.length > 0? '<tr><th>No. of Physical Therapist</th><td>' + datum.pt2013 + '</th></tr>' : '')
		/*+ (datum.rt2013 && datum.rt2013.length > 0? '<tr><th>No. of Radio Technician</th><td>' + datum.rt2013 + '</th></tr>' : '')
		+ (datum.xt2013 && datum.xt2013.length > 0? '<tr><th>No. of X-ray Technician</th><td>' + datum.xt2013 + '</th></tr>' : '')*/
	    + (datum.rnheals && datum.rnheals.length > 0? '<tr><th>No. of RNHeals</th><td>' + datum.rnheals + '</th></tr>' : '')
		+ (datum.si && datum.si.length > 0? '<tr><th>No. of Sanitary Inspector</th><td>' + datum.si + '</th></tr>' : '')
		+ (datum.bhws && datum.bhws.length > 0? '<tr><th>No. of Barangay Health Workers</th><td>' + datum.bhws + '</th></tr>' : '')
		+ (datum.bns && datum.bns.length > 0? '<tr><th>No. of Barangay Nutrition Scholar</th><td>' + datum.bns + '</th></tr>' : '')
		+ '</table>'
		
			// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
		
		
} 	

var facility_attributes = {
	'servicecapability' : {
		
		'is_indicator' : true,
		'description' : 'Service Capability',
		'categ' : function(val) { 
			var vals = {
				'Level 1' : '1point.png',
				'Level 2' : '2point.png',
				'Level 3' : '3point.png',
				'Level 4' : 'p4.png',
				'No data' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="1point.png"> Level 1'
			+'</br><img src="2point.png"> Level 2'
			+'</br><img src="3point.png"> Level 3'
			+'</br><img src="p4.png"> Level 4'
			+'</br><img src="5p.png"> No Data'

	},
	'xraycapability' : {
		
		'is_indicator' : true,
		'description' : 'Xray Capability',
		'categ' : function(val) { 
			var vals = {
				'Level 1' : '1point.png',
				'Level 2' : '2point.png',
				'Level 3' : '3point.png',
				'None' : 'dot2.png',
				'No data' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="1point.png"> Level 1'
			+'</br><img src="2point.png"> Level 2'
			+'</br><img src="3point.png"> Level 3'
			+'</br><img src="dot2.png"> None'
			+'</br><img src="5p.png"> No Data'

	},
	'laboratory' : {
		
		'is_indicator' : true,
		'description' : 'Laboratory',
		'categ' : function(val) { 
			var vals = {
				'Primary' : '1point.png',
				'Secondary' : '2point.png',
				'Tertiary' : '3point.png',
				'No data' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="1point.png"> Primary'
			+'</br><img src="2point.png"> Secondary'
			+'</br><img src="3point.png"> Tertiary'
			+'</br><img src="5p.png"> No Data'

	},
	'surgicalservices' : {
		
		'is_indicator' : true,
		'description' : 'Surgical Services',
		'categ' : function(val) { 
			var vals = {
				'Provides surgery services' : 'green.png',
				'No surgery services' : 'red.png',
				'No data' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Provides surgery services'
			+'</br><img src="red.png"> No surgery services'
			+'</br><img src="5p.png"> No Data'

	},
	'authorizedbedcapacity' : {
		
		'is_indicator' : true,
		'description' : 'Authorized Bed Capacity', 
		'categ' : function(val) { 
			return val > 200 ? 'p4.png' : val > 80 ? '3point.png' : val > 30 ? '2point.png' : val < 31 ? '1point.png' : '5p.png';
			},
		'details': 
			'</br><img src="1point.png"> 1-30'
			+'</br><img src="2point.png"> 31-80'
			+'</br><img src="3point.png"> 81-200'
			+'</br><img src="p4.png"> more than 200'
			+'</br><img src="5p.png"> No Data'

	},
	'ownership' : {
		
		'is_indicator' : true,
		'description' : 'Ownership',
		'categ' : function(val) { 
			var vals = {
				'LGU' : 'LGU.png',
				'DOH' : 'doh.png',
				'Private' : 'private.jpg',
				'Military' : 'mil.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "oth.png";
			},
		'details': 
			'</br><img src="mil.png"> Military Hospitals'
			+'</br><img src="LGU.png"> LGU Facilities'
			+'</br><img src="doh.png"> DOH Hopsitals'
			+'</br><img src="private.jpg"> Private Hopsitals'
			+'</br><img src="oth.png"> Other Ownership'
			

	}
};

var services = {};