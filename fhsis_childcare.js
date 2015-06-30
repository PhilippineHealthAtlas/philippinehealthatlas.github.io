var spreadsheets = [
	{
		key : '0Aq7eQ20tUwmTdDVDZVdUdHJBYWtCOU5pNDEzaXBwcUE/ocy',
		description : 'FHSIS 2005',
		keyword : '2005',
		marker : 'static/hospital_.png',
		callback : 'load_provinces'
	},{
		key : '0Aq7eQ20tUwmTdDVDZVdUdHJBYWtCOU5pNDEzaXBwcUE/ocz',
		description : 'FHSIS 2006',
		keyword : '2006',
		marker : 'static/hospital_.png',
		callback : 'load_provinces'
	},{
		key : '0Aq7eQ20tUwmTdDVDZVdUdHJBYWtCOU5pNDEzaXBwcUE/od9',
		description : 'FHSIS 2007',
		keyword : '2007',
		marker : 'static/hospital_.png',
		callback : 'load_provinces'
	},{
		key : '0Aq7eQ20tUwmTdDVDZVdUdHJBYWtCOU5pNDEzaXBwcUE/od8',
		description : 'FHSIS 2008',
		keyword : '2008',
		marker : 'static/hospital_.png',
		callback : 'load_provinces'
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
	'provname' : 'e'
	,cities: true
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
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 || val == '*' ? 'gray' : 'green') )); 
	} else {
		return ( val < 0 || val == '*'? 'gray' : (val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : 'red' ))); 
	}
}



var attributes = {

	'i' : {
	
		is_indicator : false,
		description : 'Pregnant women with 3 pre-natal visits',
		formatter : twodecimals
	},
	'j' : {
	
		is_indicator : true,
		description : 'Percent of pregnant women with 3 pre-natal visits',
		categ : getCategory,
		details_: getDetails,
		ave_cutoff: 80,
		target_cutoff: 90,
		formatter : twodecimals
	},
	'k' : {
	
		is_indicator : false,
		description : 'Pregnant women with 4 pre-natal visits',
		formatter : twodecimals, details_: getDetails
	},
	'l' : {
		is_indicator : true,
		description : 'Percent of pregnant women with 4 pre-natal visits',
		ave_cutoff: 50,
		target_cutoff: 75,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'm' : {
	
		is_indicator : false,
		description : 'Pregnant women given tt2 plus',
		formatter : twodecimals, details_: getDetails
	},
	'n' : {
	
		is_indicator : true,
		description : 'Percent of pregnant woment given tt2plus',
		ave_cutoff: 50,
		target_cutoff: 65,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	},
	'o' : {
		is_indicator : false,
		description : 'Eligible  population',
		formatter : twodecimals, details_: getDetails
	},
	'p' : {
	
		is_indicator : false,
		description : 'Post-partum women with 1 postpartum visit',
		formatter : twodecimals, details_: getDetails
	},
	'q' : {
	
		is_indicator : true,
		description : 'Percent Post-partum women with 1 postpartum visit',
		ave_cutoff: 50,
		target_cutoff: 70,
		categ : getCategory, formatter : twodecimals, details_: getDetails
	}
};

/* 09PW_3PV	2009 PREGNANT WOMEN WITH 3 PRE-NATAL VISITS
09P_PW_3PV	2009 PERCENT OF PREGNANT WOMEN WITH 3 PRE-NATAL VISITS
09PW_4PV	2009 PREGNANT WOMEN WITH 4 PRE-NATAL VISITS
09P_PW_4PV	2009 PERCENT OF PREGNANT WOMEN WITH 4 PRE-NATAL VISITS
09PW_2TT	2009 PREGNANT WOMEN GIVEN 2 DOSES OF TT
09P_PW_2TT	2009 PERCENT PREGNANT WOMEN GIVEN 2 DOSES OF TT
09PW_TT2P	2009 PREGNANT WOMEN GIVEN TT2 PLUS
09P_PW_TT2P	2009 PERCENT OF PRENANT WOMENT GIVEN TT2PLUS
09PW_CIFA	2009 PREGNANT WOMEN GIVEN COMPLETE IRON W/FA
09P_PW_CIFA	2009 PERCENT OF PREGNANT WOMEN GIVEN COMPLETE IRON W/FA
09PW_VAS	2009 PREGNANT WOMEN GIVEN VITAMIN A SUPPLEMENTATION
09P_PW_VAS	2009 PERCENT OF PREGNANT WOMEN GIVEN VITAMIN A SUPPLEMENTATION
09EP	2009 ELIGIBLE  POPULATION
09PPW_1PPV	2009 POST-PARTUM WOMEN WITH 1 POSTPARTUM VISIT
09P_PPW_1PPV	2009 POST-PARTUM WOMEN WITH 1 POSTPARTUM VISIT 

2009 pregnant women with 3 pre-natal visits
2009 percent of pregnant women with 3 pre-natal visits
2009 pregnant women with 4 pre-natal visits
2009 percent of pregnant women with 4 pre-natal visits
2009 pregnant women given tt2 plus
2009 percent of prenant woment given tt2plus
2009 eligible  population
2009 post-partum women with 1 postpartum visit
2009 post-partum women with 1 postpartum visit


*/
