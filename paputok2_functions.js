var map;
var circle = null;
var geocoder;
var categories = [];
var myLoc = '';
var localsearch = null;
var infoboxOptions = {
	content: '',
	disableAutoPan: true,
	maxWidth: 0,
	pixelOffset: new google.maps.Size(-10, -10),
	zIndex: null,
	boxClass: 'infobox',
	boxStyle: { },
	//closeBoxMargin: "2px 2px 2px 2px",
	closeBoxMargin: "0px 0px 0px 0px",
	closeBoxURL: '',// "http://www.google.com/intl/en_us/mapfiles/close.gif",
	infoBoxClearance: new google.maps.Size(1, 1),
	isHidden: false,
	//pane: "floatPane",
	pane: "overlayImage",
	//pane: "mapPane",
	enableEventPropagation: false
};

var infotipOptions = {
	content: '',
	disableAutoPan: true,
	maxWidth: 0,
	pixelOffset: new google.maps.Size(10, 10),
	zIndex: null,
	boxClass: 'infotip',
	boxStyle: { },
	closeBoxMargin: "0px 0px 0px 0px",
	closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
	infoBoxClearance: new google.maps.Size(1, 1),
	isHidden: false,
	pane: "floatPane",
	enableEventPropagation: false
};
var infotipbox = null;
var layers ;


var spreadsheets = [
	
	{
		'key' : '01g9TJgPIi7mwe8OCEc9Jd3Nk_f9IeHc8gSse9EW6-HTI',
		'description' : '2010',
		'keyword' : '2010',
		'marker' : 'static/hospital_.png',
		'sid':'od6',
		'color':'#f30',
		'infoText':function(datum) {
			return ''
				+'<p>Number of cases (2010): '+datum.numberofcases
				+(datum['fireworksrelated'] > 0 ? '<p>Fireworks-related: '+datum['fireworksrelated'] : '')
				+'<p>Watusi/Piccolo Ingestion: '+datum.watusipiccoloingestion
				+'<p>Stray Bullet: '+ datum['gswstraybullet']
				+'<p>Others: '+ (parseInt(datum.tetanus) + parseInt(datum.othersspecify) + parseInt(datum.unknown))
		}
	},
	{
		'key' : '1P9NGiSSS7UK9R_BdEE7Y1xA5TeqX8thFsBkCxqfmBfc',
		'description' : '2011',
		'keyword' : '2011',
		'marker' : 'static/hospital_.png',
		'sid' : 'od7',
		'color':'#0f3',
		'infoText':function(datum) {
			return ''
				+'<p>Number of cases (2011): '+datum.numberofcases
				+(datum['fireworksrelated'] > 0 ? '<p>Fireworks-related: '+datum['fireworksrelated'] : '')
				+'<p>Watusi/Piccolo Ingestion: '+datum.watusipiccoloingestion
				+'<p>Stray Bullet: '+ datum['gswstraybullet']
				
		}
	},	
	{
		'key' : '1oJTY0rS2uaCqgFw6zcYTf6YAAJ1Yw2ZHlxt0SXavyCM',
		'description' : '2012',
		'keyword' : '2012',
		'marker' : 'static/hospital_.png',
		'sid':'od6',
		'color':'#60F',
		'infoText':function(datum) {
			return ''
				+'<p>Number of cases (2012): '+datum.numberofcases
				+(datum['fireworksrelated'] > 0 ? '<p>Fireworks-related: '+datum['fireworksrelated'] : '')
				+'<p>Watusi/Piccolo Ingestion: '+datum.watusipiccoloingestion
				+'<p>Stray Bullet: '+ datum['gswstraybullet']
		}

	},	
	{
		'key' : '1oJTY0rS2uaCqgFw6zcYTf6YAAJ1Yw2ZHlxt0SXavyCM',
		'description' : '2013',
		'keyword' : '2013',
		'marker' : 'static/hospital_.png',
		'sid':'od7',
		'color':'#ff0',
		'infoText':function(datum) {
			return ''
				+'<p>Number of cases (2013): '+datum.numberofcases
				+(datum['fireworksrelated'] > 0 ? '<p>Fireworks-related: '+datum['fireworksrelated'] : '')
				+'<p>Watusi/Piccolo Ingestion: '+datum.watusipiccoloingestion
				+'<p>Stray Bullet: '+ datum['gswstraybullet']
				
		}

	}
];
var ss_ = {};

