
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdDYxVWtORHphSENRSlRnY0ZJeDlIanc/oco',
		'description' : 'Health Facilities',
		'keyword' : 'health_facilities',
		'marker' : 'static/hospital_.png',
		size:12,
		zIndex: 1
	}
];

var polygon_spreadsheets = [
	{
		'key' : '0Aq7eQ20tUwmTdDYxVWtORHphSENRSlRnY0ZJeDlIanc/od1',
		'description' : 'Provinces',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];
var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList : false,
};	

var attributes = {

	'civilwork' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 300000001 ? 'blue' : val > 200000001 ? 'orange' : val > 100000001 ? 'yellow' : (val < 25000000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Civil Work Cost',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 500,000 - 25,000,000'
			+'</br><span style="color:green;background-color:green">__</span> 25,000,001 - 100,000,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 100,000,001 - 200,000,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 200,000,001 - 300,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 300,000,001 - 450,000,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	
	},
	'equipment' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 100000001 ? 'blue' : val > 50000001 ? 'orange' : val > 25000001 ? 'yellow' : (val < 1000000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Equipment Cost',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 50,000 - 1,000,000'
			+'</br><span style="color:green;background-color:green">__</span> 1,000,001 - 25,000,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 25,000,001 - 50,000,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 50,000,001 - 100,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 100,000,001 - 150,000,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'comsupp' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 200000001 ? 'blue' : val > 100000001 ? 'orange' : val > 50000001 ? 'yellow' : (val < 20000000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Commodities & Supplies Cost',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 400,000 - 20,000,000'
			+'</br><span style="color:green;background-color:green">__</span> 20,000,001 - 50,000,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 50,000,001 - 100,000,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 100,000,001 - 200,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 200,000,001 - 300,000,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'training' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 50000001 ? 'blue' : val > 40000001 ? 'orange' : val > 20000001 ? 'yellow' : (val < 1000000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Training Cost',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 100,000 - 1,000,000'
			+'</br><span style="color:green;background-color:green">__</span> 1,000,001 - 20,000,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,000,001 - 40,000,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 40,000,001 - 50,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 50,000,001 - 65,000,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'perbased' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 70000001 ? 'blue' : val > 50000001 ? 'orange' : val > 30000001 ? 'yellow' : (val < 1000000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Performance Based Grant',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 100,000 - 1,000,000'
			+'</br><span style="color:green;background-color:green">__</span> 1,000,001 - 30,000,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 30,000,001 - 50,000,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 50,000,001 - 70,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 70,000,001 - 85,000,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'vehicle' : {
		'is_indicator' : false,
		'description' : 'Vehicle Cost'
	},
	'total' : {
	
		'is_indicator' : true,
		'description' :  'Total Assistance Cost (in million Php)',
		'categ' : function(val) { 
			return ( val > 101 ? 'blue' : val > 76 ? 'green' : val > 200 ? 'yellow' : (val < 25 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1.5 - 25'
			+'</br><span style="color:orange;background-color:orange">__</span> 26 - 50'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 51 - 75'
			+'</br><span style="color:green;background-color:green">__</span> 76 - 100'
			+'</br><span style="color:blue;background-color:blue">__</span> 101- 500'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},
	'ec' : {
		'is_indicator' : false,
		'description' : 'European Commission (Grant)'
	},
	'usaid' : {
		'is_indicator' : false,
		'description' : 'USAID (Grant)'
	},
	'kfw' : {
		'is_indicator' : false,
		'description' : 'KFW(Grant)'	
	},
	'jica' : {
		'is_indicator' : false,
		'description' : 'JICA(Grant)'	
	},
	'bloomberg1' : {
		'is_indicator' : false,
		'description' : 'Bloomberg1(Grant)'	
	},
	'unfpa' : {
		'is_indicator' : false,
		'description' : 'UNFPA(Grant)'	
	},
	'who' : {
		'is_indicator' : false,
		'description' : 'World Health Organization(Grant)'	
	},
	'koica' : {
		'is_indicator' : false,
		'description' : 'KOICA(Grant)'	
	},
	'aecid' : {
		'is_indicator' : false,
		'description' : 'AECID(Grant): '
	},
	'globalfund' : {
		'is_indicator' : false,
		'description' : 'Global Fund(Grant)'	
	},
	'wb' : {
		'is_indicator' : false,
		'description' : 'World Bank(Loan)'	
	},
	'adb' : {
		'is_indicator' : false,
		'description' : 'Asian Development Bank (Loan)'	
			
	},
	'notidentified' : {
		'is_indicator' : false,
		'description' : 'Unidentified'	
			
	    }
}
function getDetails() {

	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1) + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 '
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
			
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
		+ (datum.municipality && datum.municipality.length > 0? '<tr><th>Municipality:</th><td> ' + datum.municipality + '</td></tr>' : '')
		+ (datum.typehf && datum.typehf.length > 0? '<tr><th>Type of Health Facilitiy:</th><td> ' + datum.typehf + '</td></tr>' : '')
		+ (datum.civilwork && datum.civilwork.length > 0? '<tr><th>Civil Work Cost:</th><td> ' + addCommas(datum.civilwork) + '</td></tr>' : '')
		+ (datum.equipment && datum.equipment.length > 0? '<tr><th>Equipment Cost:</th><td> ' + addCommas(datum.equipment) + '</td></tr>' : '')
		+ (datum.commsupp && datum.commsupp.length > 0? '<tr><th>Commodities & Supplies Cost:</th><td> ' + addCommas(datum.commsupp) + '</td></tr>' : '')
		+ (datum.training && datum.training.length > 0? '<tr><th>Training Cost:</th><td> ' + addCommas(datum.training) + '</td></tr>' : '')
		+ (datum.perbased && datum.perbased.length > 0? '<tr><th>Performance Based Grant:</th><td> ' + addCommas(datum.perbased) + '</td></tr>' : '')
		+ (datum.vehicle && datum.vehicle.length > 0? '<tr><th>Vehicle Cost:</th><td> ' + addCommas(datum.vehicle) + '</td></tr>' : '')
		+ (datum.total && datum.total.length > 0? '<tr><th>Total Amount (Php):</th><td> ' + addCommas(datum.total) + '</td></tr>' : '')
		+'<tr><th>Source of Fund:</th><td> '
		+ (datum.sourcegrant && datum.sourcegrant.length > 0? '<tr><th>Grant:</th><td> ' + datum.sourcegrant + '</td></tr>' : '')
		+ (datum.sourceloan && datum.sourceloan.length > 0? '<tr><th>Loan:</th><td> ' + datum.sourceloan + '</td></tr>' : '')
		+'<tr><th>Source of ODA:</th><td> '
		+ (datum.grantsummary && datum.grantsummary.length > 0? '</table><table><tr><th>' + datum.grantsummary.replace(/\|/g,'</th><td>').replace(/_/g,'</td></tr><tr><th>') + '</td></tr>' : '')
		+ '</table>'
		;
}


var services = {
}