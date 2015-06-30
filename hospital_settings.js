
var spreadsheets = [
	
	{
		'key' : '0Aj-7MceMcnWtdGRMcEN3YWwzc01RUkRNaDVPRjJaSHc/od6',
		'description' : 'Hospital',
		'keyword' : 'hospital',
		'marker' : 'static/hospital_.png'
	}
];

function getInfoText(datum) {
	var text = ''
		+(datum['ownership'] ? '<br/>Ownership: ' + datum['ownership'] : '')
		+(datum['bedcapacity'] ? '<br/>Authorized Bed Capacity: ' + datum['bedcapacity'] : '')
		+(datum['servicecapability'] ? '<br/>Service Capability: Level ' + datum['servicecapability'] : '')
		+(datum['xrayservice'] ? '<br/>Xray Services: ' + datum['xrayservice'] : '')
		+'<br/></br><b>Ancillary Services</b>:'
		;
	var j = 0;
	for (var i in services) {
		if (datum[i] == '1') {
			text += '<br/>' + services[i].description;
			j++;
		}
		
	}
	if (j == 0) {
		text += '<br/>none';
	}
	return text;
}

var settings = {
}

var services = {
	'xrayservices' : {'description': 'X-ray Service'},
	'bloodbank' : {'description': 'Blood Bank'},
	'bloodcollection' : {'description': 'Blood Collection Unit'},
	'apheresis' : {'description': 'Apheresis Facility'},
	'hivtesting' : {'description': 'HIV Testing Lab'},
	'drinkingwater' : {'description': 'Drinking Water Analysis Lab'},
	'drugscreening' : {'description': 'Drug Screening Lab'},
	'pharmacy' : {'description': 'Pharmacy' }
}