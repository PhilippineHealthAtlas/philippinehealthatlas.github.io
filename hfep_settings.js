
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdGR2bGtJTFc4YVptZExGbEJLRnlZRXc/od4',
		'description' : 'HFEP 2010 (Hospital)',
		'keyword' : 'HFEP_2010',
		'marker' : '2010.png',
		size:15,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdGR2bGtJTFc4YVptZExGbEJLRnlZRXc/od6',
		'description' : 'HFEP 2011 (Hospital)',
		'keyword' : 'HFEP_2011',
		'marker' : '2011.png',
		size:15,
		zIndex: 1
	},
	{
		'key' : '0Aq7eQ20tUwmTdGR2bGtJTFc4YVptZExGbEJLRnlZRXc/od7',
		'description' : 'HFEP 2012 (Hospital)',
		'keyword' : 'HFEP_2012',
		'marker' : '2012.png',
		size:15,
		zIndex: 1
	}
	
];

var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	showList :true,
    minZoom: 5
};

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
function getInfoText(datum) {
	return ''
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/><b>Complete Address:</b> ' + datum.completeaddress + '</td></tr>' : '')
		+ (datum.mooe2010 && datum.mooe2010.length > 0? '<br/><b>MOOE 2010:</b> ' + addCommas(datum.mooe2010) + '</td></tr>' : '')
		+ (datum.infra2010 && datum.infra2010.length > 0? '<br/><b>Infrastracture 2010:</b> ' + addCommas(datum.infra2010) + '</td></tr>' : '')
		+ (datum.equip2010 && datum.equip2010.length > 0? '<br/><b>Equipment 2010:</b> ' + addCommas(datum.equip2010) + '</td></tr>' : '')
		+ (datum.total2010 && datum.total2010.length > 0? '<br/><b>HFEP Total 2010 (Php):</b> ' + addCommas(datum.total2010) + '</td></tr>' : '')
		+ (datum.mooe2011 && datum.mooe2011.length > 0? '<br/><b>MOOE 2011:</b> ' + addCommas(datum.mooe2011) + '</td></tr>' : '')
		+ (datum.infra2011 && datum.infra2011.length > 0? '<br/><b>Infrastracture 2011:</b> ' + addCommas(datum.infra2011) + '</td></tr>' : '')
		+ (datum.equip2011 && datum.equip2011.length > 0? '<br/><b>Equipment 2011:</b> ' + addCommas(datum.equip2011) + '</td></tr>' : '')
		+ (datum.total2011 && datum.total2011.length > 0? '<br/><b>HFEP Total 2011 (Php):</b> ' + addCommas(datum.total2011) + '</td></tr>' : '')
		+ (datum.infra2012 && datum.infra2012.length > 0? '<br/><b>Infrastracture 2012:</b> ' + addCommas(datum.infra2012) + '</td></tr>' : '')
		+ (datum.equip2012 && datum.equip2012.length > 0? '<br/><b>Equipment 2012:</b> ' + addCommas(datum.equip2012) + '</td></tr>' : '')
		+ (datum.total2012 && datum.total2012.length > 0?'<br/><b>HFEP Total 2012 (Php):</b> ' + addCommas(datum.total2012) + '</td></tr>' : '')
		+ (datum.description && datum.description.length > 0? '<br/><b>Description:</b> ' + datum.description + '</td></tr>' : '')
		+ (datum.image && datum.image.length > 0? '<br/><b>Description:</b> <img src="' + datum.image + '"></td></tr>' : '')
		;
		
}

var services = {
}