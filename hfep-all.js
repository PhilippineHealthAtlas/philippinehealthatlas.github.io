
var spreadsheets = [
	
	{
		'key' : '0AoBD4uHCApskdC1JcjJiTmhJMXFfXy1JUzlFdXFoalE/od7',
		'description' : 'HFEP 2011',
		'keyword' : 'HFEP_2011',
		'marker' : '2011.png',
		size:15,
		zIndex: 1
	},
	{
		'key' : '0AoBD4uHCApskdC1JcjJiTmhJMXFfXy1JUzlFdXFoalE/od4',
		'description' : 'HFEP 2012',
		'keyword' : 'HFEP_2012',
		'marker' : '2012.png',
		size:15,
		zIndex: 1
	},
	{
		'key' : '0AoBD4uHCApskdC1JcjJiTmhJMXFfXy1JUzlFdXFoalE/od5',
		'description' : 'HFEP 2013',
		'keyword' : 'HFEP_2013',
		'marker' : '2013.png',
		size:15,
		zIndex: 1
	}
	
];

var settings = {
	'provname' : 'provname',
	initzoom: 6,
	showList :false
};

function commafy( num ) {
  num.toString().replace( /\B(?=(?:\d{3})+)$/g, "," );
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
		+ (datum.dohfacilitycode && datum.dohfacilitycode.length > 0? '<br/><b>DOH Health Facility Code:</b> ' + datum.dohfacilitycode + '</td></tr>' : '')
		+ (datum.facilitytype && datum.facilitytype.length > 0? '<br/><b>Faciltiy Type:</b> ' + datum.facilitytype + '</td></tr>' : '')
		+ (datum.regionname && datum.regionname.length > 0? '<br/><b>Region Name:</b> ' + datum.regionname + '</td></tr>' : '')
		+ (datum.provincename && datum.provincename.length > 0? '<br/><b>Province Name:</b> ' + datum.provincename + '</td></tr>' : '')
		+ (datum.municipalityname && datum.municipalityname.length > 0? '<br/><b>Municipality Name:</b> ' + datum.municipalityname + '</td></tr>' : '')
		+ (datum.barangayname && datum.barangayname.length > 0? '<br/><b>Barangay Name:</b> ' + datum.barangayname + '</td></tr>' : '')
		
		
		// Allotment 
		+ (datum.total2011 || datum.total2012 || datum.description || datum.total2013 ? '<br/><br/><h2>Health Facility and Enhancement Program</h2>':'')
		+ (datum.total2011 && datum.total2011.length > 0? '<tr><td colspan="2"><br/><b>Year 2011:</b></td></tr>' : '')
		+ (datum.infra2011 && datum.infra2011.length > 0? '<br/> <b>Infrastracture:</b>' + addCommas(datum.infra2011): '')
		+ (datum.equip2011 && datum.equip2011.length > 0? '<br/> <b>Equipment:</b>' + addCommas(datum.equip2011): '')
		+ (datum.total2011 && datum.total2011.length > 0? '<br/> <b>Total:</b>' + addCommas(datum.total2011): '')
		+ (datum.description2011 && datum.description2011.length > 0? '<br/><b>Description:</b> ' + datum.description2011: '')
		+ (datum.total2012 && datum.total2012.length > 0? '<tr><td colspan="2"><br/><b>Year 2012:</b></td></tr>' : '')
		+ (datum.infra2012 && datum.infra2012.length > 0? '<br/> <b>Infrastracture:</b> ' + addCommas(datum.infra2012) : '')
		+ (datum.equip2012 && datum.equip2012.length > 0? '<br/> <b>Equipment:</b> ' + addCommas(datum.equip2012): '')
		+ (datum.total2012 && datum.total2012.length > 0? '<br/><b>Total:</b> ' + addCommas(datum.total2012): '')
		+ (datum.description2012 && datum.description2012.length > 0? '<br/><b>Description:</b> ' + datum.description2012: '')
		+ (datum.total2013 && datum.total2013.length > 0? '<tr><td colspan="2"><br/><b>Year 2013:</b></td></tr>' : '')
		+ (datum.infra2013 && datum.infra2013.length > 0? '<br/><b>Infrastracture:</b>' + addCommas(datum.infra2013): '')
		+ (datum.equip2013 && datum.equip2013.length > 0? '<br/><b>Equipment:</b>' + addCommas(datum.equip2013): '')
		+ (datum.total2013 && datum.total2013.length > 0? '<br/><b>Total:</b>' + addCommas(datum.total2013): '')
		+ (datum.description2013 && datum.description2013.length > 0? '<br/><b>Description:</b> ' + datum.description2013: '')
		
		// Gallery
	+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
	}	

var services = {
}

var facility_attributes = {
	'classification' : {
		
		'is_indicator' : true,
		'description' : 'Classification',
		'categ' : function(val) { 
			var vals = {
				'RHU' : 'rhu.png',
				'BHS' : 'bhs.png',
				'Hospital' : '3hospital.png',
				'Special' : '5p.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			'</br><img src="rhu.png"> RHU'
			+'</br><img src="bhs.png"> BHS'
			+'</br><img src="3hospital.png"> Hospital'
			+'</br><img src="5p.png"> Others'

	},
	'years' : {
		
		'is_indicator' : true,
		'description' : 'Year',
		'categ' : function(val) { 
			var vals = {
				'2011' : '2011.png',
				'2012' : '2012.png',
				'2013' : '2013.png'
			};
			if (vals[val]) {
				return vals[val];
			}
			else return "5p.png";
			},
		'details': 
			''
			+'</br><img src="2011.png"> 2011'
			+'</br><img src="2012.png"> 2012'
			+'</br><img src="2013.png"> 2013'

	},
}
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});