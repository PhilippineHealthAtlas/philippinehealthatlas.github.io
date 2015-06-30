
var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '1FnyzW9sw9zKzkwBERLvsGPz9Y82-lgbBLEj0ti5lDks/oxl58p3',
		'description' : 'NICU',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : false,
		size:12
	}
	
];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Health Statistics</h2>'
	},
	{
		'key' : '1-zJW3eGcYdq0LOSYJMp-zrLcG_osg3nnp2SJ2M12RHM/od6',
		'description' : 'Provincial Profile 2010',
		'keyword' : 'Province 2010',
		'hideLayer' : true,
		size:12
	}
	
];

var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList : false,
    minZoom: 5
};

var attributes = {
}


function getDetails() {

	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1) + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 '
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
			
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
	
		+ (datum.healthfacilitycode && datum.healthfacilitycode.length > 0? '<br/><b>Health Facility Code</b>: ' + datum.healthfacilitycode : '')
		+ (1 > 0? '<br/><b>Address</b>: '  : '')
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/>' + datum.completeaddress : '')
		+ (datum.barangayname && datum.barangayname.length > 0? '<br/>' + datum.barangayname : '')
		+ (datum.municipalityname && datum.municipalityname.length > 0? '<br/>' + datum.municipalityname : '')
		+ (datum.provincename && datum.provincename.length > 0? '<br/>' + datum.provincename : '')
		+ (datum.regionname && datum.regionname.length > 0? '<br/>' + datum.regionname : '')
	
	
	// Basic Information	
		+ '<br/><br/><h2>Basic Information</h2>'
		+ (datum.landlinenumber && datum.landlinenumber.length > 0? '<br/><b>Landline Number</b>: ' + datum.landlinenumber : '')
		
		// Perinatologist
		+ (datum.peri1 && datum.peri1.length > 0? '<br/><b>Perinatologists</b>: <br/> ' + datum.peri1 : '')
		+ (datum.neonatologist && datum.neonatologist.length > 0? '<br/><b>Neonatologist</b>: <br/> ' + datum.neonatologist : '')
		
		
		;
		
} 	

var facility_attributes = {

	'nicu' : {
		
		'is_indicator' : true,
		'description' : 'NICU',
		'categ' : function(val) { 
			var vals = {
				'YES' : 'green.png',
				'' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> NICU'
			+'</br><img src="5p.png"> No Data'
	},
	
	'peri1' : {
		
		'is_indicator' : true,
		'description' : 'Perinatologist',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has Perinatologist'
			+'</br><img src="5p.png"> No Data'
	},
	
	'neonatologist' : {
		
		'is_indicator' : true,
		'description' : 'Neonatologist',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has Neonatologist'
			+'</br><img src="5p.png"> No Data'
	}
	/*,
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
			return val > 200 ? 'p4.png' : val > 80 ? '3point.png' : val > 30 ? '2point.png' : val < 31 ? '1point.png' :'5p.png';
			},
		'details': 
			'</br><img src="1point.png"> 1-30'
			+'</br><img src="2point.png"> 31-80'
			+'</br><img src="3point.png"> 81-200'
			+'</br><img src="p4.png"> more than 200'
			+'</br><img src="5p.png"> No Data'
	
	}
	*/
};

var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
	
	var input = document.getElementById('searchTextField');
	if (input) {
		var options = {
			types: ['(regions)'
				//,'(regions)'
				]
			, componentRestrictions: {country: 'ph'}
		};

		autocomplete = new google.maps.places.Autocomplete(input, options);
		
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			input.className = '';
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				// Inform the user that the place was not found and return.
				input.className = 'notfound';
				return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
				console.log(place.geometry.viewport	);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(10);	// Why 17? Because it looks good.
			}
			
		});
	}
});