var services = {
	
}
var infoWindow = new google.maps.InfoWindow({ pixelOffset: google.maps.Size(0,0), maxWidth: 200});

var errorIcon = new google.maps.MarkerImage(
		'static/home.png',
		new google.maps.Size(24, 24),
		new google.maps.Point(0, 0),
		new google.maps.Point(12, 12));
var hospitalIcon = new google.maps.MarkerImage(
		'static/hospital_.png',
		new google.maps.Size(10, 10),
		new google.maps.Point(0, 0),
		new google.maps.Point(5, 5));
var fadedIcon = new google.maps.MarkerImage(
		'static/hospital_faded.png',
		new google.maps.Size(10, 10),
		new google.maps.Point(0, 0),
		new google.maps.Point(5, 5));
		
function onLoad() {
	layers = {
	};
	var initOptions = {
		zoom:6,
		center : new google.maps.LatLng(14.6137, 121.0376),
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var stylesArray = [
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {color: '#ffffff'}
      // etc...
    ]
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry',
    stylers: [
      {color: '#ffffff'}
      // etc...
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {'visibility':'off'}
      // etc...
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {color:'#dddddd'}
      // etc...
    ]
  }
  ];
	
	map = new google.maps.Map(document.getElementById("map"), initOptions); 
	//geocoder = new google.maps.Geocoder();
	//localsearch = new GlocalSearch();
    //localsearch.setSearchCompleteCallback(null, onLocalSearch);
		map.setOptions({styles: stylesArray});
	for(var layer in layers) {
		addTR(layer, layers[layer].name);
	}
	
	for (var i = 0; i < spreadsheets.length; i++) {
		m = spreadsheets[i];
		ss_[m.key + '/' + m.sid] = m;
		categories[m.keyword] = m;
		categories[m.keyword].infoboxes = [];
		var newInput = $('<input>')
			.attr({'type':'checkbox', 'id': 'cb_' + m.keyword, 'name': m.keyword, 'checked':true})
			.click(toggleCheckboxes);
		var newLabel = $('<label>')
			.attr({'for': 'cb_' + m.keyword})
			.html(' '+m.description);
		var newImage = $('<span>')
			.css({'background-color':m.color,'color':m.color})
			.html('__');
		var newDiv = $('<div>')
			.append(newInput)
			.append(newImage)
			.append(newLabel);
		$('#addressbar .padding').append(newDiv);
		fetchGoogleSpreadsheet(m.key, m.sid, 'displayFeaturesNew');
		//fetchSpreadsheet(m.keyword);
	}
	
	for (var i in services) {
		m = services[i];
		m.keyword = i;
		var newInput = $('<input>')
			.attr({'type':'checkbox', 'id': 'cb_' + m.keyword , 'name': m.keyword})
			.click(toggleCheckboxes_services);
		var newLabel = $('<label>')
			.attr({'for': m.keyword})
			.html(' '+m.description);
		var newDiv = $('<div>')
			.append(newInput)
			.append(newLabel);
		$('#addressbar .padding').append(newDiv);
	}
	
} 

function clearHide() {
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		items[j].marker.setIcon(hospitalIcon);
		items[j].market.setMap(map);
	}
}

hideInfotipWindow = function() {
	infoWindow.close();
}

function toggleCheckboxes () {
	categ = $(this).attr('name');
	$('#div_'+categ).toggleClass('hidden');
	var infoboxes = categories[categ].infoboxes
	for (var j = 0; j < infoboxes.length; j++) {
		if (infoboxes[j].getMap() == null) {
			infoboxes[j].setMap(map);
		} else {
			infoboxes[j].setMap(null);
		}
	}
	//
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		if (items[j].marker.getMap() == null) {
			items[j].marker.setMap(map);
		} else {
			items[j].marker.setMap(null);
		}
	}	
}

