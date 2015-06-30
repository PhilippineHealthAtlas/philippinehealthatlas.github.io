var spreadsheets = [
{
		'key' : '0Ai5xV-_s2GaFdGp5ZF83MGZUemdqR3dFZEtIUEFjTlE/od5',
		description : 'Data',
		'keyword' : 'Profile',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
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

var settings = {
	'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/ock',
	'provname' : 'municipality',
	'geojson_name' : 'NAME_3',
	center: [7.230, 125.445],
	zoom: 10
};

function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}

function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:green;background-color:green">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.target_cutoff + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	} else {
	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.ave_cutoff + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}

function getOne(val) {
	return (val == '1' || val == 'covered' || parseInt(val) > 0 ? 'green' : 'grey');
}


function getOneDetails() {
	return '</br><span style="color:green;background-color:green">__</span> Covered/Has One ' 
			+'</br><span style="color:grey;background-color:grey">__</span> None ';
}

function nonee(val) {
return val;
}

var attributes = {

	'dttb' : {
	
		is_indicator : true,
		description : 'DTTB',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'midwives' : {
	
		is_indicator : true,
		description : 'Midwives hired by DOH',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'cctarea' : {
	
		is_indicator : true,
		description : 'CCT Area',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'rnhealsii' : {
	
		is_indicator : true,
		description : 'RN Heals (CCT Area)',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'nhts2011' : {
	
		is_indicator : true,
		description : 'NHTS 2011',
		target_cutoff: 800,
		ave_cutoff: 1300,
		is_reverse: true,
		categ : getCategory, formatter : nonee, details_: getDetails
	}
}