var spreadsheets = [
	{
		'key' : '0Aq7eQ20tUwmTdHdTc1FVZHNmQlMyZEJYSkdEdlVFaVE/odb',
		'description' : 'Foreign Medical Missions',
		'keyword' : 'Foreign Medical Missions',
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
	'provname' : 'provname'
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
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 || val == '' ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 || val == ''? 'gray' : 'red') )); 
	}
}

function lister(text) {
    return '</td></tr><tr><td colspan="3">'+text;
}


var attributes = {
		'nummedmission' : {
            is_indicator : true,
            ave_cutoff: 0,
            target_cutoff: 2,
            formatter:commatize,
            categ : getCategory,
            details_: getDetails,
            description : 'Medical Missions'
		},
		'listed' : {
            is_indicator : false,
            description : 'List',
            formatter:lister
	}
}