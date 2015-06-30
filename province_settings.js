var spreadsheets = [
	{
		'key' : '0Ahdqio3d31tKdDdEN2prM25jUS1kN3k4bWpadWd1Znc/od6',
		'description' : 'Provinces',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];
var settings = {
}

var attributes = {

	'population' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 1500001 ? 'red' : val > 700001 ? 'orange' : val > 450001 ? 'yellow' : (val < 200000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Population (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 20,100 - 200,000'
			+'</br><span style="color:green;background-color:green">__</span> 200,001 - 450,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 450,001 - 700,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 700,001 - 1,500,000'
			+'</br><span style="color:red;background-color:red">__</span> 1,500,001 - 12,500,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'phicenrollees' : {
		'is_indicator' : false,
		'description' : 'PHIC enrollees (2010)'
	},
	'nhts' : {
		
		'is_indicator' : false,
		'description' : 'NHTS Households (2011)'
	},
	'ofhhenrolledincct' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 66 ? 'blue' : val > 51 ? 'green' : val > 36 ? 'yellow' : (val < 15 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% HH Enrolled in CCT (2011)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 66-100%'
			+'</br><span style="color:green;background-color:green">__</span> 51-65%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36-50%'
			+'</br><span style="color:orange;background-color:orange">__</span> 16-35'
			+'</br><span style="color:red;background-color:red">__</span> 0-15%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'birthhw' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 71 ? 'green' : val > 61 ? 'yellow' : (val < 50 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Births Attended by Health Professionals (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 71-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 61-70%'
			+'</br><span style="color:orange;background-color:orange">__</span> 51-60%'
			+'</br><span style="color:red;background-color:red">__</span> 3-50%'	
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'fullyimmunizedchildren' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 101 ? 'blue' : val > 91 ? 'green' : val > 81 ? 'yellow' : (val < 70 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Fully Immunized Children (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 101-130%'
			+'</br><span style="color:green;background-color:green">__</span> 91-100%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 81-90%'
			+'</br><span style="color:orange;background-color:orange">__</span> 71-80%'
			+'</br><span style="color:red;background-color:red">__</span> 40-70%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'accesswater' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 20 ? (val == 0 ? 'gray' : 'red') : 'orange'));  
			},
		'description' : '% HHs w/ Access to Piped Water (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:red;background-color:red">__</span> 3-20%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'totallivebirths2009' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 30001 ? 'red' : val > 20001 ? 'orange' : val > 10001 ? 'yellow' : (val < 5000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Total Live Births (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 743 - 5,000'
			+'</br><span style="color:green;background-color:green">__</span> 5,001 - 10,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 10,001 - 20,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 20,001 - 30,000'
			+'</br><span style="color:red;background-color:red">__</span> 30,001 - 66,360'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'hfep' : {
		is_group : true,
		is_indicator: false, 
		description : 'HFEP 2011 Budget: '
	},
	'hfeptotalinfra' : {
		'is_indicator' : false,
		'description' : '&nbsp;&nbsp;&nbsp;Infrastructure (in million Php)'
	},
	'hfeptotalequip' : {
		
		'is_indicator' : false,
		'description' : '&nbsp;&nbsp;&nbsp;Equipment (in million Php)'
	},
	'hfeptotal' : {
		
		'is_indicator' : true,
		'description' : '&nbsp;&nbsp;&nbsp;Total Cost (in million Php)',
		'categ' : function(val) { 
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
	'rnheals' : {
		
		'is_indicator' : true,
		'description' : 'RNheals Batch 1',
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
	'dttbs' : {
		
		'is_indicator' : true,
		'description' : 'DTTB - Batch 28',
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