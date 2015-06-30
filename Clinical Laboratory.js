

var spreadsheets = [
	

	{
		'key' : '0Ahdqio3d31tKdDh0VFkzUEk5YmF2emxPbEVxZVJlcVE/od6',
		'description' : 'Clinical Laboratory',
		'keyword' : 'clinical_laboratory',
		'marker' : 'L.jpg'
	}
];
var settings = {
	'provname' : 'provname',
	noInfoWindow: true,
	'geojson_name' : 'NAME_2',
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

function getInfoText(datum) {
	return '<table>'
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/><b>Complete Address</b>: ' + datum.completeaddress : '')
		+ (datum.headofthefacility && datum.headofthefacility.length > 0? '<br/><b>Head of the Facility</b>: ' + datum.headofthefacility : '')
		
		
}

var services = {
}