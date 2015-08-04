var spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/od9',
		'description' : 'DOH Retained Hospital',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/od6',
		'description' : 'LGU Hospital',
		'keyword' : 'LGU_Hospital',
		'marker' : '2hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/ovxrlao',
		'description' : 'Military Hospital',
		'keyword' : 'Military_Hospital',
		'marker' : '3hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/ocz',
		'description' : 'University Hospital',
		'keyword' : 'University_Hospital',
		'marker' : '4hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oihczgz',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : '5hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},	
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/o5m0y9o',
		'description' : 'Primary Care Facility',
		'keyword' : 'Primary_Care_Facility',
		'marker' : 'infir12x12.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/osybw1b',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1E18_mwBcUypyYY9K-rn4wH8R9h1BwO5OvYYz07afBc4/oz983yy',
		'description' : 'Barangay Health Station',
		'keyword' : 'Barangay_Health_Station',
		'marker' : 'bhs12x12.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oolerhc',
		'description' : 'Private Diagnostic Clinics',
		'keyword' : 'Private_Diagnostic_Clinics',
		'marker' : 'd2.png',
		'hideLayer' : true,
		size:12,
		zIndex: 4
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Service Capability</h2>'
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/o8akta9',
		'description' : 'Level 1',
		'keyword' : 'Level_1',
		'marker' : 'SC1.png',
		'hideLayer' : true,
		size:20,
		zIndex: 3
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/ok7ooag',
		'description' : 'Level 2',
		'keyword' : 'Level_2',
		'marker' : 'SC2.png',
		'hideLayer' : true,
		size:20,
		zIndex: 3
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oltwur7',
		'description' : 'Level 3',
		'keyword' : 'Level_3',
		'marker' : 'SC3.png',
		'hideLayer' : true,
		size:20,
		zIndex: 3
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Medical Specialist</h2>'
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/ot29zyh',
		'description' : 'Perinatologist',
		'keyword' : 'Perinatologist',
		'marker' : 'peri22x22.jpg',
		'hideLayer' : true,
		size:22,
		zIndex: 2
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oomqjw8',
		'description' : 'Neonatologist',
		'keyword' : 'Neonatologist',
		'marker' : 'neo22x22.jpg',
		'hideLayer' : true,
		size:22,
		zIndex: 2
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oxwat8z',
		'description' : 'NICU with Neonatologist',
		'keyword' : 'NICU_with_Neonatologist',
		'marker' : 'nicuwithneo.png',
		'hideLayer' : true,
		size:22,
		zIndex: 2
	
	},
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Services Offered</h2>'
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/oug339v',
		'description' : 'NICU',
		'keyword' : 'NICU',
		'marker' : 'nicu28x28.png',
		'hideLayer' : true,
		size:28,
		zIndex: 1
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/olo0uww',
		'description' : 'Blood Center',
		'keyword' : 'Blood_Center',
		'marker' : 'bloodcenters28x28.png',
		'hideLayer' : true,
		size:28,
		zIndex: 1
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/o28zsug',
		'description' : 'HIV Treatment Hubs',
		'keyword' : 'HIV_Treatment_Hubs',
		'marker' : 'hivtreatmenthubs28x28.png',
		'hideLayer' : true,
		size:28,
		zIndex: 1
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/ocb9dgn',
		'description' : 'HIV Counselling & Testing Centers',
		'keyword' : 'HIV_Counselling_and_Testing_Centers',
		'marker' : 'hivctc28x28.png',
		'hideLayer' : true,
		size:28,
		zIndex: 1
	}

];

var polygon_spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<h2>Health Statistics</h2>'
	},
	{
		'key' : '1ypP7jNyeda_GJNvLNmLg0bzWWRjnh410WQx2GT2S8xw/o8e396v',
		'description' : 'Cases 2010-2015',
		'keyword' : 'Cases 2010-2015',
		'hideLayer' : true,
		size:12
	},
	
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
	'provname' : 'provname',
	noInfoWindow: true,
	showList : true
};
var attributes = {

	'hivten' : {
		
		'is_indicator' : false,
		'description' : 'Cases for 2010'
	},
	'hiveleven' : {
		
		'is_indicator' : false,
		'description' : 'Cases for 2011'
	},
	'hivtwelve' : {
		
		'is_indicator' : false,
		'description' : 'Cases for 2012'
	},
	'hivthirteen' : {
		
		'is_indicator' : false,
		'description' : 'Cases for 2013'
	},
	'hivfourteen' : {
		
		'is_indicator' : false,
		'description' : 'Cases for 2014'
	},
	'hivfifteen' : {
		
		'is_indicator' : false,
		'description' : 'Cases for Jan-May 2015'
	},
	'totalhivcases' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			val = parseInt(val.replace(/,/g,''));
			console.log(val);
			return ( val > 1001 ? '#003300' : val > 501 ? '#196619' : val > 301 ? '#197F19' : (val < 100 ? (val == 0 ? '#ffffff' : '#CCFFCC') : '#66CC66')); 
			},
		'description' : 'HIV Cases Total to Date',
		'details': 
			'</br><span style="color:#CCFFCC;background-color:#CCFFCC">__</span> 1 - 100'
			+'</br><span style="color:#66CC66;background-color:#66CC66">__</span> 101 - 300'
			+'</br><span style="color:#197F19;background-color:#197F19">__</span> 301 - 500'
			+'</br><span style="color:#196619;background-color:#196619">__</span> 501 - 1000'
			+'</br><span style="color:#003300;background-color:#003300">__</span> 1001 - 4096'
			+'</br><span style="color:#ffffff;background-color:#ffffff">__</span> 0 or No Data'
	
	}
	
}


function getDetails() {

	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1) + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 '
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
			
}
var settings = {
	//'key' : '0AoBD4uHCApskdEtjMmNsVkFXdzhwcHVRNHVJdm56WEE/od6',
	'provname' : 'provname',
	'geojson_name' : 'NAME_2',
	center: [14.551826,121.040868],
	zoom:11
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

		// High Impact 5 Services
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
		+ (datum.hactteammembers && datum.hactteammembers.length > 0? '<br/><b>HACT Team Members</b>: <br/> ' + datum.hactteammembers : '')
		
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