function toggleCheckboxes_services() {
	service = $(this).attr('name');
	var items = categories['hospital'].items;
	nn = 0;
	for (var k in services) {
		//alert($('#cb_' + k).attr('checked'));
		if ($('#cb_' + k).attr('checked')) {
			nn++;
		}
	}
	for (var j in items) {
		var m = items[j];
		var n = 0;
		var datum = $(m.marker).data('datum');
		for (var k in services) {
			if (datum[k] == '1' && $('#cb_' + k).attr('checked')) {
				//alert(datum[k]);
				n++;
			}
		}
		if (n == nn) {
			items[j].marker.setMap(map);
		} else {
			items[j].marker.setMap(null);
		}
		/*
		if (datum != null) {
			if (datum[service] == '1') {
				//items[j].marker.setIcon(hospitalIcon);
				items[j].marker.setMap(map);
			} 
			else {
				//items[j].marker.setIcon(fadedIcon);
				items[j].marker.setMap(null);
			} 
		} else {
			items[j].marker.setIcon(errorIcon);
		}
		*/
	}
}


function addTR(id) {
	var input = $("<input>")
		.attr({
			'type': "checkbox",
			'id': id,
			'checked': (layers[id].defaultLayer)
		})
		.click (function () { toggleGeoXML(this.id, this.checked) });
	var inputTD = $("<td>")
	var nameTD = $("<td>");
	var layerTR = $("<tr>");
	var nameA = $("<b>")
		.html(layers[id].name);
	var source = $("<b>")
		.html(layers[id].name);
	var legendText = $('<div>')
		.html('<div><i>Source: '+layers[id].source+'</i></div>'+layers[id].legend)
		.attr('id','legend_'+id);
	if (! layers[id].defaultLayer) {
		legendText.addClass('hidden');
	}
	inputTD
		.append(input);
	nameTD
		.append(nameA)
		.append(legendText);
	layerTR
		.append(inputTD)
		.append(nameTD);
	$("#legendbarTBODY").append(layerTR);
	$(".legend_item")
		.mouseenter( function() {
			$(this).addClass('hover');
		})
		.mouseleave( function() {
			$(this).removeClass('hover');
		});
	layers[id].geoXmls = []
	for (var j = 0; j < layers[id].urls.length; j++) {
		var geoXml = new google.maps.KmlLayer(layers[id].urls[j], {
			map: (layers[id].defaultLayer ? map : null),
			preserveViewport: true,
			suppressInfoWindows: layers[id].suppressInfoWindows
		});
		layers[id].geoXmls.push(geoXml);
	}
	//toggleGeoXML(layer, true);
}

function toggleGeoXML(id, checked) {
	for (var currLayer in layers) {
		geoXmls = layers[currLayer].geoXmls;
		for (var i = 0; i < geoXmls.length; i++) {
			if (checked && currLayer == id) {
				$('#legend_'+id).removeClass('hidden');
				geoXmls[i].setMap(map);
			} else {
				$('#'+currLayer).attr('checked',false);
				$('#legend_'+currLayer).addClass('hidden');
				geoXmls[i].setMap(null);
			}
		}
	}
}

function onLocalSearch() {
	if (localsearch.results.length > 0) {
		var first = localsearch.results[0];
		var position = new google.maps.LatLng(parseFloat(first.lat), parseFloat(first.lng));
		myLoc = first.title;
		map.setCenter(position);
		var marker = new google.maps.Marker({
			map: map,
			position: position });
		marker.address = first.title;
		infoWindow.setContent(
			"Search result: "
			+ '<h1>' + marker.address + '</h1>'
		);
		infoWindow.open(map,marker);
		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.setContent('<h1>'+"Search result: "+'</h1>' + this.address);
			infoWindow.open(map,this);
		});
		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
		showNearby();
	} else {
		
		$('#nearby .padding').empty().addClass('hidden');
		alert("Sorry, Google was unable to geocode that address");
	}
}

