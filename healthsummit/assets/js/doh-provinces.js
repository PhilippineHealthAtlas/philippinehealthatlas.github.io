
function fetchGoogleSpreadsheet(ws_key, gid, fields, where, callback, reqid) {
	if (!reqid) reqid = callback;
	t = (new Date()).getTime();
	script_url = 'https://docs.google.com/spreadsheets/d/'
			+ ws_key
			+'/gviz/tq'
			+'?gid='+gid
			+'&headers=1'
			+'&tq=SELECT%20*%20WHERE%20'+where
			+'&tqx=reqId:'+reqid
			+';responseHandler:'+callback
			+'&t='+(roundOff((new Date()).getTime(),-2));
				//alert(script_url);
	newScript = $('<script>')
		.attr({
			'src': script_url,
			'type': 'text/javascript'
			
		});
	$(document.body).append(newScript);
	
}

muni = location.href.replace(/#.+/g,'').replace(/.+\?/g,'');
fetchGoogleSpreadsheet(
	'1scc3f38wGB28iN-5AYBimwEydrQDX6JWYRb9O8iX21k', 
	1578532529, '*', "A%20%3D%20'" + muni+"'", 'showData');

function cleanJson(table) {
	var result = [];
	var cols = [];
	for (var i in table.cols) {
		cols.push(table.cols[i].label.toLowerCase().replace(/[^0-9a-z]+/g,'_'));
	}
	for (var i in table.rows) {
		var row = {};
		for (var j in cols) {
			if(table.rows[i].c[j]) {
				//console.log(cols[j]);
				row[cols[j]] = table.rows[i].c[j].v;
			}
		}
		result.push(row);
	}
	return result;
}


var globaldata;
function showData(data) {
	
	globaldata = cleanJson(data.table);
	console.log(globaldata[0]);
	$('.municipality_name').html(globaldata[0].name);
	$('.region_name').html(globaldata[0].region_name);
	for (var i in globaldata[0]) {
		$('.data_'+i).html(globaldata[0][i]);
	}

	google.load("visualization", "1", {packages:["corechart"], callback:drawChart});

	$('#municipal_logo').attr('src',globaldata[0].logo)
    //google.setOnLoadCallback(drawChart);
      function drawChart() {
      	var totalpop = parseInt(globaldata[0].populationpsa2010);
      	var poor = parseInt(parseFloat(globaldata[0].poverty_incidence) / 100 * totalpop);
      	console.log(poor);
      	console.log(totalpop);
        var datatable = google.visualization.arrayToDataTable([
          ['Num of People', 'Hours per Day'],
          ['Poor',     poor],
          ['Non-Poor',      totalpop - poor]
        ]);

        var options = {
          title: 'Poverty Incidence'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_poverty_incidence'));

        chart.draw(datatable, options);
      }
}

function roundOff(num, dec) {
	return Math.round(num*Math.pow(10,-dec))/Math.pow(10,-dec);
}
