var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdHJFUjh3X1ZmUHFZeHc0SExCMzlzWHc/od6',
		'description' : 'Government Hospitals',
		'keyword' : 'Government_Hospitals',
		'marker' : 'government.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdGdpNldUYmtfTUhoVU14bzByQWdxNEE/od6',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : 'private.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdGR2bGtJTFc4YVptZExGbEJLRnlZRXc/od6',
		'description' : 'HFEP 2011 (Hospital)',
		'keyword' : 'HFEP_2011',
		'marker' : 'HFEP2011.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdGR2bGtJTFc4YVptZExGbEJLRnlZRXc/od7',
		'description' : 'HFEP 2012 (Hospital)',
		'keyword' : 'HFEP_2012',
		'marker' : 'HFEP2012.png',
		size:12,
		zIndex: 1
	}
];

var settings = {
	'provname' : 'name',
	noInfoWindow: true,
	showList : false,
    minZoom: 8
};

var polygon_spreadsheets = [
	{
		'key' : '0Aq7eQ20tUwmTdG5xOF9oRVU4SmpNMXk5NFhfbDgwM3c/od6',
		'description' : 'Districts',
		'keyword' : 'District',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'	
	}
];
var settings = {
	'geojson_name' : 'ISO'
}
var attributes = {

	'population2010' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 800001 ? '#ff0000' : val > 600001 ? 'orange' : val > 400001 ? 'yellow' : (val < 200000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Population 2010',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 30,000 - 200,000'
			+'</br><span style="color:green;background-color:green">__</span> 200,001 - 400,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 400,001 - 600,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 600,001 - 800,000'
			+'</br><span style="color:red;background-color:red">__</span> 800,001 - 2,000,000'      
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'nhts2011' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 80001 ? '#ff0000' : val > 60001 ? 'orange' : val > 40001 ? 'yellow' : (val < 20000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : '<acronym title="National Household Targeting System">NHTS</acronym> Households (2011)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 100 - 20,000'
			+'</br><span style="color:green;background-color:green">__</span> 20,001 - 40,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 40,001 - 60,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 60,001 - 80,000'
			+'</br><span style="color:red;background-color:red">__</span> 80,001 - 150,000'      
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'cctben2012' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 40001 ? 'blue' : val > 30001 ? 'orange' : val > 20001 ? 'yellow' : (val < 10000 ? (val == 0 ? 'gray' : '#ff0000') : 'green')); 
			},
		'description' : '<acronym title="Conditional Cash Transfer">CCT</acronym> Beneficiaries (2011)',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 100 - 10,000'
			+'</br><span style="color:green;background-color:green">__</span> 10,001 - 20,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,001 - 30,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 30,001 - 40,000'
			+'</br><span style="color:red;background-color:blue">__</span> 40,001 - 50,000'      
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'hfep' : {
		is_group : true,
		is_indicator: false, 
		description : '<acronym title="Health Facilities Enhancement Program">HFEP</acronym> 2011 Budget: '
	},
	'infrahfep2011' : {
		'is_indicator' : false,
		'description' : 'Infrastructure'
	},
	'equiphfep2011' : {
		
		'is_indicator' : false,
		'description' : 'Equipment'
	},
	'hfep2011' : {
		
		'is_indicator' : true,
		'description' :  '<acronym title="Health Facilities Enhancement Program">HFEP</acronym> 2011 (in million Php)',
		'categ' : function(val) { 
			return ( val > 95 ? 'blue' : val > 63 ? 'green' : val > 35 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 3.35 - 21'
			+'</br><span style="color:orange;background-color:orange">__</span> 22 - 35'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36 - 63'
			+'</br><span style="color:green;background-color:green">__</span> 63 - 95'
			+'</br><span style="color:blue;background-color:blue">__</span> 96 - 266'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	
	
	},
	'fic2010' : {
		
		'is_indicator' : false,
		'description' : 'Fully Immunized Child (2010)'		
	},	
	'ficrate2010' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Fully Immunized Child (2010)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:red;background-color:red">__</span> 1-20%'	
			+'</br><span style="color:gray;background-color:gray">__</span> 0%'
	},	
	'maternaldeaths2010' : {
		
		'is_indicator' : false,
		'description' : 'Maternal Deaths 2010'
	},	
	'mdrate2010' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'red' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'blue') : 'orange')); 
			},
		'description' : '% Maternal Deaths (2010)',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:blue;background-color:blue">__</span> 1-20%'	
			+'</br><span style="color:gray;background-color:gray">__</span> 0%'
	},	
	'infantdeaths2010' : {
		
		'is_indicator' : false,
		'description' : 'Infant Deaths 2010'		
	},	
	'idrate2010' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'red' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'blue') : 'orange')); 
			},
		'description' : '% Infant Deaths (2010)',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:blue;background-color:blue">__</span> 1-20%'	
			+'</br><span style="color:gray;background-color:gray">__</span> 0%'
	},	
	'neonataldeaths2010' : {
		
		'is_indicator' : false,
		'description' : 'Neonatal Deaths 2010'		
	},
	'ndrate2010' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'red' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'blue') : 'orange')); 
			},
		'description' : '% Neonatal Deaths (2010)',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:blue;background-color:blue">__</span> 1-20%'	
			+'</br><span style="color:gray;background-color:gray">__</span>  0%'
		}		
}
function addCommas(nStr)
{
	nStr = parseInt(nStr);
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function getInfoText(datum) {
	return '<table>'
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<tr><th>Complete Address:</th><td> ' + datum.completeaddress : '')
		+ (datum.ownership && datum.ownership.length > 0? '<tr><th>Ownership:</th><td> ' + datum.ownership : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<tr><th>Service Capability:</th><td> ' + datum.servicecapability : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<tr><th>Authorized Bed Capacity:</th><td> ' + datum.authorizedbedcapacity : '')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<tr><th>Surgical Services:</th><td> ' + datum.surgicalservices : '')
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<tr><th>X-ray Capability:</th><td> ' + datum.xraycapability : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<tr><th>Laboratory Services:</th><td> ' + datum.laboratory : '')
		+ (datum.nummd && datum.nummd.length > 0? '<tr><th>Number of Medical Doctors:</th><td> ' + datum.nummd : '')
		+ (datum.numrn && datum.numrn.length > 0? '<tr><th>Number of Registered Nurses:</th><td> ' + datum.numrn : '')
		+ (datum.nummw && datum.nummw.length > 0? '<tr><th>Number of Midwives:</th><td> ' + datum.nummw : '')
		+ (datum.mooe2011 && datum.mooe2011.length > 0? '<tr><th>MOOE 2011:</th><td> ' + addCommas(datum.mooe2011) + '</td></tr>' : '')
		+ (datum.infra2011 && datum.infra2011.length > 0? '<tr><th>Infrastracture 2011:</th><td> ' + addCommas(datum.infra2011) + '</td></tr>' : '')
		+ (datum.equip2011 && datum.equip2011.length > 0? '<tr><th>Equipment 2011:</th><td> ' + addCommas(datum.equip2011) + '</td></tr>' : '')
		+ (datum.total2011 && datum.total2011.length > 0? '<tr><th>HFEP Total 2011 (Php):</th><td> ' + addCommas(datum.total2011) + '</td></tr>' : '')
		+ (datum.infra2012 && datum.infra2012.length > 0? '<tr><th>Infrastracture 2012:</th><td> ' + addCommas(datum.infra2012) + '</td></tr>' : '')
		+ (datum.equip2012 && datum.equip2012.length > 0? '<tr><th>Equipment 2012:</th><td> ' + addCommas(datum.equip2012) + '</td></tr>' : '')
		+ (datum.total2012 && datum.total2012.length > 0? '<tr><th>HFEP Total 2012 (Php):</th><td> ' + addCommas(datum.total2012) + '</td></tr>' : '')
		
		
		+'</table>'
}


var services = {
}