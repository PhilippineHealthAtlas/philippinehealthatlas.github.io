doh.maps.functions = {
/* =====================
 TEXT FORMATTER FUNCTIONS 
======================== */
formatters: {
	twodecimals : function (val) {
		if (val < 0) return "";
		return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
	}
},
/* =====================
 LEGEND FUNCTIONS 
======================== */
legends: {
	categorize: function () {
		var obj = this;
		console.log(obj);
		if (obj.is_reverse) {
		var legends = '';
		
		return '</br><span style="color:green;background-color:green">__</span> 0 - ' + obj.target_cutoff
				+ ( obj.ave_cutoff > obj.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + obj.target_cutoff + ' - ' + obj.ave_cutoff  : '')
				+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(obj.target_cutoff, obj.ave_cutoff)
				+'</br><span style="color:gray;background-color:gray">__</span> No Data';
		} else {
		return '</br><span style="color:green;background-color:green">__</span> > ' + obj.target_cutoff
				+ ( obj.ave_cutoff < obj.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + obj.ave_cutoff + ' - ' + obj.target_cutoff : '')
				+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(obj.target_cutoff, obj.ave_cutoff)
				+'</br><span style="color:gray;background-color:gray">__</span> No Data';
		}
	}
},
/* =====================
 COLOR FUNCTIONS 
======================== */
color: {
	categorize: function (val) {
		if (this.is_reverse) {
			return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'green') )); 
		} else {
			return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
		}
	}
}
}