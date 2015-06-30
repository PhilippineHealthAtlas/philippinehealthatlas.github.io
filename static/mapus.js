function round(x,z) {
	return Math.round(x*Math.pow(10,z))/Math.pow(10,z);
}
	
var map, infoWindow;

function initialize() {
	var manila = new google.maps.LatLng(16,121);
	var mapOptions = {
		zoom: 7,
		center: manila,
		streetViewControl:false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	infoWindow = new google.maps.InfoWindow({ pixelOffset: google.maps.Size(0,0), maxWidth: 200});
	for (var categ in categories) {
		categories[categ].icon = new google.maps.MarkerImage(
			'static/'+categ+'.png',
			new google.maps.Size(16, 16),
			new google.maps.Point(0, 0),
			new google.maps.Point(8, 8));
		fetchFeatures(categ+'.poly');
		fetchFeatures(categ+'.nodes');
	}
	//fetchGoogleSpreadsheet('0AvtfUtPdJ93tdEZqaTBKZG5PR25VLUhnMHBOWU5MNEE', 2);
	
}
  
function fetchGoogleSpreadsheet(ws_key, gid) {
	t = round((new Date()).getTime(),-2);
	newScript = $('<script>')
		.attr({
			'src': 'http://pipes.yahoo.com/pipes/pipe.run?_id=213001d018a7c26f5e8a0ed262349bcd&_render=json&gid='+gid+'&_callback=displayFeaturesGoogle&ws_key=' + ws_key+'&t='+t,
			'type': 'text/javascript'
			
		});
	$(document.body).append(newScript);
}

function fetchFeatures(amenity_type) {
	$.ajax({
		url: 'static/view/'+amenity_type,
		context: document.body,
		dataType: 'json',
		success: displayFeatures
	});
}

function displayFeatures(result, textStatus, jqXHR) {
	items = result.items;
	
	var markers = [];
	var divider = 111319.49079327357264771338267056;
	for (var i = 0; i < items.length; i++) {
		//items[i].category = categ;
		categ = items[i].amenity;
		if (categories[categ]) {
			icon = categories[categ].icon;
			//alert(parseInt(items[i].lat)/divider);
			var lat = parseFloat(items[i].lat)/divider;
			lat = 180 / Math.PI * (2 * Math.atan( Math.exp( lat * Math.PI / 180.0)) - Math.PI / 2.0);
			items[i].position = new google.maps.LatLng(
				lat, 
				parseFloat(items[i].lon)/divider
			);
			//alert(lat +','+parseInt(items[i].lon)/divider);
			var marker = new google.maps.Marker({
				map: map,
				position: items[i].position,
				icon: icon
			});
			
			//google.maps.event.addListener(marker, 'click', showMarkerInfoWindow);
			//google.maps.event.addListener(marker, 'mouseover', showMarkerInfoWindow);
			marker.item = items[i];
			marker.infoText = 
				'<div class="info_box">'
				+'<b>'+items[i].name+'</b>'
				//+'<br><b>'+items[i].lat+'</b>'
				//+'<br><b>'+items[i].lon+'</b>'
				+'<br/>'+items[i].amenity
				+'<br/>'+items[i].tags
				+'</div>';
			items[i].marker = marker;
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.setContent(this.infoText);
				infoWindow.open(map,this);
			});
			markers.push(marker);
			//$(marker).data('datum', items[i]);
			if (categories[categ].items != null) {
				categories[categ].items.push(items[i]);
			} else {
				categories[categ].items = [items[i]];
			}
		} else {
			alert(2);
		}
	}
	//var markerCluster = new MarkerClusterer(map, markers);
}

var categories = {
'hospital':{},
'clinic':{},
'doctors':{}
};

function displayFeaturesGoogle(result) {
	items = result.value.items;
	var markers = [];
	for (var i = 0; i < items.length; i++) {
		//items[i].category = categ;
		categ = items[i].Category;
		if (categories[categ]) {
			var pos = items[i].Latitude_Longitude.split(',');
			items[i].latitude = pos[0];
			items[i].longitude = pos[1];
			//alert(0);
			icon = categories[categ].icon;
			items[i].position = new google.maps.LatLng(
				parseFloat(items[i].latitude), 
				parseFloat(items[i].longitude));
			var marker = new google.maps.Marker({
				//map: map,
				position: items[i].position,
				icon: icon
			});
			
			//google.maps.event.addListener(marker, 'click', showMarkerInfoWindow);
			//google.maps.event.addListener(marker, 'mouseover', showMarkerInfoWindow);
			marker.item = items[i];
			marker.infoText = 
				'<b>'+items[i].Category+'</b>'
				+'<br/>'+items[i].Address
				+'<br/><br/>'+items[i].Details
				+(items[i].Name_Missing?'<br/>'+items[i].Name_Missing:'')
				+'<br/><br/>'+items[i].Timestamp;
			items[i].marker = marker;
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.setContent(this.infoText);
				infoWindow.open(map,this);
			});
			markers.push(marker);
			//$(marker).data('datum', items[i]);
			if (categories[categ].items != null) {
				categories[categ].items.push(items[i]);
			} else {
				categories[categ].items = [items[i]];
			}
		}
	}
	var markerCluster = new MarkerClusterer(map, markers);
}
$(function () { initialize(); });