
	var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/od9',
		'description' : 'DOH Retained Hospital',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/od6',
		'description' : 'LGU Hospital',
		'keyword' : 'LGU_Hospital',
		'marker' : '2hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/ocy',
		'description' : 'Military Hospital',
		'keyword' : 'Military_Hospital',
		'marker' : '3hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/ocz',
		'description' : 'University Hospital',
		'keyword' : 'University_Hospital',
		'marker' : '4hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/oihczgz',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : '5hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 1
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/osybw1b',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '179NvlfK11Al0V5FDtKQapjyY1aNYXZgfPE79mRaGq9g/oolerhc',
		'description' : 'Private Diagnostic Clinics',
		'keyword' : 'Private_Diagnostic_Clinics',
		'marker' : 'd2.png',
		'hideLayer' : true,
		size:12
	}
	
];
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
		+ (datum.facilitytype || datum.medicaldirector || datum.headofthefacility || datum.bnb || datum.bemonc || datum.birthingfattached  ? '<br/><br/><h2>Basic Information</h2>':'')
		+ (datum.facilitytype && datum.facilitytype.length > 0? '<br/><b>Type of Facility</b>: ' + datum.facilitytype : '')
		+ (datum.medicaldirector && datum.medicaldirector.length > 0? '<br/><b>Medical Director</b>: ' + datum.medicaldirector : '')
		+ (datum.headofthefacility && datum.headofthefacility.length > 0? '<br/><b>Head of the Facility</b>: ' + datum.headofthefacility : '')
		+ (datum.telephonenumber && datum.telephonenumber.length > 0? '<br/><b>Telephone Number</b>: ' + datum.telephonenumber : '')
		+ (datum.cellphonenumber && datum.cellphonenumber.length > 0? '<br/><b>Cellphone Number</b>: ' + datum.cellphonenumber : '')
		+ (datum.emailadd && datum.emailadd.length > 0? '<br/><b>Email Address</b>: ' + datum.emailadd : '')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')


		// Hi-5 Impact Services
		+ (datum.nicu || datum.hivtreatmenthubs ? '<br/><br/><h2>Hi-5 Impact Services</h2>':'')
		+ (datum.nicu && datum.nicu.length > 0? '<br/><b>NICU Services</b>: ' + datum.nicu : '')
		+ (datum.hivtreatmenthubs && datum.hivtreatmenthubs.length > 0? '<br/><b>HIV Treatment Hubs</b>: ' + datum.hivtreatmenthubs : '')
		+ (datum.hivcounsellingandtestingcenter && datum.hivcounsellingandtestingcenter.length > 0? '<br/><b>HIV Counselling and Testing Center</b>: ' + datum.hivcounsellingandtestingcenter : '')
		
		// Perinatologists
		+ (datum.peri1 ? '<br/><br/><h2>Perinatologists</h2>':'')
		+ (datum.peri1 && datum.peri1.length > 0? '<br/><b>Perinatologists</b>: <br/> ' + datum.peri1 : '')
		
		// Neonatologist
		+ (datum.neonatologist ? '<br/><br/><h2>Neonatologist</h2>':'')
		+ (datum.neonatologist && datum.neonatologist.length > 0? '<br/><b>Neonatologist</b>: <br/> ' + datum.neonatologist : '')
		
		// HIV Treatment Hubs
		+ (datum.hactchair ? '<br/><br/><h2>HIV Treatment Hubs</h2>':'')
		+ (datum.hactchair && datum.hactchair.length > 0? '<br/><b>HACT Chair</b>: <br/> ' + datum.hactchair : '')
		
		// HIV Counselling and Testing Centers
		+ (datum.hivcounselor ? '<br/><br/><h2>HIV Treatment Hubs</h2>':'')
		+ (datum.hivcounselor && datum.hivcounselor.length > 0? '<br/><b>HIV Counselor/s</b>: <br/> ' + datum.hivcounselor : '')
		
		// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
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
	},
	'bloodcenters' : {
		
		'is_indicator' : true,
		'description' : 'Blood Centers',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has Blood Centers'
			+'</br><img src="5p.png"> No Data'
	},		
	'bloodbanks' : {
		
		'is_indicator' : true,
		'description' : 'Blood Banks',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has Blood Banks'
			+'</br><img src="5p.png"> No Data'
	},	
	'bloodcollectingunits' : {
		
		'is_indicator' : true,
		'description' : 'Blood Collecting Units',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has Blood Collecting Units'
			+'</br><img src="5p.png"> No Data'
	},			
	'hivtreatmenthubs' : {
		
		'is_indicator' : true,
		'description' : 'HIV Treatment Hubs',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has HIV Treatment Hubs'
			+'</br><img src="5p.png"> No Data'
	},
	'hivcounsellingandtestingcenter' : {
		
		'is_indicator' : true,
		'description' : 'HIV Counselling and Testing Centers',
		'categ' : function(val) { 
			if (val.length > 0) {
				return "green.png";
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="green.png"> Has HIV Counselling and Testing Centers'
			+'</br><img src="5p.png"> No Data'
	}
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