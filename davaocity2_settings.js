
var spreadsheets = [
	
	{
		'key' : '0Aq7eQ20tUwmTdElUVHF2aGJuVTNyNWJzODJPTHdXUHc/od6',
		'description' : "Gov't Hospitals",
		'keyword' : 'Government Hospital',
		'marker' : 'circle_red.png',
		size:16
	},{
		'key' : '0Aq7eQ20tUwmTdElUVHF2aGJuVTNyNWJzODJPTHdXUHc/od7',
		'description' : 'Private Hospital',
		'keyword' : 'Private Hospital',
		'marker' : 'circle_yellow.png',
		size:16
	},{
	    'key' : '0Aq7eQ20tUwmTdElUVHF2aGJuVTNyNWJzODJPTHdXUHc/od4',
		'description' : 'RHU',
		'keyword' : 'RHU',
		'marker' : 'circle_blue.png',
		 size:16
    },{
	    'key' : '0Aq7eQ20tUwmTdElUVHF2aGJuVTNyNWJzODJPTHdXUHc/od5',
		'description' : 'BHS',
		'keyword' : 'BHS',
		'marker' : 'circle_green.png',
		 size:16
	}
];

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


function getInfoText(datum) {
	return ''
		+'<br/><br/>HFEP Allocation'
		+ (parseInt(datum.total2008) > 0 ? '<br/><b>2010</b>'
			+'<br/>&nbsp;&nbsp;Total: ' + commatize(datum.total2008)
			+'<br/>&nbsp;&nbsp;Infra: ' + commatize(datum.infra2008)
			+'<br/>&nbsp;&nbsp;Equip: ' + commatize(datum.equipment2008)
			+'<br/>&nbsp;&nbsp;MOOE: ' + commatize(datum.mooe2008)
			: '')
		+ (parseInt(datum.total2010) > 0 ? '<br/><b>2010</b>'
			+'<br/>&nbsp;&nbsp;Total: ' + commatize(datum.total2010)
			+'<br/>&nbsp;&nbsp;Infra: ' + commatize(datum.infra2010)
			+'<br/>&nbsp;&nbsp;Equip: ' + commatize(datum.equipment2010)
			: '')
		+ (parseInt(datum.total2011) > 0 ? '<br/><b>2011</b>'
			+'<br/>&nbsp;&nbsp;Total: ' + commatize(datum.total2011 )
			+'<br/>&nbsp;&nbsp;Infra: ' + commatize(datum.infra2011)
			+'<br/>&nbsp;&nbsp;Equip: ' + commatize(datum.equipment2011)
			: '')
		+ (parseInt(datum.total2012) > 0 ? '<br/><b>2012 (Subject to changes)</b>'
			+'<br/>&nbsp;&nbsp;Total: ' + commatize(datum.total2012 )
			+'<br/>&nbsp;&nbsp;Infra: ' + commatize(datum.infra2012)
			+'<br/>&nbsp;&nbsp;Equip: ' + commatize(datum.equipment2012)
			: '');
}

var services = {
	'total2008' : { 'description' : 'HFEP 2008' },
	'total2010' : { 'description' : 'HFEP 2010' },
	'total2011' : { 'description' : 'HFEP 2011' },
	'total2012' : { 'description' : 'HFEP 2012' }
}