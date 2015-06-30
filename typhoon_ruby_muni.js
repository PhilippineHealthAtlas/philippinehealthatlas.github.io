
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
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/od6',
		'description' : 'LGU Hospital',
		'keyword' : 'LGU_Hospital',
		'marker' : '2hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocy',
		'description' : 'Military Hospital',
		'keyword' : 'Military_Hospital',
		'marker' : '3hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocz',
		'description' : 'University Hospital',
		'keyword' : 'University_Hospital',
		'marker' : '4hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1pR7ANIDk7GlQu_izej3QVUiZJw3JxvYL7WeXhCcE6QI/od6',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : '5hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 1
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/od7',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/odb',
		'description' : 'Barangay Health Station',
		'keyword' : 'Barangay_Health_Station',
		'marker' : 'bhs12x12.png',
		'hideLayer' : true,
		size:12
	},
	/*{ 
		'is_title' : true,
		'description' : '<br/><h2>Evacuation Centers</h2>'
	},
	{
		'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od8',
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
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/oco',
		'description' : 'Fully Damaged',
		'keyword' : 'Fully_Damaged',
		'marker' : 'fullydamaged22x22.png',
		'hideLayer' : true,
		size:22
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/ocr',
		'description' : 'Partially Damaged',
		'keyword' : 'Partially_Damaged',
		'marker' : 'partialdamage22x22.png',
		'hideLayer' : true,
		size:22
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/ocv',
		'description' : 'Intact',
		'keyword' : 'Intact',
		'marker' : 'intact22x22.png',
		'hideLayer' : true,
		size:22
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/ocu',
		'description' : 'To be Determined',
		'keyword' : 'To_be_Determined',
		'marker' : 'tbd22x22.png',
		'hideLayer' : true,
		size:22
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Operational Status</h2>'
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/ocx',
		'description' : 'Functional Facility',
		'keyword' : 'Functional_Facility',
		'marker' : 'func2.png',
		'hideLayer' : true,
		size:28
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/od2',
		'description' : 'Non-Functional Facility',
		'keyword' : 'Non_Functional_Facility',
		'marker' : 'nonfunc.png',
		'hideLayer' : true,
		size:28
	},
	{
		'key' : '0Aq7eQ20tUwmTdFBET1N5bE54VmFOdHhCb2FmaDAwR3c/ocp',
		'description' : 'To be Determined Facility',
		'keyword' : 'To_be_Detemined_Facility',
		'marker' : 'tbd28x28.png',
		'hideLayer' : true,
		size:28
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Medical Missions</h2>'
	},
	{
		'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od7',
		'description' : 'DOH Teams',
		'keyword' : 'DOH_Teams',
		'marker' : 'local2.png',
		'hideLayer' : true,
		size:20
	},
	{
		'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/ocz',
		'description' : 'Local Teams',
		'keyword' : 'Local_Teams',
		'marker' : 'volun.png',
		'hideLayer' : true,
		size:20
	},
	{
		'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od5',
		'description' : 'Foreign Teams',
		'keyword' : 'Foreign_Teams',
		'marker' : 'foreignx.png',
		'hideLayer' : true,
		size:20
	},*/
	{
		'is_title' : true,
		'description' : '<br/><h2>&mdash; Path of Typhoon Ruby (PAG-ASA)</h2>'
	},
	{
		'is_title' : true,
		'description' : '<br/><h2><span style="color:#610B21">&mdash;</span> Path of Typhoon Yolanda 2013</h2>'
	}
];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Impact Statistics</h2>'
	},
	{
		'key' : '1kIZnQMGURHxmsl1xtiqWkip1F_n7aoYcTGMxZLIfkJQ/oco',
		description : 'Municipalities',
		'keyword' : 'municipalities',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_municipalities'
	},
	/*{
		'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od3',
		description : 'Provinces',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}*/
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
			+'</br><span style="color:orange;background-color:orange">__</span> >100,000 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'affectedfamilies' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 8001 ? 'red' : val > 6001 ? 'orange' : val > 2001 ? 'yellow' : (val < 501 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Affected Families',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 500'
			+'</br><span style="color:green;background-color:green">__</span> 501 - 2,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 2,001 - 6,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 6,001 - 8,000'
			+'</br><span style="color:red;background-color:red">__</span> 8,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'affectedpersons' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 60001 ? 'red' : val > 40001 ? 'orange' : val > 20001 ? 'yellow' : (val < 10000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Affected Persons',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 10,000'
			+'</br><span style="color:green;background-color:green">__</span> 10,001 - 20,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,001 - 40,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 40,001 - 60,000'
			+'</br><span style="color:red;background-color:red">__</span> 60,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	}, 
	'numberofevacuationcenters' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 60001 ? 'red' : val > 40001 ? 'orange' : val > 20001 ? 'yellow' : (val < 10000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Evacuation Centers',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 10,000'
			+'</br><span style="color:green;background-color:green">__</span> 10,001 - 20,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,001 - 40,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 40,001 - 60,000'
			+'</br><span style="color:red;background-color:red">__</span> 60,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	}, 
	'insideevacuationcenterfamilies' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 60001 ? 'red' : val > 40001 ? 'orange' : val > 20001 ? 'yellow' : (val < 10000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Families in Evacuation Centers',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 10,000'
			+'</br><span style="color:green;background-color:green">__</span> 10,001 - 20,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,001 - 40,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 40,001 - 60,000'
			+'</br><span style="color:red;background-color:red">__</span> 60,001 - above'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	}, 
	'insideevacuationcenterpersons' : {
	
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 60001 ? 'red' : val > 40001 ? 'orange' : val > 20001 ? 'yellow' : (val < 10000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'No. of Persons in Evacuation Centers',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 1 - 10,000'
			+'</br><span style="color:green;background-color:green">__</span> 10,001 - 20,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 20,001 - 40,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 40,001 - 60,000'
			+'</br><span style="color:red;background-color:red">__</span> 60,001 - above'
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
	center: [13.921227, 121.785312],
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
		+ (datum.streetnameandnumber && datum.streetnameandnumber.length > 0? '<br/><b>Address</b>: ' + datum.streetnameandnumber : '')
		
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

		;
			
} 	

var services = {};
var showOtherLayers = function() {
 var kmlLayer1 =  new google.maps.KmlLayer({
'url': 'https://www.google.com/maps/d/kml?mid=zxLevk8015Yc.kF5kKRc29NPM&lid=zxLevk8015Yc.kvewDaSGsPR4&cid=mp&cv=tb7mTH-S3Z8.en.',
'preserveViewport' : true,'suppressInfoWindows': true,
zIndex: 25,
'map' : map
});
 var kmlLayer2 =  new google.maps.KmlLayer({
'url': 'https://www.google.com/maps/d/kml?mid=zxLevk8015Yc.kF5kKRc29NPM&lid=zxLevk8015Yc.kq_ZYv6_SMRI&cid=mp&cv=dAM1O09h7Mg.en_GB.',
'preserveViewport' : true
,'suppressInfoWindows': true,
zIndex: 20,
'map' : map
});

new google.maps.KmlLayer({
'url': 'https://www.google.com/maps/d/kml?mid=zTnuUZS-WSKg.kaoTaL_70kcA&lid=zTnuUZS-WSKg.kJmwdnC83xd8&cid=mp&cv=tb7mTH-S3Z8.en_GB.',
'preserveViewport' : true,
zIndex: 20,
'map' : map
});

/*new google.maps.KmlLayer({
'url': 'http://facts.rappler.com/noah/dopplers.kml?',
'preserveViewport' : true,  zIndex: 20,
'suppressInfoWindows': true,
'map' : map
});*/

showInContentWindow = function(kmlEvent) {
   var text = kmlEvent.featureData.description;
       $('#rightpanel').show();
       $('#marker_data .padding').html(text.replace(/\n/g,"<br/>"));
 }

google.maps.event.addListener(kmlLayer1, 'click', showInContentWindow);
google.maps.event.addListener(kmlLayer2, 'click', showInContentWindow);
}
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});

