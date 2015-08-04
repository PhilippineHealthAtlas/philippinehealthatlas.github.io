
var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/osybw1b',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12
	}
];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Impact Statistics</h2>'
	},
	{
		'key' : '1WzLOwRql6_w8hH5aSJ9EJEQs_ORYTR8gzcUnaO5qoaw/od6',
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
	'provname' : 'muni_province',
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
		
	'withbirthingfacility' : {
	
		is_indicator : true,
		myColor: '#1BDDE0',
		description : 'RHU with Birthing Facility',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'listed' : {
            is_indicator : false,
            description : 'List',
            formatter:lister	
	
	}
}


var settings = {
	//'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od6',
	'provname' : 'muni_province',
	'geojson_name' : 'NAME_2',
	center: [10.724,123.766],
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
	
		+ (datum.dohfacilitycode && datum.dohfacilitycode.length > 0? '<br/><b>DOH Health Facility Code</b>: ' + datum.dohfacilitycode : '')
		+ (datum.adr && datum.adr.length > 0? '<br/><b>Address</b>: ' + datum.adr : '')
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/><b>Complete Address</b>: ' + datum.completeaddress : '')
		+ (datum.regionname && datum.regionname.length > 0? '<br/><b>Region Name</b>: ' + datum.regionname : '')
		+ (datum.provincename && datum.provincename.length > 0? '<br/><b>Province Name</b>: ' + datum.provincename : '')
		+ (datum.municipalityname && datum.municipalityname.length > 0? '<br/><b>Municipality Name</b>: ' + datum.municipalityname : '')
		+ (datum.barangayname && datum.barangayname.length > 0? '<br/><b>Barangay Name</b>: ' + datum.barangayname : '')
	
		// Basic Information	
		+ (datum.facilitytype || datum.medicaldirector || datum.birthingfacilityattached|| datum.headofthefacility  ? '<br/><br/><h2>Basic Information</h2>':'')
		+ (datum.facilitytype && datum.facilitytype.length > 0? '<br/><b>Type of Facility</b>: ' + datum.facilitytype : '')
		+ (datum.medicaldirector && datum.medicaldirector.length > 0? '<br/><b>Medical Director</b>: ' + datum.medicaldirector : '')
		+ (datum.headofthefacility && datum.headofthefacility.length > 0? '<br/><b>Head of the Facility</b>: ' + datum.headofthefacility : '')
		+ (datum.telephonenumber && datum.telephonenumber.length > 0? '<br/><b>Telephone Number</b>: ' + datum.telephonenumber : '')
		+ (datum.cellphonenumber && datum.cellphonenumber.length > 0? '<br/><b>Cellphone Number</b>: ' + datum.cellphonenumber : '')
		+ (datum.emailadd && datum.emailadd.length > 0? '<br/><b>Email Address</b>: ' + datum.emailadd : '')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')
		+ (datum.birthingfacilityattached && datum.birthingfacilityattached.length > 0? '<br/><b>Birthing Facility Attached</b>: ' + datum.birthingfacilityattached : '')

		// Hi-5 Impact Services
		+ (datum.nicu || datum.hivtreatmenthubs || datum.hivcounsellingandtestingcenter || datum.bloodcenter ? '<br/><br/><h2>High Impact 5 Services</h2>':'')
		+ (datum.nicu && datum.nicu.length > 0? '<br/><b>NICU Services</b>: ' + datum.nicu : '')
		+ (datum.bloodcenter && datum.bloodcenter.length > 0? '<br/><b>Blood Center Services</b>: ' + datum.bloodcenter : '')
		+ (datum.hivtreatmenthubs && datum.hivtreatmenthubs.length > 0? '<br/><b>HIV Treatment Hubs</b>: ' + datum.hivtreatmenthubs : '')
		+ (datum.hivcounsellingandtestingcenter && datum.hivcounsellingandtestingcenter.length > 0? '<br/><b>HIV Counselling and Testing Center</b>: ' + datum.hivcounsellingandtestingcenter : '')
		
		// Perinatologist
		+ (datum.peri1 ? '<br/><br/><h2>Perinatologist</h2>':'')
		+ (datum.peri1 && datum.peri1.length > 0? '<br/><b>Perinatologists</b>: <br/> ' + datum.peri1 : '')
		
		// Neonatologist
		+ (datum.neonatologist ? '<br/><br/><h2>Neonatologist</h2>':'')
		+ (datum.neonatologist && datum.neonatologist.length > 0? '<br/><b>Neonatologist</b>: <br/> ' + datum.neonatologist : '')
		
		// HIV Treatment Hubs
		+ (datum.hactchair ? '<br/><br/><h2>HIV Treatment Hubs</h2>':'')
		+ (datum.hactchair && datum.hactchair.length > 0? '<br/><b>HACT Chair</b>: <br/> ' + datum.hactchair : '')
		
		// HIV Counselling and Testing Centers
		+ (datum.hivcounselor ? '<br/><br/><h2>HIV Counselling and Testing Centers</h2>':'')
		+ (datum.hivcounselor && datum.hivcounselor.length > 0? '<br/><b>HIV Counselor/s</b>: <br/> ' + datum.hivcounselor : '')
		
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
