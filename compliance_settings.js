var spreadsheets = [
	{
		'key' : '1F001jwLxHJ5inC3D6hiURybheXi_zDg9nYCn9Wc7p8g/od6',
		description : 'CCT Health Compliance 2011',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];

var settings = {
	'key' : '0AoBD4uHCApskdGE5S21tc3lmVHVQRU9VVFBwZENUcVE/ock',
	'provname' : 'd'
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

var attributes = {

	'bb' : { is_indicator : true, description : 'Compliance Rate Jan 2011', target_cutoff: 90, ave_cutoff: 80, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bc' : { is_indicator : true, description : 'Compliance Rate Mar 2011', target_cutoff: 90, ave_cutoff: 80, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bd' : { is_indicator : true, description : 'Compliance Rate May 2011', target_cutoff: 90, ave_cutoff: 80, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'be' : { is_indicator : true, description : 'Compliance Rate Jul 2011', target_cutoff: 90, ave_cutoff: 80, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bf' : { is_indicator : true, description : 'Compliance Rate Sep 2011', target_cutoff: 90, ave_cutoff: 80, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bg' : { is_reverse:true, is_indicator : true, description : '% Non-submission Jan 2011', target_cutoff: 10, ave_cutoff: 20, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bh' : { is_reverse:true, is_indicator : true, description : '% Non-submission Mar 2011', target_cutoff: 10, ave_cutoff: 20, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bi' : { is_reverse:true, is_indicator : true, description : '% Non-submission May 2011', target_cutoff: 10, ave_cutoff: 20, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bj' : { is_reverse:true, is_indicator : true, description : '% Non-submission Jul 2011', target_cutoff: 10, ave_cutoff: 20, categ : getCategory, formatter : twodecimals, details_: getDetails },
	'bk' : { is_reverse:true, is_indicator : true, description : '% Non-submission Sep 2011', target_cutoff: 10, ave_cutoff: 20, categ : getCategory, formatter : twodecimals, details_: getDetails },
}
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});