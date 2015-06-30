
var ftlayers = [];
var map;

function initialize() {

	map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: new google.maps.LatLng(options.latitude,options.longitude),
		zoom: options.zoom,
		streetViewControl: false,
		panControl: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		mapTypeId: google.maps.MapTypeId.SATELLITE
	});
	
	for (var i in layers) {
		//console.log(layers[i]);
		var layer = new google.maps.FusionTablesLayer({
			query: {
			select: 'geometry',
			from: layers[i].ftId
			}, 
			options: {
				styleId: layers[i].styleId,
				templateId: layers[i].templateId,
				map: map
			}
		});
		ftlayers.push(layer);
		
	}
	
	var legends = document.getElementById('legends');
	legends.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legends);
	var title = document.getElementById('title');
	title.index = 1;
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(title);
}

function toggleMe(i) {
	if (ftlayers[i].getMap() != null) {
		$('#legend_'+i).slideUp();
		ftlayers[i].setMap(null);
	} else {
		ftlayers[i].setMap(map);
		$('#legend_'+i).slideDown();
	}

}

function showLegend(data) {
	var dest = $('#legend_'+data.tableId+'_'+data.styleId);
	var html = '';
	if (data.polygonOptions) {
		var styler = data.polygonOptions.fillColorStyler;
		if (styler && styler.buckets) {
			var buckets = styler.buckets
			for (var i in buckets) {
				html += '<div><div class="color" style="background-color:'+buckets[i].color+'"></div>'+buckets[i].min+' - '+buckets[i].max+'</div>';
			}
		}
	}
	dest.html(html);
	console.log(html);
	console.log(data);
}
google.maps.event.addDomListener(window, 'load', initialize);


var scripts = '';
for (var i in layers) {
	var newDiv = $('<div>').html('<input type="'+(layers[i].ftType == 'Shape' ? 'radio' : 'checkbox')+'" onclick="toggleMe('+i+')" name="layers" checked value="'+i+'">' + layers[i].title + '<div class="legend" id="legend_'+layers[i].ftId+'_'+layers[i].styleId+'">XXX</div>');
		//newDiv.insertBefore('#legend_'+i);
	$('#legends').append(newDiv)
	scripts += '<'+'script src="https://content.googleapis.com/fusiontables/v2/tables/'+layers[i].ftId+'/styles/'+layers[i].styleId+'?key=AIzaSyAbxdmfQh5JWO4a9CwbuwLpgZRqANhz1zI&callback=showLegend"><'+'/script>'
}
document.write(scripts);