function roundOff(num, dec) {
	return Math.round(num*Math.pow(10,-dec))/Math.pow(10,-dec);
}

function showNearby() {
	var currLoc = map.getCenter();
	//newBounds = new map.google.LatLngBounds();
	newBounds = new google.maps.LatLngBounds(map.getCenter(),map.getCenter());
	var radiusLimit = 5;
	$('#nearby').removeClass('hidden');
	var nearby = $('#nearby');
	nearby.empty();
	var header = $('<div>')
		.html(
			'<a id="printlink" href="javascript:window.print()"><div><img src="icon_print.gif"/> <b>Print this List</b></div></a>'
			+'<br/>'
			+'<div>Your location is '+myLoc+'.</div>'
			+'<br/>'
			+'<h1>Nearest your location:</h1>'
			)
		.addClass('padding')
		;
	nearby
		.append(header);
	
	for (var categ in categories) {
		if ($('#cb_'+categ).attr('checked')) {
			distances = [];
			var category = categories[categ];
			var infoboxes = category.infoboxes;
			while (infoboxes.length>0) {
				infoboxes[infoboxes.length-1].setMap(null);
				infoboxes.pop();
			}
			ecs = categories[categ].items;
			for (var i = 0; i < ecs.length; i++) {
				var distance = getDistance(currLoc, ecs[i].position);
				if ( distance < radiusLimit) {
					distances.push({n: i, distance: distance });
				}
			}
			distances.sort(sortLocations);
			
			parentDiv = $('<div>')
				.attr( {'id':'div_'+categ})
				//.addClass('container')
				;
			categDiv = $('<div>')
				.addClass('padding')
				;
			parentDiv.append(categDiv);
			categDiv.append($('<h2>').html(category.description));
			newList = $('<ul>');
			categDiv.append(newList);
			nearby.append(parentDiv);
			if (distances.length == 0) {
				newMarker = $('<li>')
					.html('None found within ' + radiusLimit + ' kilometers');
				newList.append(newMarker);
			}
			for (var i = 0; i < 5 && i < distances.length; i++) {
				x = distances[i].n
				var thisLoc = ecs[x];
				newBounds = newBounds.extend(thisLoc.position);
				
				var ib = new InfoBox(infoboxOptions);	
				ib.open(map, thisLoc.marker);
				if (thisLoc.name) {
					//ib.setContent('<div>'+thisLoc.name+'</div>');
				}
				category.infoboxes.push(ib);
				
				newMarker = $('<li>')
					.html('<b>' + thisLoc.name + '</b> (' 
						+ roundOff(distances[i].distance,-2) + ' km)'
						+(ecs[x]['Contact Numbers'] ? '<br/>' + '<img src="phone.png" alt="Contact Numbers:"/> ' + ecs[x]['Contact Numbers'] : '')
						)
					.data('datum', ecs[x])
					.click(showMarkerInfoWindow)
					.mouseover(showMarkerInfoWindow)
					;
				newList.append(newMarker);
			}
		}
	}
	map.fitBounds(newBounds);
	/*
	new google.maps.Rectangle({
			fillColor:'#ff3f3f', 
			strokeOpacity: 0, 
			map:map,
			bounds:newBounds 
		});
	*/
}

showMarkerInfoWindow = function () {
	var datum = $(this).data('datum');
	var text = 
//		categories[datum.category].description +':'
		''
		+'<h1>'+datum.municipality+' </h1>'
		+categories[datum.categ].infoText(datum)
		;
	infoWindow.setContent(text);
	infoWindow.setPosition(datum.marker.getCenter());
	infoWindow.open(map);
	
}

function sortLocations(a,b) {
	return a.distance - b.distance;
}

function roundOff(num, dec) {
	return Math.round(num*Math.pow(10,-dec))/Math.pow(10,-dec);
}



