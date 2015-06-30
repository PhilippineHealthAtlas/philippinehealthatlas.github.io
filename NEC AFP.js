
var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>DOH Accredited Medical Clinic</h2>'
	},
	
	{	'key' : '0AoBD4uHCApskdDljcG0zSjI3TjFlMUZCSG0tTDkzTGc/od2',
		'description' : 'Medical Clinics',
		'keyword' : 'name',
		'marker' : 'clinic.png',
		'hideLayer' : true,
		size:12
	
	}
];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Boundaries</h2>'
	},
	{
		'key' : '0AoBD4uHCApskdDljcG0zSjI3TjFlMUZCSG0tTDkzTGc/od3',
		description : 'Municipalities',
		'keyword' : 'municipalities',
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
function commatize(val) {
	return val;
}
function lister(text) {
    return '</td></tr><tr><td colspan="3"><div style="max-height:500px; overflow:auto">'+text+'</div>';
}
var attributes ={ 

		
	'bhfsmunicipality' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 1 ? 'red' : val > 1 ? 'red' : val > 1 ? 'red' : (val < 1 ? (val == 0 ? 'gray' : 'red') : 'red')); 
			},
		'description' : 'Number of accredited medical clinics',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> >Count'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
			
	},
	/*'affectedbrgysprov' : {
	
		'is_indicator' : false,
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
	'reportedcases2014' : {
		
		'is_indicator' : false,
		'categ' : function(val) { 
			return ( val > 16 ? 'red' : val > 11 ? 'orangered' : val > 6 ? 'yellow' : (val < 5 ? (val == 0 ? 'gray' : 'green') : 'red')); 
			},
		'description' : 'Total Reported Cases 2014',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> >16'
			+'</br><span style="color:green;background-color:orangered">__</span> 11 - 15'
			+'</br><span style="color:blue;background-color:yellow">__</span> 6 - 10'
			+'</br><span style="color:orange;background-color:green">__</span> 1 - 5'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	/*'affectedbrgysprov' : {
	
		'is_indicator' : false,
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
}


var settings = {
	//'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od6',
	'provname' : 'name',
	'geojson_name' : 'NAME_2',
	center: [12.082296,122.472153],
	zoom:6
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
		+ (datum.type || datum.contactnumber || datum.speedcode || datum.regionname || datum.provincename || datum.municipalityname || datum.barangayname  ? '<br/><br/><h2>Basic Information</h2>':'')
		+ (datum.type && datum.type.length > 0? '<br/><b>Type</b>: ' + datum.type : '')
		+ (datum.contactnumber && datum.contactnumber.length > 0? '<br/><b>Contact Number</b>: ' + datum.contactnumber : '')
		+ (datum.speedcode && datum.speedcode.length > 0? '<br/><b>Speed Code</b>: ' + datum.speedcode : '')
		+ (datum.regionname && datum.regionname.length > 0? '<br/><b>Region Name</b>: ' + datum.regionname : '')
		+ (datum.provincename && datum.provincename.length > 0? '<br/><b>Province Name</b>: ' + datum.provincename : '')
		+ (datum.municipalityname && datum.municipalityname.length > 0? '<br/><b>Municipality Name</b>: ' + datum.municipalityname : '')
		+ (datum.barangayname && datum.barangayname.length > 0? '<br/><b>Barangay Name</b>: ' + datum.barangayname : '')
		+ (datum.streetname && datum.streetname.length > 0? '<br/><b>Street Name</b>: ' + datum.streetname : '')
		
		// count
		+ (datum.count  ? '<br/><br/><h2>Number of DOH Accredited Medical Clinics</h2>':'')
		+ (datum.count && datum.count.length > 0? '<br/><b>Number of DOH Accredited Medical Clinics</b>: ' + datum.count : '')
		
		
		// Number of Reported Cases 2014
		+ (datum.reportedcases2014 || datum.morbidityweek1  || datum.morbidityweek2 || datum.morbidityweek3 ? '<br/><br/><h2>Number of Reported Cases 2014</h2>':'')
		+ (datum.reportedcases2014 && datum.reportedcases2014.length > 0? '<br/><b>Total Reported Cases 2014</b>: ' + datum.reportedcases2014 : '')
		+ (datum.morbidityweek1 && datum.morbidityweek1.length > 0? '<br/><b>2014 Morbidity Week 1</b>: ' + datum.morbidityweek1 : '')
		+ (datum.morbidityweek2 && datum.morbidityweek2.length > 0? '<br/><b>2014 Morbidity Week 2</b>: ' + datum.morbidityweek2 : '')
		+ (datum.morbidityweek3 && datum.morbidityweek3.length > 0? '<br/><b>2014 Morbidity Week 3</b>: ' + datum.morbidityweek3 : '')
		
		
		// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
		
		
} 	

var services = {};

$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});