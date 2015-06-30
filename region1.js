
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdGxLZTZWYWVLRU9hUEpiWHd5UkRhb1E/od6',
		'description' : 'Health Facilities',
		'keyword' : 'H',
		'marker' : 'static/hospital_.png',
		size:12,
		zIndex: 1
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
		+ (datum.pcofinfra2011 && datum.pcofinfra2011.length > 0? '<tr><th>HFEP Infrastructure 2011</th><td>Php ' + addCommas(datum.pcofinfra2011) +'</th></tr>' : '')
		+ (datum.pcofequip2011 && datum.pcofequip2011.length > 0? '<tr><th>HFEP Equipment 2011</th><td> ' + addCommas(datum.pcofequip2011) +'</th></tr>': '')
		+ (datum.pcoftotal2011 && datum.pcoftotal2011.length > 0? '<tr><th>HFEP Total 2011</th><td>' + addCommas(datum.pcoftotal2011) +'</th></tr>': '')
		+ (datum.pcofinfra2012 && datum.pcofinfra2012.length > 0? '<tr><th>HFEP Infrastructure 2012 </th><td> ' + addCommas(datum.pcofinfra2012) +'</th></tr>': '')
		+ (datum.pcofequip2012 && datum.pcofequip2012.length > 0? '<tr><th>HFEP Equipment 2012 </th><td>' + addCommas(datum.pcofequip2012) +'</th></tr>': '')
		+ (datum.pcoftotal2012 && datum.pcoftotal2012.length > 0? '<tr><th>HFEP Total 2012 </th><td> ' + addCommas(datum.pcoftotal2012) +'</th></tr>': '')
		+ (datum.description && datum.description.length > 0? '<tr><th colspan="2">Description </th></tr><td colspan="2"> ' + datum.description + '</td></tr>' : '')
	    + (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
		
}

var facility_attributes = {
	'pcofinfra2011' : {
		
		'is_indicator' : true,
		'description' : 'Infrastructure 2011',
		'categ' : function(val) { 
			
			if (parseInt(val) > 0) { return '2011.png'; } else { return '5p.png'; }
			
			},
		'details': 
			'</br><img src="2012"> Health Facilities w/ HFEP 2011'
			+'</br><img src="5p.png"> HFEP given 2012'
	},
	'pcofinfra2012' : {
		
		'is_indicator' : true,
		'description' : 'Infrastructure 2012',
		'categ' : function(val) { 
			if (parseInt(val) > 0) { return '2012.png'; } else { return '5p.png'; }
			},
		'details': 
			'</br><img src="2012.png"> Health Facilities w/ HFEP 2012'
			+'</br><img src="5p.png"> HFEP given 2011'
	},
	'pcofequip2011' : {
		
		'is_indicator' : true,
		'description' : 'Equipments 2011',
		'categ' : function(val) { 
			if (parseInt(val) > 0) { return '2011.png'; } else { return '5p.png'; }
			},
		'details': 
			'</br><img src="2011.png"> Health Facilities w/ HFEP 2011'
			+'</br><img src="5p.png"> HFEP given 2012'
	},
	'pcofequip2012' : {
		
		'is_indicator' : true,
		'description' : 'Equipments 2012',
		'categ' : function(val) { 
			if (parseInt(val) > 0) { return '2012.png'; } else { return '5p.png'; }
			},
		'details': 
			'</br><img src="2012.png"> Health Facilities w/ HFEP 2012'
			+'</br><img src="5p.png"> HFEP given 2011'
	},
	'pcoftotal2011' : {
		
		'is_indicator' : true,
		'description' : 'Total 2011',
		'categ' : function(val) { 
			if (parseInt(val) > 0) { return '2011.png'; } else { return '5p.png'; }
			},
		'details': 
			'</br><img src="2011.png"> HFEP given 2011'
			+'</br><img src="5p.png"> HFEP given 2012'
	},
	'pcoftotal2012' : {
		
		'is_indicator' : true,
		'description' : 'Total 2012',
		'categ' : function(val) { 
			if (parseInt(val) > 0) { return '2012.png'; } else { return '5p.png'; }
			},
		'details': 
			'</br><img src="2012.png"> HFEP Given 2012'
			+'</br><img src="5p.png"> HFEP Given 2011'
	
	},
	'classification' : {
		
		'is_indicator' : true,
		'description' : 'Classification',
		'categ' : function(val) { 
			var vals = {
				'BHS' : '1BHS.png',
				'Hospital' : '4HOSP.png',
				'RHU' : '2RHU.png',
				'DOH' : 'doh2.png',
				
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			 '</br><img src="1BHS.png"> BHS'
			+'</br><img src="2RHU.png"> RHU'
			+'</br><img src="4HOSP.png"> Hospital'
			+'</br><img src="doh2.png"> Department of Health'
			
	
	}
	}
var services = {
}