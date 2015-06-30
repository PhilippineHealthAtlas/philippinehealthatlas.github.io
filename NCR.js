
var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '0Aq7eQ20tUwmTdHJFUjh3X1ZmUHFZeHc0SExCMzlzWHc/od9',
		'description' : 'DOH Retained Hospital',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : true,
		size:12
	}
];
var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList : false,
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
	return '<table>'
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
		+ (datum.ownweship && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<br/><b>Surgical Services</b>: ' + datum.surgicalservices : '')
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<br/><b>X-ray Capability</b>: ' + datum.xraycapability : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<br/><b>Laboratory Services</b>: ' + datum.laboratory : '')
		+ (datum.bnb && datum.bnb.length > 0? '<br/><b>Botika ng Barangay nearby</b>: ' + datum.bnb : '')
		+ (datum.md && datum.md.length > 0? '<br/><b>No. of Medical Doctor</b>: ' + datum.md : '')
		+ (datum.dmd && datum.dmd.length > 0? '<br/><b>No. of Medical Dentist</b>: ' + datum.dmd : '')
		+ (datum.rmv && datum.rmv.length > 0? '<br/><b>No. of Registered Midwives</b>: ' + datum.rmv : '')
		+ (datum.rn && datum.rn.length > 0? '<br/><b>No. of Registered Nurses</b>: ' + datum.rn	: '')
	    + (datum.rnheals && datum.rnheals.length > 0? '<br/><b>No. of RNHeals</b>: ' + datum.rnheals : '')
		+ (datum.medtech && datum.medtech.length > 0? '<br/><b>No. of Medical Technologist</b>: ' + datum.medtech : '')
		+ (datum.si && datum.si.length > 0? '<br/><b>No. of Sanitary Inspector</b>: ' + datum.si : '')
		+ (datum.bhws && datum.bhws.length > 0? '<br/><b>No. of Barangay Health Workers</b>: ' + datum.bhws : '')
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