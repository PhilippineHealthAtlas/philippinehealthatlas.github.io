
var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/od9',
		'description' : 'DOH Retained Hospital',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
		
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/od6',
		'description' : 'LGU Hospital',
		'keyword' : 'LGU_Hospital',
		'marker' : '2hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocy',
		'description' : 'Military Hospital',
		'keyword' : 'Military_Hospital',
		'marker' : '3hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocz',
		'description' : 'University Hospital',
		'keyword' : 'University_Hospital',
		'marker' : '4hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
	},
	{
		'key' : '1pR7ANIDk7GlQu_izej3QVUiZJw3JxvYL7WeXhCcE6QI/od6',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : '5hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
		
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/od7',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/odb',
		'description' : 'Barangay Health Station',
		'keyword' : 'Barangay_Health_Station',
		'marker' : 'bhs12x12.png',
		'hideLayer' : true,
		size:12,
		zIndex:4 
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Evacuation Centers</h2>'
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/od8',
		'description' : 'Evacuation Center',
		'keyword' : 'Evacuation_Center',
		'marker' : 'evac.png',
		'hideLayer' : true,
		size:15
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Extent of Damage</h2>'
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/oco',
		'description' : 'Fully Damaged',
		'keyword' : 'Fully_Damaged',
		'marker' : 'fullydamaged22x22.png',
		'hideLayer' : true,
		size:22,
		zIndex:2
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/ocr',
		'description' : 'Partially Damaged',
		'keyword' : 'Partially_Damaged',
		'marker' : 'partialdamage22x22.png',
		'hideLayer' : true,
		size:22,
		zIndex:2
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/ocv',
		'description' : 'Intact',
		'keyword' : 'Intact',
		'marker' : 'intact22x22.png',
		'hideLayer' : true,
		size:22,
		zIndex:2
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/ocu',
		'description' : 'To be Determined',
		'keyword' : 'To_be_Determined',
		'marker' : 'tbd22x22.png',
		'hideLayer' : true,
		size:22,
		zIndex:2
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Operational Status</h2>'
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/ocx',
		'description' : 'Functional Facility',
		'keyword' : 'Functional_Facility',
		'marker' : 'func2.png',
		'hideLayer' : true,
		size:28,
		zIndex:1 
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/od2',
		'description' : 'Non-Functional Facility',
		'keyword' : 'Non_Functional_Facility',
		'marker' : 'nonfunc.png',
		'hideLayer' : true,
		size:28,
		zIndex:1 
	},
	{
		'key' : '1geuPMjGcUf0fSovf0DqsLk9R6CQihT3wAOwBXYjwOk4/ocp',
		'description' : 'To be Determined Facility',
		'keyword' : 'To_be_Detemined_Facility',
		'marker' : 'tbd28x28.png',
		'hideLayer' : true,
		size:28,
		zIndex:1 
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Medical Missions</h2>'
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/od7',
		'description' : 'DOH Teams',
		'keyword' : 'DOH_Teams',
		'marker' : 'local2.png',
		'hideLayer' : true,
		size:20
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/ocz',
		'description' : 'Local Teams',
		'keyword' : 'Local_Teams',
		'marker' : 'volun.png',
		'hideLayer' : true,
		size:20,
		zIndex:3
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/od5',
		'description' : 'Foreign Teams',
		'keyword' : 'Foreign_Teams',
		'marker' : 'foreignx.png',
		'hideLayer' : true,
		size:20,
		zIndex:3
	},
	{
		'is_title' : true,
		'description' : '<br/><h2>&mdash; Path of Typhoon Yolanda</h2>'
	}
];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Impact Statistics</h2>'
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/od6',
		description : 'Municipalities',
		'keyword' : 'municipalities',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_municipalities'
	},
	{
		'key' : '1_r5jqCsSQYExoti1J-tdnc49HyK5KOHT2mFS1aQjo18/od3',
		description : 'Provinces',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
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
function commatize(val) {
	return val;
}
function lister(text) {
    return '</td></tr><tr><td colspan="3"><div style="max-height:500px; overflow:auto">'+text+'</div>';
}
var attributes ={ 
		
	'population2010' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 100000 ? 'orange' : val > 80001 ? 'blue' : val > 40001 ? 'green' : (val < 40001 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Total Population 2010',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 2,000 - 40,000'
			+'</br><span style="color:green;background-color:green">__</span> 40,001 - 80,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 80,001 - 100,000'
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'affectedbrgysprov' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 801 ? 'red' : val > 601 ? 'orange' : val > 401 ? 'yellow' : (val < 200 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Affected Barangay (Province) ',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 200'
			+'</br><span style="color:green;background-color:green">__</span> 201 - 400'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 401 - 600'
			+'</br><span style="color:orange;background-color:orange">__</span> 601 -800'
			+'</br><span style="color:red;background-color:red">__</span> 801 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
			
	},*/
	'affectedbrgys111513' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 41 ? 'red' : val > 31 ? 'orange' : val > 21 ? 'yellow' : (val < 10 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Affected Barangays',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 20'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 21 - 30'
			+'</br><span style="color:orange;background-color:orange">__</span> 31 -40'
			+'</br><span style="color:red;background-color:red">__</span> 41 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'affectedfamprov' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 80001 ? 'red' : val > 60001 ? 'orange' : val > 40001 ? 'yellow' : (val < 20000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Affected Families (Province)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 20,000'
			+'</br><span style="color:green;background-color:green">__</span> 20,001 - 40,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 40,001 - 60,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 60,001 - 80,000'
			+'</br><span style="color:red;background-color:red">__</span> 80,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},*/
					
	'affectedfamilies111513' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 8001 ? 'red' : val > 6001 ? 'orange' : val > 4001 ? 'yellow' : (val < 2000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Affected Families',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 2,000'
			+'</br><span style="color:green;background-color:green">__</span> 2,001 - 4,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 4,001 - 6,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 6,001 - 8,000'
			+'</br><span style="color:red;background-color:red">__</span> 8,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'affectedperprov' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 800001 ? 'red' : val > 600001 ? 'orange' : val > 400001 ? 'yellow' : (val < 200000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Affected Persons (Province)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 200,000'
			+'</br><span style="color:green;background-color:green">__</span> 200,001 - 400,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 400,001 - 600,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 600,001 - 800,000'
			+'</br><span style="color:red;background-color:red">__</span> 800,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'	
	},*/	
	'affectedpersons111513' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 80001 ? 'red' : val > 60001 ? 'orange' : val > 40001 ? 'yellow' : (val < 20000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Affected Persons',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 20,000'
			+'</br><span style="color:green;background-color:green">__</span> 20,001 - 40,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 40,001 - 60,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 60,001 - 80,000'
			+'</br><span style="color:red;background-color:red">__</span> 80,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'deadprovince' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 401 ? 'red' : val > 301 ? 'orange' : val > 201 ? 'yellow' : (val < 100 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Death per (Province)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 100'
			+'</br><span style="color:green;background-color:green">__</span> 101 - 200'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 201 - 300'
			+'</br><span style="color:orange;background-color:orange">__</span> 301 - 400'
			+'</br><span style="color:red;background-color:red">__</span> 401 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},*/
	'deathsmuni' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 100 ? 'red' : val > 20 ? 'orange' : val > 10 ? 'yellow' : (val < 5 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Declared Death (NDRRMC)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 5'
			+'</br><span style="color:green;background-color:green">__</span> 6 - 10'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 11 - 20'
			+'</br><span style="color:orange;background-color:orange">__</span> 21 - 100'
			+'</br><span style="color:red;background-color:red">__</span> 101 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
			
	},
	/*'injuredprovince' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 401 ? 'red' : val > 301 ? 'orange' : val > 201 ? 'yellow' : (val < 100 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Injured per (Province)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 100'
			+'</br><span style="color:green;background-color:green">__</span> 101 - 200'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 201 - 300'
			+'</br><span style="color:orange;background-color:orange">__</span> 301 - 400'
			+'</br><span style="color:red;background-color:red">__</span> 401 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},*/
	'injuriesmuni' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 1000 ? 'red' : val > 100 ? 'orange' : val > 20 ? 'yellow' : (val < 5 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Declared Injured(NDRRMC)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 5'
			+'</br><span style="color:green;background-color:green">__</span> 6 - 20'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 21 - 100'
			+'</br><span style="color:orange;background-color:orange">__</span> 101 - 1000'
			+'</br><span style="color:red;background-color:red">__</span> 1001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},			
	'dohhospitalsexisting' : {
	
		is_indicator : false,
		myColor: '#1E90FF',
		description : 'DOH Hospitals Existing',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'dohhospitalsdamage' : {
	
		is_indicator : false,
		myColor: '#1E90FF',
		description : 'DOH Hospitals Damage',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'lguhospitalsexisting' : {
	
		is_indicator : false,
		myColor: '#4B0082',
		description : 'LGU Hospitals Existing',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'lguhospitalsdamage' : {
	
		is_indicator : false,
		myColor: '#4B0082',
		description : 'LGU Hospitals Damage',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'privatehospitalsexisting' : {
	
		is_indicator : false,
		myColor: '#FF4500',
		description : 'Private Hospitals Existing',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'privatehospitalsdamage' : {
	
		is_indicator : false,
		myColor: '#FF4500',
		description : 'Private Hospitals Damage',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'rhuexisting' : {
	
		is_indicator : false,
		myColor: '#C71585',
		description : 'RHU Existing',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'rhudamage' : {
	
		is_indicator : false,
		myColor: '#C71585',
		description : 'RHU Damage',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'bhsexisting' : {
	
		is_indicator : false,
		myColor: '#DC143C',
		description : 'BHS Existing',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},			
	'bhsdamage' : {
	
		is_indicator : false,
		myColor: '##DC143C',
		description : 'BHS Damage',
		categ : getOne, formatter : nonee, details_: getOneDetails
	}
}


var settings = {
	//'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od6',
	'provname' : 'name',
	'geojson_name' : 'NAME_2',
	center: [10.724,123.766],
	zoom:7
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
	
		// Basic Information
		+ (datum.ownership || datum.dohfacilitycode || datum.speedcode || datum.regionname || datum.provincename || datum.municipalityname || datum.barangayname  ? '<br/><br/><h2>Basic Information</h2>':'')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.dohfacilitycode && datum.dohfacilitycode.length > 0? '<br/><b>DOH Health Facility Code</b>: ' + datum.dohfacilitycode : '')
		+ (datum.speedcode && datum.speedcode.length > 0? '<br/><b>Speed Code</b>: ' + datum.speedcode : '')
		+ (datum.regionname && datum.regionname.length > 0? '<br/><b>Region Name</b>: ' + datum.regionname : '')
		+ (datum.provincename && datum.provincename.length > 0? '<br/><b>Province Name</b>: ' + datum.provincename : '')
		+ (datum.municipalityname && datum.municipalityname.length > 0? '<br/><b>Municipality Name</b>: ' + datum.municipalityname : '')
		+ (datum.barangayname && datum.barangayname.length > 0? '<br/><b>Barangay Name</b>: ' + datum.barangayname : '')
		
		
		// Present Status
		+ (datum.operationstatus || datum.extentofdamage  || datum.needs ? '<br/><br/><h2>Present Status</h2>':'')
		+ (datum.status && datum.status.length > 0? '<br/><b>Current Status</b>: ' + datum.status : '')
		+ (datum.operationstatus && datum.operationstatus.length > 0? '<br/><b>Operational Status</b>: ' + datum.operationstatus : '')
		+ (datum.extentofdamage && datum.extentofdamage.length > 0? '<br/><b>Extent of Damage</b>: ' + datum.extentofdamage : '')
		+ (datum.needs && datum.needs.length > 0? '<br/><b>Needs</b>: ' + datum.needs : '')
		
		
		
		// Estimated Cost of Damage
		+ (datum.totalcostofdamage || datum.damagedescription ? '<br/><br/><h2>Estimated Cost of Damage</h2>':'')
		+ (datum.infradamage  && datum.infradamage .length > 0? '<br/><b>Infrastructure Damage</b>: ' + datum.infradamage  : '')
		+ (datum.equipdamage  && datum.equipdamage .length > 0? '<br/><b>Equipment Damage</b>: ' + datum.equipdamage  : '')
		+ (datum.totalcostofdamage  && datum.totalcostofdamage .length > 0? '<br/><b>Total Cost of Damage</b>: ' + datum.totalcostofdamage  : '')
		+ (datum.damagedescription && datum.damagedescription.length > 0? '<br/><b>Damage Description</b>: ' + datum.damagedescription : '')
		
		
		
		// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'

		
		
		// Local Medical Mission
		+ (datum.localteams || datum.dateofdeployment ? '<br/><br/><h2>Local Medical Mission</h2>':'')
		+ (datum.localteams && datum.localteams.length > 0? '<br/><b>Local Teams</b>: ' + datum.localteams : '')
		+ (datum.areaofassignment && datum.areaofassignment.length > 0? '<br/><b>Area of Assignment</b>: ' + datum.areaofassignment : '')
		+ (datum.dateofdeployment && datum.dateofdeployment.length > 0? '<br/><b>Date of Deployment</b>: ' + datum.dateofdeployment : '')
		+ (datum.teamtype && datum.teamtype.length > 0? '<br/><b>Team Type</b>: ' + datum.teamtype : '')
		+ (datum.capabilityequipment && datum.capabilityequipment.length > 0? '<br/><b>Capability/Equipment</b>: ' + datum.capabilityequipment : '')
		+ (datum.cstatus && datum.cstatus.length > 0? '<br/><b>Current Status</b>: ' + datum.cstatus : '')
		+ (datum.teamcompo && datum.teamcompo.length > 0? '<br/><b>Team Composition</b>: ' + datum.teamcompo : '')
		+ (datum.servicesrendered && datum.servicesrendered.length > 0? '<br/><b>Services Rendered</b>: ' + datum.servicesrendered : '')
		
		
		// Foreign Medical Mission
		+ (datum.foreignteams || datum.dateofarrival ? '<br/><br/><h2>Foreign Medical Mission</h2>':'')
		+ (datum.foreignteams && datum.foreignteams.length > 0? '<br/><b>Foreign Teams</b>: ' + datum.foreignteams : '')
		+ (datum.areaofassign && datum.areaofassign.length > 0? '<br/><b>Area of Assignment</b>: ' + datum.areaofassign : '')
		+ (datum.dateofarrival && datum.dateofarrival.length > 0? '<br/><b>Date of Arrival</b>: ' + datum.dateofarrival : '')
		+ (datum.dateofdeparture && datum.dateofdeparture.length > 0? '<br/><b>Date of Departure</b>: ' + datum.dateofdeparture : '')
		+ (datum.teamclass && datum.teamclass.length > 0? '<br/><b>Team Class</b>: ' + datum.teamclass : '')
		+ (datum.capequip && datum.capequip.length > 0? '<br/><b>Capability/Equipment</b>: ' + datum.capequip : '')
		+ (datum.cstat && datum.cstat.length > 0? '<br/><b>Current Status</b>: ' + datum.cstat : '')
		+ (datum.teamcomp&& datum.teamcomp.length > 0? '<br/><b>Team Composition</b>: ' + datum.teamcomp : '')
		
		
		
		// Volunteer Medical Mission
		+ (datum.volunteerteams || datum.dateofdeploy || datum.areaassign || datum.ttype || datum.capabilityequipment || datum.statusc || datum.teamcom ? '<br/><br/><h2>Volunteer Organization</h2>':'')
		+ (datum.volunteerteams && datum.volunteerteams.length > 0? '<br/><b>Volunteer Teams</b>: ' + datum.volunteerteams : '')
		+ (datum.areaassign && datum.areaassign.length > 0? '<br/><b>Area of Assignment</b>: ' + datum.areaassign : '')
		+ (datum.dateofdeploy && datum.dateofdeploy.length > 0? '<br/><b>Date of Deployment</b>: ' + datum.dateofdeploy : '')
		+ (datum.ttype && datum.ttype.length > 0? '<br/><b>Team Type</b>: ' + datum.ttype : '')
		+ (datum.capabilityequipment && datum.capabilityequipment.length > 0? '<br/><b>Capability/Equipment</b>: ' + datum.capabilityequipment : '')
		+ (datum.statusc && datum.statusc.length > 0? '<br/><b>Current Status</b>: ' + datum.statusc : '')
		+ (datum.teamcom && datum.teamcom.length > 0? '<br/><b>Team Composition</b>: ' + datum.teamcom : '')
		
		
		
		// Evacuation Centers
		+ (datum.address || datum.personsdisplace? '<br/><br/><h2>Evacuation Center</h2>':'')
		+ (datum.address && datum.address.length > 0? '<br/><b>Address</b>: ' + datum.address : '')
		+ (datum.personsdisplaced && datum.personsdisplaced.length > 0? '<br/><b>Persons Displaced</b>: ' + datum.personsdisplaced : '')
		;
		

	
		
		
} 	

var services = {};
var showOtherLayers = function() {
	
	var yc = yolanda_path.features[0].geometry.coordinates;
	var path = [];
	for (var i in yc) {
		path.push(new google.maps.LatLng(yc[i][1],yc[i][0]));
		
		console.log(yc[i][1] + ',' + yc[i][0]);
	}
	console.log(path);
	console.log(map);
	new google.maps.Polyline({
		map: map,
		path: path
	});
}
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});