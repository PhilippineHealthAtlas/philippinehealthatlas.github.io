var spreadsheets = [
{
		'key' : '1RV2jtz0hdYl1dvXnwJsyeC1n3SttTACGGOCik7unEpU/od7',
		description : 'Death Registration 1995',
		'keyword' : '1995',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '1RV2jtz0hdYl1dvXnwJsyeC1n3SttTACGGOCik7unEpU/od4',
		description : 'Death Registration 2000',
		'keyword' : '2000',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '1RV2jtz0hdYl1dvXnwJsyeC1n3SttTACGGOCik7unEpU/od5',
		description : 'Death Registration 2007',
		'keyword' : '2007',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	
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
	'key' : '0AoBD4uHCApskdFBKTXE2WFdaN3VNeWhhcWI2QWYxZmc/od7',
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
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}

function getCategoryMulti(val) {
	var i = 0;
	val = parseFloat(val);
	//console.log('value = ' + val);
	if (isNaN(val)) return '#777777';
	if (val == '') return '#777777';
	if (val < this.cutoffs[0]) return '#777777';
	//console.log('cutoffs[i] = ' + this.cutoffs[i]);
	//console.log('i < this.cutoffs.length =' + (i < this.cutoffs.length));
	//console.log('parseFloat(val) < this.cutoffs[i] = ' + (parseFloat(val) < this.cutoffs[i]));
	while (i < this.cutoffs.length && parseFloat(val) > this.cutoffs[i]) {
		i++;
	}
	//console.log('i = ' + i);
	if (i >= this.cutoffs.length && this.cutoffs.length != this.colors.length) { return '#777777'; }
	else return this.colors[i-1];
}
function getDetailsMulti() {
	var text = '';
	for (var i in this.colors) {
		//console.log('this.cutoffs.length == this.colors.length = ' + this.cutoffs.length == this.colors.length);
		//console.log('parseInt(i) == this.colors.length-1 = ' + parseInt(i) == this.colors.length-1);
		text += '</br><span style="color:'+this.colors[i]+';background-color:'+this.colors[i]+'">__</span> '+(i == 0 ? this.cutoffs[i]: this.cutoffs[i] + 1)+
		(this.cutoffs.length == this.colors.length && parseInt(i) == this.colors.length-1 ? ' and up' : ' - ' + this.cutoffs[parseInt(i)+1]);
	}
	text+= '</br><span style="color:gray;background-color:gray">__</span> No Data';
	return text;
}

var attributes = {

	'cdrmale' : {
	
		is_indicator : true,
		description : 'Percentage of Death Registration Male',
		cutoffs : [0,50,60,70,80,90],
		colors: ['red','orangered','orange','yellow','#9acd32','green'],
		categ : getCategoryMulti, formatter : twodecimals, details_: getDetailsMulti
	},
	'cdrfemale' : {
	
		is_indicator : true,
		description : 'Percentage of Death Registration Female',
		cutoffs : [0,50,60,70,80,90],
		colors: ['red','orangered','orange','yellow','#9acd32','green'],
		categ : getCategoryMulti, formatter : twodecimals, details_: getDetailsMulti
	},	
	'cdrtotal' : {
	
		is_indicator : true,
		description : 'Percentage of Death Registration Total',
		cutoffs : [0,50,60,70,80,90],
		colors: ['red','orangered','orange','yellow','#9acd32','green'],
		categ : getCategoryMulti, formatter : twodecimals, details_: getDetailsMulti
	
	}
}
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});