// showLocation() is called when you click on the Search button
// in the form.	It geocodes the address entered into the form
// and adds a marker to the map at that location.
function showLocation() {
	var address = document.forms[0].q.value;
	$('#nearby').empty().append('<img src="loading.gif">');
	localsearch.setCenterPoint(map.getCenter());
    localsearch.execute(address);

	/*
	geocoder.geocode( { 
		address: address, 
		region: 'PH', 
		bounds: new google.maps.LatLngBounds(
			new google.maps.LatLng(14.7990, 120.8619),
			new google.maps.LatLng(14.2732, 121.1983))
	}, addAddressToMap);
	*/
}

// findLocation() is used to enter the sample addresses into the form.
function findLocation(address) {
	document.forms[0].q.value = address;
	showLocation();	
}

function getDistance (origin, destin) {
	x = degcos(origin.lat())*degcos(destin.lat())*degcos(destin.lng() - origin.lng()) + degsin(origin.lat()) * degsin(destin.lat());
	y = Math.acos(x);
	return 6371.01 * y;
}


function cleanJson(entry) {
	for (var i in entry) {
		//alert(i);
		if (i.match(/^gsx\$/)) {
			entry[i.replace('gsx$','')] = entry[i].$t;
		}
	}
	return entry;
}

function displayFeaturesNew(result) {
	var items = result.feed.entry;
	//alert(0);
	var obj_id = result.feed.id.$t.replace('https://spreadsheets.google.com/feeds/list/','').replace('/public/values',''),
	obj = ss_[obj_id],
	categ = obj.keyword;
	/*
	var icon = new google.maps.MarkerImage(
		categories[categ].marker,
		new google.maps.Size(10, 10),
		new google.maps.Point(0, 0),
		new google.maps.Point(5, 5));
	*/
	//alert(items.length);
	for (var i = 0; i < items.length; i++) {
		items[i] = cleanJson(items[i]);
		//items[i].xrayservices = (items[i].xrayservice.length > 0 ? '1' : '0');
		//alert(items[i].latitude);
		//if (items[i].latitude);
		//items[i].category = categ;
		position = new google.maps.LatLng(
			parseFloat(items[i].latitude), 
			parseFloat(items[i].longitude));
		items[i].categ = categ;
		/*
		var marker = new google.maps.Marker({
			map: map,
			position: items[i].position,
			icon: icon
		});
		*/
		var marker = new google.maps.Circle({
			map: map,
			center: position,
			radius: Math.sqrt(Math.sqrt(items[i].numberofcases)) * 2000,
			fillOpacity: 0.5,
			strokeOpacity: 1,
			strokeWeight: 1,
			fillColor: obj.color,
			strokeColor: '#000',
		});
		google.maps.event.addListener(marker, 'click', showMarkerInfoWindow);
		//google.maps.event.addListener(marker, 'mouseover', showMarkerInfoWindow);
		items[i].marker = marker;
		$(marker).data('datum', items[i]);
	}
	categories[categ].items = items;
}



function fetchGoogleSpreadsheet(ws_key, wid, callback) {
	t = (new Date()).getTime();
	script_url = 'https://spreadsheets.google.com/feeds/list/'
				+ws_key
				+'/'+wid
				+'/public/values?alt=json-in-script'
				+'&callback='+callback
				+'&t='+(roundOff((new Date()).getTime(),-2));
				//alert(script_url);
	newScript = $('<script>')
		.attr({
			'src': script_url,
			'type': 'text/javascript'
			
		});
	$(document.body).append(newScript);
	
}

function fetchSpreadsheet(category) {
	t = (new Date()).getTime();
	newScript = $('<script>')
		.attr('src', category + 's.js');
	$(document.body).append(newScript);
}

function deg2rad(deg) { return deg*Math.PI/180; }
function degsin(deg) { return Math.sin(deg2rad(deg)); }
function degcos(deg) { return Math.cos(deg2rad(deg)); }
