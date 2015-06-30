
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
};
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});