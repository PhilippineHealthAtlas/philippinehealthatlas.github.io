
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
	},
	
	{
		'key' : '1-zJW3eGcYdq0LOSYJMp-zrLcG_osg3nnp2SJ2M12RHM/od4',
		'description' : 'Provincial Profile 2011',
		'keyword' : 'Province 2011',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1-zJW3eGcYdq0LOSYJMp-zrLcG_osg3nnp2SJ2M12RHM/od5',
		'description' : 'Provincial Profile 2012',
		'keyword' : 'Province 2012',
		'hideLayer' : true,
		size:12
	},
	
];

var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList : false,
    minZoom: 5
};

var attributes = {

	'population' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			val = parseInt(val.replace(/,/g,''));
			console.log(val);
			return ( val > 1500001 ? 'red' : val > 700001 ? 'orange' : val > 450001 ? 'yellow' : (val < 200000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Population',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 2,000 - 200,000'
			+'</br><span style="color:green;background-color:green">__</span> 200,001 - 450,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 450,001 - 700,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 700,001 - 1,500,000'
			+'</br><span style="color:red;background-color:red">__</span> 1,500,001 - 12,500,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	
	},
	'phicenrollees' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			val = parseInt(val.replace(/,/g,''));
			return ( val > 1000001 ? 'blue' : val > 600001 ? 'orange' : val > 350001 ? 'yellow' : (val < 100000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : '<acronym title="Philippine Health Insurance Corporation">PHIC</acronym> Enrollees',
		'details': 
			'</br><span style="color:blue;background-color:red">__</span> 2,000 - 100,000'
			+'</br><span style="color:green;background-color:green">__</span> 100,001 - 350,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 350,001 - 600,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 600,001 - 1,000,000'
			+'</br><span style="color:red;background-color:blue">__</span> 1,000,001 - 1,500,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	
	},
	'nhts' : {
		
		'is_indicator' : false,
		'description' : '<acronym title="National Household Targeting System">NHTS</acronym> Households'
	},
	'percenthhenrolledincct' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			//val = parseInt(val.replace(/,/g,''));
			return ( val > 66 ? 'blue' : val > 51 ? 'green' : val > 36 ? 'yellow' : (val < 15 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% <acronym title="Households">HH</acronym> Enrolled in <acronym title="Conditional Cash Transfer">CCT</acronym> ',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 66-100%'
			+'</br><span style="color:green;background-color:green">__</span> 51-65%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36-50%'
			+'</br><span style="color:orange;background-color:orange">__</span> 16-35'
			+'</br><span style="color:red;background-color:red">__</span> 0-15%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'birthhwrate' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 71 ? 'green' : val > 61 ? 'yellow' : (val < 50 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Births Attended by Health Professionals',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 71-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 61-70%'
			+'</br><span style="color:orange;background-color:orange">__</span> 51-60%'
			+'</br><span style="color:red;background-color:red">__</span> 3-50%'	
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'birthhwtotal' : {
		
		'is_indicator' : false,
		'description' : 'Total Births Attended by Health Professionals'
	},
	'fullyimmunizedchildren' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 91 ? 'blue' : val > 81 ? 'green' : val > 71 ? 'yellow' : (val < 60 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Fully Immunized Children',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 91-100%'
			+'</br><span style="color:green;background-color:green">__</span> 81-90%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 71-80%'
			+'</br><span style="color:orange;background-color:orange">__</span> 61-70%'
			+'</br><span style="color:red;background-color:red">__</span> 40-60%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'accesswatertotal' : {
		
		'is_indicator' : false,
		'description' : 'Total HH w/ Access to Piped Water'
	},
	'accesswater' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 20 ? (val == 0 ? 'gray' : 'red') : 'orange'));  
			},
		'description' : '% <acronym title="Households">HH</acronym>s w/ Access to Piped Water',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:red;background-color:red">__</span> 3-20%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'sanitarytoilettotal' : {
		
		'is_indicator' : false,
		'description' : 'Total HH w/ Sanitary Toilet'
	},
	'sanitarytoilet' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 20 ? (val == 0 ? 'gray' : 'red') : 'orange'));  
			},
		'description' : '% <acronym title="Households">HH</acronym>s w/ Sanitary Toilet',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:red;background-color:red">__</span> 3-20%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'totallivebirths' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 30001 ? 'blue' : val > 20001 ? 'green' : val > 10001 ? 'yellow' : (val < 5000 ? (val == 0 ? 'gray' : 'red') : 'green')); 
			},
		'description' : 'Total Live Births',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 743 - 5,000'
			+'</br><span style="color:green;background-color:green">__</span> 5,001 - 10,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 10,001 - 20,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 20,001 - 30,000'
			+'</br><span style="color:blue;background-color:blue">__</span> 30,001 - 66,360'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
			
	},
	'infantdeaths' : {
		
		'is_indicator' : false,
		'description' : 'Total Infant Death'
	},
	'idrate' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 21 ? 'red' : val > 16 ? 'green' : val > 11 ? 'yellow' : (val < 5 ? (val == 0 ? 'gray' : 'blue') : 'orange'));  
			},
		'description' : 'Infant Death Rate',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 21-100%'
			+'</br><span style="color:green;background-color:green">__</span> 16-20%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 11-15%'
			+'</br><span style="color:orange;background-color:orange">__</span> 6-10%'
			+'</br><span style="color:blue;background-color:blue">__</span> 1-5%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	
},
	'maternaldeaths' : {
		
		'is_indicator' : false,
		'description' : 'Total Maternal Death'
	},
	
	/*'mdrate2010' : {
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'red' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 20 ? (val == 0 ? 'gray' : 'blue') : 'orange'));  
			},
		'description' : 'Maternal Death Rate (2010)',
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:blue;background-color:blue">__</span> 3-20%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},*/
	'hfep' : {
		is_group : true,
		is_indicator: false, 
		description : '<acronym title="Health Facilities Enhancement Program">HFEP</acronym> 2011 Budget: '
	},
	'hfeptotalinfra' : {
		'is_indicator' : false,
		'description' : 'Infrastructure (in million Php)'
	},
	'hfeptotalequip' : {
		
		'is_indicator' : false,
		'description' : 'Equipment (in million Php)'
	},
	'hfeptotal' : {
		
		'is_indicator' : true,
		'description' :  '<acronym title="Health Facilities Enhancement Program">HFEP</acronym> (in million Php)',
		'categ' : function(val) { 
			val = parseInt(val.replace(/,/g,''));
			return ( val > 95 ? 'blue' : val > 63 ? 'green' : val > 35 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 3.35 - 21'
			+'</br><span style="color:orange;background-color:orange">__</span> 22 - 35'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36 - 63'
			+'</br><span style="color:green;background-color:green">__</span> 63 - 95'
			+'</br><span style="color:blue;background-color:blue">__</span> 96 - 266'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},
	'nogovthosp' : {
		'is_indicator' : false,
		'description' : 'No. of Government Hospitals'
	},
	'norhu' : {
		'is_indicator' : false,
		'description' : 'No. of <acronym title="Rural Health Unit">RHU</acronym>'
	},
	'nobhs' : {
		'is_indicator' : false,
		'description' : 'No. of <acronym title="Barangay Health Station">BHS</acronym>'
	},
	'noprivatehosp' : {
		'is_indicator' : false,
		'description' : 'No. of Private Hospitals'
	},
	'nummd' : {
		'is_indicator' : false,
		'description' : 'No. of Medical Doctors'
	},
	'numrn' : {
		'is_indicator' : false,
		'description' : 'No. of Registered Nurses'
	},
	'nummv' : {
		'is_indicator' : false,
		'description' : 'No. of Registered Midwives'
	},
	'numdmd' : {
		'is_indicator' : false,
		'description' : 'No. of Dentist'
	},
	'numnut' : {
		'is_indicator' : false,
		'description' : 'No. of Nutritionist'
	},
	'numphar' : {
		'is_indicator' : false,
		'description' : 'No. of Pharmacist'
	},
	'rnheals1' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Registered Nurses for Health Enhancement and Local Service">RNheals</acronym> Batch 1',
		'categ' : function(val) { 
			return ( val > 320 ? 'blue' : val > 240 ? 'green' : val > 160 ? 'yellow' : (val < 80 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 79'
			+'</br><span style="color:orange;background-color:orange">__</span> 80 - 160'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 161 - 240'
			+'</br><span style="color:green;background-color:green">__</span> 241 - 320'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 320'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'

	},
	'rnheals2' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Registered Nurses for Health Enhancement and Local Service">RNheals</acronym> Batch 2',
		'categ' : function(val) { 
			return ( val > 320 ? 'blue' : val > 240 ? 'green' : val > 160 ? 'yellow' : (val < 80 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 79'
			+'</br><span style="color:orange;background-color:orange">__</span> 80 - 160'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 161 - 240'
			+'</br><span style="color:green;background-color:green">__</span> 241 - 320'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 320'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'

	},
	'rnheals3' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Registered Nurses for Health Enhancement and Local Service">RNheals</acronym> Batch 3',
		'categ' : function(val) { 
			return ( val > 320 ? 'blue' : val > 240 ? 'green' : val > 160 ? 'yellow' : (val < 80 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 79'
			+'</br><span style="color:orange;background-color:orange">__</span> 80 - 160'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 161 - 240'
			+'</br><span style="color:green;background-color:green">__</span> 241 - 320'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 320'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
			
	},
	'rnheals4' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Registered Nurses for Health Enhancement and Local Service">RNheals</acronym> Batch 4 (2013)',
		'categ' : function(val) { 
			return ( val > 320 ? 'blue' : val > 240 ? 'green' : val > 160 ? 'yellow' : (val < 80 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 79'
			+'</br><span style="color:orange;background-color:orange">__</span> 80 - 160'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 161 - 240'
			+'</br><span style="color:green;background-color:green">__</span> 241 - 320'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 320'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},
	'ndp5' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Nurse Deployment Program">NDP</acronym> Batch 5 (2014)',
		'categ' : function(val) { 
			return ( val > 320 ? 'blue' : val > 240 ? 'green' : val > 160 ? 'yellow' : (val < 80 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 79'
			+'</br><span style="color:orange;background-color:orange">__</span> 80 - 160'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 161 - 240'
			+'</br><span style="color:green;background-color:green">__</span> 241 - 320'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 320'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'	
			
	},
	'dttb28' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Doctors to the Barrios">DTTB</acronym> - Batch 28',
		'categ' : function(val) { 
			return ( val > 8 ? 'blue' : val > 6 ? 'green' : val > 4 ? 'yellow' : (val < 3 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 2'
			+'</br><span style="color:orange;background-color:orange">__</span> 3 - 4'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 5 - 6'
			+'</br><span style="color:green;background-color:green">__</span> 7 - 8'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 9'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},
	'dttb29' : {
		
		'is_indicator' : true,
		'description' : '<acronym title="Doctors to the Barrios">DTTB</acronym> - Batch 29',
		'categ' : function(val) { 
			return ( val > 8 ? 'blue' : val > 6 ? 'green' : val > 4 ? 'yellow' : (val < 3 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 1 - 2'
			+'</br><span style="color:orange;background-color:orange">__</span> 3 - 4'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 5 - 6'
			+'</br><span style="color:green;background-color:green">__</span> 7 - 8'
			+'</br><span style="color:blue;background-color:blue">__</span> &gt; 9'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
		}
	
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
		+ (datum.ophours && datum.ophours.length > 0? '<br/><b>Operational Hours</b>: ' + datum.ophours : '')
		+ (datum.catchmentpopulation && datum.catchmentpopulation.length > 0? '<br/><b>Catchment Population</b>: ' + datum.catchmentpopulation : '')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')
		+ (datum.bnb && datum.bnb.length > 0? '<br/><b>Botika ng Barangay nearby</b>: ' + datum.bnb :'')
		+ (datum.bemonc && datum.bemonc.length > 0? '<br/><b>BEmONC Facility</b>: ' + datum.bemonc : '')
		+ (datum.birthingfattached && datum.birthingfattached.length > 0? '<br/><b>Attached Birthing Facility</b>: ' + datum.birthingfattached : '')
		
		// Referral Hospital
		+ (datum.referralgovthosp || datum.referralprihosp? '<br/><br/><h2>Referral Hospital</h2>':'')
		+ (datum.referralgovthosp && datum.referralgovthosp.length > 0? '<br/><b>Government Hospital</b>: ' + datum.referralgovthosp : '')
		+ (datum.referralprihosp && datum.referralprihosp.length > 0? '<br/><b>Private Hospital</b>: ' + datum.referralprihosp : '')
		
		
		// HFEP Allocation
		+ (datum.pcofequip2011 || datum.pcofequip2012 || datum.pcofinfra2011 || datum.pcofinfra2012 || datum.pcofinfra2013 || datum.pcofequip2013 ? '<br/><br/><h2>HFEP Allocation</h2>':'')
		+ (datum.pcofinfra2013 && datum.pcofinfra2013.length > 0? '<br/><b>HFEP Infrastracture 2013</b>: ' + datum.pcofinfra2013 : '')
		+ (datum.pcofequip2013 && datum.pcofequip2013.length > 0? '<br/><b>HFEP Equipment 2013</b>: ' + datum.pcofequip2013 : '')
		+ (datum.pcoftotal2013 && datum.pcoftotal2013.length > 0? '<br/><b>HFEP Total 2013</b>: ' + datum.pcoftotal2013 : '')
		+ (datum.description2013 && datum.description2013.length > 0? '<br/><b>Description 2013</b>: ' + datum.description2013 : '')
		+ (datum.pcofinfra2012 && datum.pcofinfra2012.length > 0? '<br/><b>HFEP Infrastracture 2012</b>: ' + datum.pcofinfra2012 : '')
		+ (datum.pcofequip2012 && datum.pcofequip2012.length > 0? '<br/><b>HFEP Equipment 2012</b>: ' + datum.pcofequip2012 : '')
		+ (datum.pcoftotal2012 && datum.pcoftotal2012.length > 0? '<br/><b>HFEP Total 2012</b>: ' + datum.pcoftotal2012 : '')
		+ (datum.description2012 && datum.description2012.length > 0? '<br/><b>Description 2012</b>: ' + datum.description2012 : '')
		+ (datum.pcofinfra2011 && datum.pcofinfra2011.length > 0? '<br/><b>HFEP Infrastracture 2011</b>: ' + datum.pcofinfra2011 : '')
		+ (datum.pcofequip2011 && datum.pcofequip2011.length > 0? '<br/><b>HFEP Equipment 2011</b>: ' + datum.pcofequip2011 : '')
		+ (datum.pcoftotal2011 && datum.pcoftotal2011.length > 0? '<br/><b>HFEP Total 2011</b>: ' + datum.pcoftotal2011 : '')
		+ (datum.description2011 && datum.description2011.length > 0? '<br/><b>Description 2011</b>: ' + datum.description2011 : '')
		
		
		// DOH Hospital Budget 
		+ (datum.totalbudget2013 ? '<br/><br/><h2>DOH Hospital Budget</h2>':'')
		+ (datum.totalbudget2013 && datum.totalbudget2013.length > 0? '<br/><b>Total Budget 2013</b>: ' + datum.totalbudget2013 : '')
		+ (datum.totalbudget2012 && datum.totalbudget2012.length > 0? '<br/><b>Total Budget 2012</b>: ' + datum.totalbudget2012 : '')
		+ (datum.totalbudget2011 && datum.totalbudget2011.length > 0? '<br/><b>Total Budget 2011</b>: ' + datum.totalbudget2011 : '')
		+ (datum.totalbudget2010 && datum.totalbudget2010.length > 0? '<br/><b>Total Budget 2010</b>: ' + datum.totalbudget2010 : '')
		
		// Medical Services Offered
		+ (datum.generalpediatrics || datum.obgynebreastfeeding || datum.obgynecesareansection || datum.obgynenormaldelivery || datum.generalmedicine ? '<br/><br/><h2>Medical Services Offered</h2>':'')
		+ (datum.generalmedicine && datum.generalmedicine.length > 0? '<br/><b>General Medicine</b>: ' + datum.generalmedicine : '')
		+ (datum.generalpediatrics && datum.generalpediatrics.length > 0? '<br/><b>General Pediatrics</b>: ' + datum.generalpediatrics : '')
		+ (datum.obgynenormaldelivery && datum.obgynenormaldelivery.length > 0? '<br/><b>OB-Gyne Normal Delivery</b>: ' + datum.obgynenormaldelivery : '')
		+ (datum.obgynecesareansection && datum.obgynecesareansection.length > 0? '<br/><b>OB-Gyne Cesarean Section</b>: ' + datum.obgynecesareansection : '')
		+ (datum.obgynebreastfeeding && datum.obgynebreastfeeding.length > 0? '<br/><b>OB-Gyne Breastfeeding</b>: ' + datum.obgynebreastfeeding : '')
		
		
		// Ancillary Services Offered
		+ (datum.servicecapability  || datum.ctscanservices || datum.xraycapability || datum.mriservices || datum.ultrasoundservices || datum.laboratory ? '<br/><br/><h2>Ancillary Services Offered</h2>':'')	
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<br/><b>X-ray Capability</b>: ' + datum.xraycapability : '')
		+ (datum.ctscanservices && datum.ctscanservices.length > 0? '<br/><b>CT Scan Services</b>: ' + datum.ctscanservices : '')
		+ (datum.mriservices && datum.mriservices.length > 0? '<br/><b>MRI Services</b>: ' + datum.mriservices : '')
		+ (datum.ultrasoundservices && datum.ultrasoundservices.length > 0? '<br/><b>Ultrasound Services</b>: ' + datum.ultrasoundservices : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<br/><b>Laboratory Services</b>: ' + datum.laboratory : '')
		
		
		// PhilHealth Out-Patient Packages
		+ (datum.phictbdots ? '<br/><br/><h2>PhilHealth Out-Patient Packages</h2>':'')
		+ (datum.phictbdots && datum.phictbdots.length > 0? '<br/><b>TB DOTS</b>: ' + datum.phictbdots : '')
		+ (datum.phicmcp && datum.phicmcp.length > 0? '<br/><b>Maternal & Child Package</b>: ' + datum.phicmcp : '')	
		+ (datum.phicmalaria && datum.phicmalaria.length > 0? '<br/><b>Malaria</b>: ' + datum.phicmalaria : '')
		+ (datum.phicothers && datum.phicothers.length > 0? '<br/><b>Other Services</b>: ' + datum.phicothers : '')
		
		// Surgical Services Offered
		+ (datum.surgicalservices ? '<br/><br/><h2> Surgical Services Offered</h2>':'')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<br/><b>Surgical Services</b>: ' + datum.surgicalservices : '')
		+ (datum.generalsurgery && datum.generalsurgery.length > 0? '<br/><b>General Surgery</b>: ' + datum.generalsurgery : '')
		+ (datum.plastic && datum.plastic.length > 0? '<br/><b>Plastic Surgery</b>: ' + datum.plastic : '')
		+ (datum.microsurgery && datum.microsurgery.length > 0? '<br/><b>Micro-Surgery</b>: ' + datum.microsurgery : '')
		+ (datum.neuro && datum.neuro.length > 0? '<br/><b>Neuro-Surgery</b>: ' + datum.neuro : '')
		+ (datum.thoracardio && datum.thoracardio.length > 0? '<br/><b>Thoracic & Cardio Surgery</b>: ' + datum.thoracardio : '')
		+ (datum.laparoscopy && datum.laparoscopy.length > 0? '<br/><b>Laparoscopy Surgery</b>: ' + datum.laparoscopy : '')
		+ (datum.urologic && datum.urologic.length > 0? '<br/><b>Urologic Surgery</b>: ' + datum.urologic : '')
		+ (datum.colorectal && datum.colorectal.length > 0? '<br/><b>Colorectal Surgery</b>: ' + datum.colorectal : '')
		+ (datum.other && datum.other.length > 0? '<br/><b>Other Surgery</b>: ' + datum.other : '')
		
		// Equipment Available
		+ (datum.ambulance || datum.autoclave || datum.hemocytometercb || datum.refrigeratorforvaccines || datum.ms || datum.bpmadult || datum.bpmpedia || datum.stethoscope || datum.aweighingscale ? '<br/><br/><h2>Equipment Available</h2>':'')
		+ (datum.ambulance && datum.ambulance.length > 0? '<br/><b>Ambulance Availability</b>:' + datum.ambulance : '')
		+ (datum.autoclave && datum.autoclave.length > 0? '<br/><b>Autoclave</b>:' + datum.autoclave : '')
		+ (datum.hemocytometercbc && datum.hemocytometercbc.length > 0? '<br/><b>Hemocytometer (CBC)</b>:' + datum.hemocytometercbc : '')
		+ (datum.refrigeratorforvaccines && datum.refrigeratorforvaccines.length > 0? '<br/><b>Refrigerator for Vaccines</b>:' + datum.refrigeratorforvaccines : '')
		+ (datum.ms && datum.ms.length > 0? '<br/><b>Microscope</b>:' + datum.ms : '')
		+ (datum.bpmadult && datum.bpmadult.length > 0? '<br/><b>BP Machine (Adult)</b>:' + datum.bpmadult : '')
		+ (datum.bpmpedia && datum.bpmpedia.length > 0? '<br/><b>BP Machine (Pedia)</b>:' + datum.bpmpedia : '')
		+ (datum.stethoscope && datum.stethoscope.length > 0? '<br/><b>Stethoscope</b>:' + datum.stethoscope : '')
		+ (datum.aweighingscale && datum.aweighingscale.length > 0? '<br/><b>Adult Weighing Scale</b>:' + datum.aweighingscale : '')
		+ (datum.icweighingscale && datum.icweighingscale.length > 0? '<br/><b>Infant/Child Weighing Scale</b>:' + datum.icweighingscale : '')
		+ (datum.nebulizer && datum.nebulizer.length > 0? '<br/><b>Nebulizer</b>:' + datum.nebulizer : '')
		+ (datum.pus && datum.pus.length > 0? '<br/><b>Portable Ultrasound</b>:' + datum.pus : '')
		+ (datum.ot && datum.ot.length > 0? '<br/><b>Oxygen Tank</b>:' + datum.ot : '')
		+ (datum.de && datum.de.length > 0? '<br/><b>Dental Equipment</b>:' + datum.de : '')
		+ (datum.oe && datum.oe.length > 0? '<br/><b>Otoscope & Other EENT Equipment</b>:' + datum.oe : '')
		+ (datum.da && datum.da.length > 0? '<br/><b>Doppler Apparatus</b>:' + datum.da : '')
		+ (datum.ecg && datum.ecg.length > 0? '<br/><b>ECG</b>:' + datum.ecg : '')
		//+ (datum.diagnosticlabservices && datum.diagnosticlabservices.length > 0? '<br/><b>Diagnostic Laboratory Services</b>: ' + datum.diagnosticlabservices : '')
		
		// Human Resources
		+ (datum.md2013 || datum.dmd2013 || datum.rmw2013 || datum.bhws || datum.rnheals || datum.bns  || datum.si ? '<br/><br/><h2>Human Resource Complement<br/></h2>':'')
		+ '<table>'
		+ (datum.md2013 && datum.md2013.length > 0? '<tr><th>No. of Medical Doctor</th><td>' + datum.md2013 + '</th></tr>' : '')
		+ (datum.dmd2013 && datum.dmd2013.length > 0? '<tr><th>No. of Medical Dentist</th><td>' + datum.dmd2013 + '</th></tr>' : '')
		+ (datum.rmw2013 && datum.rmw2013.length > 0? '<tr><th>No. of Registered Midwives</th><td>' + datum.rmw2013 + '</th></tr>' : '')
		+ (datum.rn2013 && datum.rn2013.length > 0? '<tr><th>No. of Registered Nurses</th><td>' + datum.rn2013	: '')
		+ (datum.medtech2013 && datum.medtech2013.length > 0? '<tr><th>No. of Medical Technologist</th><td>' + datum.medtech2013 + '</th></tr>' : '')
		+ (datum.nut2013 && datum.nut2013.length > 0? '<tr><th>No. of Nutritionist</th><td>' + datum.nut2013 + '</th></tr>' : '')
		+ (datum.phar2013 && datum.phar2013.length > 0? '<tr><th>No. of Pharmacist</th><td>' + datum.phar2013 + '</th></tr>' : '')
		+ (datum.ot2013 && datum.ot2013.length > 0? '<tr><th>No. of Occupational Therapist</th><td>' + datum.ot2013 + '</th></tr>' : '')
		+ (datum.pt2013 && datum.pt2013.length > 0? '<tr><th>No. of Physical Therapist</th><td>' + datum.pt2013 + '</th></tr>' : '')
		/*+ (datum.rt2013 && datum.rt2013.length > 0? '<tr><th>No. of Radio Technician</th><td>' + datum.rt2013 + '</th></tr>' : '')
		+ (datum.xt2013 && datum.xt2013.length > 0? '<tr><th>No. of X-ray Technician</th><td>' + datum.xt2013 + '</th></tr>' : '')*/
	    + (datum.rnheals && datum.rnheals.length > 0? '<tr><th>No. of RNHeals</th><td>' + datum.rnheals + '</th></tr>' : '')
		+ (datum.si && datum.si.length > 0? '<tr><th>No. of Sanitary Inspector</th><td>' + datum.si + '</th></tr>' : '')
		+ (datum.bhws && datum.bhws.length > 0? '<tr><th>No. of Barangay Health Workers</th><td>' + datum.bhws + '</th></tr>' : '')
		+ (datum.bns && datum.bns.length > 0? '<tr><th>No. of Barangay Nutrition Scholar</th><td>' + datum.bns + '</th></tr>' : '')
		+ '</table>'
		
		// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
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
			return val > 200 ? 'p4.png' : val > 80 ? '3point.png' : val > 30 ? '2point.png' : val < 31 ? '1point.png' :'5p.png';
			},
		'details': 
			'</br><img src="1point.png"> 1-30'
			+'</br><img src="2point.png"> 31-80'
			+'</br><img src="3point.png"> 81-200'
			+'</br><img src="p4.png"> more than 200'
			+'</br><img src="5p.png"> No Data'
	
	}
};

var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});