
var spreadsheets = [
	
	{
		'key' : '1S8Wlim5oOIq_eRTh2aZ8fsifkPGDlzHltSvBCn2lBmI/od6',
		'description' : 'DOH Health Libraries',
		'keyword' : 'doh',
		'marker' : 'circle_blue_black.png',
		size:12,
		zIndex: 1
	},{
		'key' : '1S8Wlim5oOIq_eRTh2aZ8fsifkPGDlzHltSvBCn2lBmI/od4',
		'description' : 'Private Hospital Libraries',
		'keyword' : 'private',
		'marker' : 'circle_lightblue_white.png',
		size:12,
		zIndex: 1
	},{
		'key' : '1S8Wlim5oOIq_eRTh2aZ8fsifkPGDlzHltSvBCn2lBmI/od7',
		'description' : 'Medical Schools',
		'keyword' : 'medschools',
		'marker' : 'circle_turquoise_white.png',
		size:16,
		zIndex: 1
	},{
		'key' : '1S8Wlim5oOIq_eRTh2aZ8fsifkPGDlzHltSvBCn2lBmI/od5',
		'description' : 'WHO Reference Libraries',
		'keyword' : 'who',
		'marker' : 'circle_mintgreen_white.png',
		size:16,
		zIndex: 2
	}
];

var polygon_spreadsheets = [
{
		'key' : '1S8Wlim5oOIq_eRTh2aZ8fsifkPGDlzHltSvBCn2lBmI/od8',
		description : 'Libraries and Resource Centers',
		'keyword' : 'Libraries',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];

var settings = {
	'provname' : 'provinces',
	showList : true
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


var attributes = {

	'numofschools' : {
	
		is_indicator : true,
		description : 'No. of Medical Schools',
		target_cutoff: 2,
		ave_cutoff: 0	,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
		
	'numofprivatehospitals' : {
	
		is_indicator : true,
		description : 'No. of Private Hospital Libraries',
		target_cutoff: 2,
		ave_cutoff: 0	,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
		
	'numofdohhospitallibraries' : {
	
		is_indicator : true,
		description : 'No. of DOH Health Libraries',
		target_cutoff: 2,
		ave_cutoff: 0	,
		categ : getCategory, formatter : commatize, details_: getDetails
	},
		
	'numofwhoreferncecenters' : {
	
		is_indicator : true,
		description : 'No. of WHO Reference Libraries',
		target_cutoff: 2,
		ave_cutoff: 0	,
		categ : getCategory, formatter : commatize, details_: getDetails
	}
}

function getDetails() {

	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1) + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 '
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
			
}


function getInfoText(datum) {
	return ''
		+'<br/><br/>'
		+ (datum.telnum ? '<br/><b>Tel #: </b>' + datum.telnum : '')
		+ (datum.contactperson && datum.contactperson.length > 0? '<br/><b>Contact Person</b>: ' + datum.contactperson : '')
		+ (datum.emailaddress && datum.emailaddress.length > 0? '<br/><b>Email Address</b>: ' + datum.emailaddress : '')
		+ (datum.website && datum.website.length > 0? '<br/><b>Website</b>: ' + datum.website : '')
		;
}

var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});