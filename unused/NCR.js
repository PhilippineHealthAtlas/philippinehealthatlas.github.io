
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od6',
		'description' : 'Government Hospitals',
		'keyword' : 'Government_Hospitals',
		'marker' : 'government.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od7',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : 'private.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/oda',
		'description' : 'Lying-in Clinic',
		'keyword' : 'lic',
		'marker' : 'L.jpg',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od5',
		'description' : 'Lying-in Clinic & Health Center',
		'keyword' : 'lic_hc',
		'marker' : 'LH.jpg',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od4',
		'description' : 'Rural Health Unit',
		'keyword' : 'rhu',
		'marker' : 'rhu.png',
		size:12,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od8',
		'description' : 'Barangay Health Station',
		'keyword' : 'bhs',
		'marker' : 'bhs.png',
		size:12,
		zIndex: 1
	},/*
	{
		'key' : '0Ahdqio3d31tKdDh0VFkzUEk5YmF2emxPbEVxZVJlcVE/od6',
		'description' : 'Clinical Laboratory',
		'keyword' : 'Clinical_Laboratory',
		'marker' : 'cLabs.png',
		size:12,
		zIndex: 1
	},*/
	{
		'key' : '0Aq7eQ20tUwmTdFJwUWpDako1WS1LRU10ZDE4YlZIbmc/od9',
		'description' : 'Social Hygiene Clinic',
		'keyword' : 'Social_Hygiene_Clinic',
		'marker' : 'shc.png',
		size:12,
		zIndex: 1
	}
];

var polygon_spreadsheets = [
{
'key' : '0Ahdqio3d31tKdDh0VFkzUEk5YmF2emxPbEVxZVJlcVE/od7',
		description : 'Municipalities',
		'keyword' : 'City',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
		}
];


var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList : true,
    minZoom: 1,
	initzoom: 6
};

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
		
		// Services Offered
		+ (datum.facilitytype || datum.servicecapability? '<br/><br/><h2>Services Offered</h2>':'')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<br/><b>Surgical Services</b>: ' + datum.surgicalservices : '')
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<br/><b>X-ray Capability</b>: ' + datum.xraycapability : '')
		+ (datum.ctscanservices && datum.ctscanservices.length > 0? '<br/><b>CT Scan Services</b>: ' + datum.ctscanservices : '')
		+ (datum.mriservices && datum.mriservices.length > 0? '<br/><b>MRI Services</b>: ' + datum.mriservices : '')
		+ (datum.ultrasoundservices && datum.ultrasoundservices.length > 0? '<br/><b>Ultrasound Services</b>: ' + datum.ultrasoundservices : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<br/><b>Laboratory Services</b>: ' + datum.laboratory : '')
		
		// Equipment Available
		+ (datum.facilitytype || datum.servicecapability? '<br/><br/><h2>Equipment Available</h2>':'')
		+ (datum.ambulance && datum.ambulance.length > 0? '<tr><th>Ambulance availability</th><td>' + datum.md + '</th></tr>' : '')
		//+ (datum.diagnosticlabservices && datum.diagnosticlabservices.length > 0? '<br/><b>Diagnostic Laboratory Services</b>: ' + datum.diagnosticlabservices : '')
		
		// Human Resources
		+ (datum.facilitytype || datum.servicecapability? '<br/><br/><h2>Human Resource Complement</h2>':'')
		+ '<table>'
		+ (datum.md && datum.md.length > 0? '<tr><th>No. of Medical Doctor</th><td>' + datum.md + '</th></tr>' : '')
		+ (datum.dmd && datum.dmd.length > 0? '<tr><th>No. of Medical Dentist</th><td>' + datum.dmd + '</th></tr>' : '')
		+ (datum.rmv && datum.rmv.length > 0? '<tr><th>No. of Registered Midwives</th><td>' + datum.rmv + '</th></tr>' : '')
		+ (datum.rn && datum.rn.length > 0? '<tr><th>No. of Registered Nurses</th><td>' + datum.rn	: '')
	    + (datum.rnheals && datum.rnheals.length > 0? '<tr><th>No. of RNHeals</th><td>' + datum.rnheals + '</th></tr>' : '')
		+ (datum.medtech && datum.medtech.length > 0? '<tr><th>No. of Medical Technologist</th><td>' + datum.medtech + '</th></tr>' : '')
		+ (datum.si && datum.si.length > 0? '<tr><th>No. of Sanitary Inspector</th><td>' + datum.si + '</th></tr>' : '')
		+ (datum.bhws && datum.bhws.length > 0? '<tr><th>No. of Barangay Health Workers</th><td>' + datum.bhws + '</th></tr>' : '')
		+ '</table>'
		
		// Gallery
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
		
}

var attributes = {};

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
			return val > 200 ? 'p4.png' : val > 80 ? '3point.png' : val > 30 ? '2point.png' : '1point.png';
			},
		'details': 
			'</br><img src="1point.png"> 0-30'
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

var services = {
}