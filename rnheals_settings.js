
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdDIyOFZhWTIzeXVNZmJucG9vTVdQVGc/od7',
		'description' : 'Hospitals',
		'keyword' : 'doh',
		'marker' : 'circle_blue_black.png',
		size:12,
		zIndex: 1
	}
];

var polygon_spreadsheets = [
{
		'key' : '0Aq7eQ20tUwmTdDIyOFZhWTIzeXVNZmJucG9vTVdQVGc/od6',
		description : 'Provinces',
		'keyword' : 'Libraries',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];

var settings = {
	'provname' : 'b'
	//,showList : true
}

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

function twodecimals(val) {
	if (val < 0) return "";
	var test = (Math.round(val*100) + '');
	while (test.length < 3) 
		test = '0' + test;
	return test.replace(/(..)$/,'.$1');
}

var attributes = {
/*
	'j' : {
			
		is_indicator : true,
		description : 'No. of RNheals I Deployed ( as of July 2011) (per 10,000 people)',
		target_cutoff: 2,
		ave_cutoff: 1	,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
		
	'k' : {
	
		is_indicator : true,
		description : 'No. of RNheals II Deployed (per 10,000 people)',
		target_cutoff: 2,
		ave_cutoff: 1	,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
		
	'l' : {
	
		is_indicator : true,
		description : 'No. of   RNheals III Proposed (per 10,000 people)',
		target_cutoff: 2,
		ave_cutoff: 1	,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},*/
		
	'd' : {
	
		is_indicator : true,
		description : 'Num of RNheals I Deployed ( as of July 2011)',
		target_cutoff: 100,
		ave_cutoff: 50,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
		
	'e' : {
	
		is_indicator : true,
		description : 'Num of RNheals II Deployed',
		target_cutoff: 100,
		ave_cutoff: 50,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
		
	'f' : {
	
		is_indicator : true,
		description : 'Num of  RNheals III Proposed',
		target_cutoff: 100,
		ave_cutoff: 50,
		categ : getCategory, formatter : commatize, details_: getDetails
	}
	
}

function getDetails() {
	var xx = Math.min(this.target_cutoff, this.ave_cutoff);
	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff ) + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 ' + (xx > 0 ? ' - ' + xx : '') 
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
			
}


function getInfoText(datum) {
	return ''
		+'<br/><br/><table>' 
		+ (datum.allottednumofrnhealsii	 ? '<tr><th style="text-align:left">Allotted Num of Rnheals  II : </th><td>' + datum.allottednumofrnhealsii +'</td></tr>': '')
		+ (datum.numofnursesdeployedforrnhealsii ? '<tr><th style="text-align:left"> Num of Nurses Deployed for Rnheals II :  </th><td>' + datum.numofnursesdeployedforrnhealsii +'</td></tr>': '')
		+'</table>'
		;
}

var services = {
}