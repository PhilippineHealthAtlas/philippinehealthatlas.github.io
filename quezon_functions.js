var map;
var circle = null;
var geocoder;
var categories = [],
	provinces = [];
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
	//closeBoxMargin: "2px 2px 2px",
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
		'key' : '0Ahdqio3d31tKdDdEN2prM25jUS1kN3k4bWpadWd1Znc',
		'description' : 'Provinces',
		'keyword' : 'provinces',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	}
];


var attributes = {

	'population' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 1500001 ? 'red' : val > 700001 ? 'orange' : val > 450001 ? 'yellow' : (val < 200000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Population (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 20,100 - 200,000'
			+'</br><span style="color:green;background-color:green">__</span> 200,001 - 450,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 450,001 - 700,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 700,001 - 1,500,000'
			+'</br><span style="color:red;background-color:red">__</span> 1,500,001 - 12,500,000'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'phicenrollees' : {
		'is_indicator' : false,
		'description' : 'PHIC enrollees (2010)'
	},
	'nhts' : {
		
		'is_indicator' : false,
		'description' : 'NHTS Households (2011)'
	},
	'ofhhenrolledincct' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 66 ? 'blue' : val > 51 ? 'green' : val > 36 ? 'yellow' : (val < 15 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% HH Enrolled in CCT (2011)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 66-100%'
			+'</br><span style="color:green;background-color:green">__</span> 51-65%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36-50%'
			+'</br><span style="color:orange;background-color:orange">__</span> 16-35'
			+'</br><span style="color:red;background-color:red">__</span> 0-15%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'birthhw' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 71 ? 'green' : val > 61 ? 'yellow' : (val < 50 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Births Attended by Health Professionals (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 71-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 61-70%'
			+'</br><span style="color:orange;background-color:orange">__</span> 51-60%'
			+'</br><span style="color:red;background-color:red">__</span> 3-50%'	
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'fullyimmunizedchildren' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 101 ? 'blue' : val > 91 ? 'green' : val > 81 ? 'yellow' : (val < 70 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'description' : '% Fully Immunized Children (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 101-130%'
			+'</br><span style="color:green;background-color:green">__</span> 91-100%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 81-90%'
			+'</br><span style="color:orange;background-color:orange">__</span> 71-80%'
			+'</br><span style="color:red;background-color:red">__</span> 40-70%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'accesswater' : {
		
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 81 ? 'blue' : val > 61 ? 'green' : val > 41 ? 'yellow' : (val < 20 ? (val == 0 ? 'gray' : 'red') : 'orange'));  
			},
		'description' : '% HHs w/ Access to Piped Water (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 81-100%'
			+'</br><span style="color:green;background-color:green">__</span> 61-80%'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 41-60%'
			+'</br><span style="color:orange;background-color:orange">__</span> 21-40%'
			+'</br><span style="color:red;background-color:red">__</span> 3-20%'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'totallivebirths2009' : {
	
		'is_indicator' : true,
		'categ' : function(val) { 
			return ( val > 30001 ? 'red' : val > 20001 ? 'orange' : val > 10001 ? 'yellow' : (val < 5000 ? (val == 0 ? 'gray' : 'blue') : 'green')); 
			},
		'description' : 'Total Live Births (2009)',
		'details': 
			'</br><span style="color:blue;background-color:blue">__</span> 743 - 5,000'
			+'</br><span style="color:green;background-color:green">__</span> 5,001 - 10,000'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 10,001 - 20,000'
			+'</br><span style="color:orange;background-color:orange">__</span> 20,001 - 30,000'
			+'</br><span style="color:red;background-color:red">__</span> 30,001 - 66,360'
			+'</br><span style="color:gray;background-color:gray">__</span> No Data'
	},
	'totalinfra' : {
		
		'is_indicator' : false,
		'description' : 'HFEP 2011 Budget: Infrastructure (in million Php)'
	},
	'totalequip' : {
		
		'is_indicator' : false,
		'description' : 'HFEP 2011 Budget: Equipment (in million Php)'
	},
	'hfeptotal' : {
		
		'is_indicator' : true,
		'description' : 'HFEP 2011 Budget: Total Cost (in million Php)',
		'categ' : function(val) { 
			return ( val > 95 ? 'blue' : val > 63 ? 'green' : val > 35 ? 'yellow' : (val < 21 ? (val == 0 ? 'gray' : 'red') : 'orange')); 
			},
		'details': 
			'</br><span style="color:red;background-color:red">__</span> 3.35 - 21'
			+'</br><span style="color:orange;background-color:orange">__</span> 22 - 35'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 36 - 63'
			+'</br><span style="color:green;background-color:green">__</span> 63 - 95'
			+'</br><span style="color:blue;background-color:blue">__</span> 96 - 266'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},
	'rnheals' : {
		
		'is_indicator' : false,
		'description' : 'RNheals Batch 1'
	},
	'dttbs' : {
		
		'is_indicator' : false,
		'description' : 'DTTB - Batch 28'
	}
	
	
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
		zoom: 9,
		center : new google.maps.LatLng(14.107, 121.569),
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById("map"), initOptions); 
	geocoder = new google.maps.Geocoder();
	localsearch = new GlocalSearch();
    localsearch.setSearchCompleteCallback(null, onLocalSearch);
		
	for(var layer in layers) {
		addTR(layer, layers[layer].name);
	}
	
	for (var i = 0; i < spreadsheets.length; i++) {
		m = spreadsheets[i];
		categories[m.keyword] = m;
		categories[m.keyword].infoboxes = [];
		var newInput = $('<input>')
			.attr({'type':'checkbox', 'id': 'cb_' + m.keyword, 'name': m.keyword, 'checked':true})
			.click(toggleCheckboxes);
		var newLabel = $('<label>')
			.attr({'for': 'cb_' + m.keyword})
			.html(' '+m.description);
		var newImage = $('<img>')
			.attr({'src': m.marker})
			.html(m.description);
		var newDiv = $('<div>')
			//.append(newInput)
			.append(newImage)
			.append(newLabel);
		$('#addressbar .padding').append(newDiv);
		fetchGoogleSpreadsheet(m.key, 'od6', 'displayFeaturesNew');
		//fetchSpreadsheet(m.keyword);
	}
	
	for (var i in attributes) {
		m = attributes[i];
		if (m.is_indicator) {
			m.keyword = i;
			var newInput = $('<input>')
				.attr({'type':'radio', 'id': 'cb_' + m.keyword , 'name': 'attribute', 'value': m.keyword})
				.click(toggleCheckboxes_attributes);
			var newLabel = $('<label>')
				.attr({'for': m.keyword})
				.html(' '+m.description);
			var newDiv = $('<div>')
				.append(newInput)
				.append(newLabel);
			$('#addressbar .padding').append(newDiv);
		}
	}
	
	var newInput = $('<input>')
			.attr({'type':'button', 'id': 'cb_' + m.keyword , 'name': 'attribute', 'value': 'Clear'})
			.click(clearHide);
		
		var newDiv = $('<div>')
			.append(newInput);
		//$('#addressbar .padding').append(newDiv);
		
	
	var province = [];
	var n_prev = -1;
	for (var i in province_coords) {
		var shape = [],
			pr = province_coords[i],
			pts = pr.points;
		if (n_prev != pr.n) {
			if (province.length > 0) {
				createProvince(province,province_coords[i-1].name);
			}
			province = [];
		}
		for (var j in pts) {
			shape.push(new google.maps.LatLng(pts[j][0],pts[j][1]));
		}
		province.push(shape);
		n_prev = pr.n;
	}
	createProvince(province,province_coords[i].name);

} 

function createProvince(province_coords,name) {
	var province_poly = new google.maps.Polygon({
			paths: province_coords,
			strokeColor: "#000000",
			strokeOpacity: 0.3,
			strokeWeight: 1,
			fillColor: "#ffffff",
			fillOpacity: 0.9
		});
	google.maps.event.addListener(province_poly, 'mouseover', showMarkerInfoWindow);
	province_poly.setMap(map);
	$(province_poly).data('datum', {'name': name});
	provinces[name] = { 
		'marker' : province_poly,
		'name' : name
	};
}

function clearHide() {
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		items[j].marker.setIcon(hospitalIcon);
		items[j].marker.setMap(map);
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
	
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		if (items[j].marker.getMap() == null) {
			items[j].marker.setMap(map);
		} else {
			items[j].marker.setMap(null);
		}
	}	
}

function toggleCheckboxes_attributes() {
	attribute = $(this).attr('value');
	var items = provinces;
	for (var j in items) {
		var m = items[j];
		var datum = $(m.marker).data('datum');
		if (datum != null) {
			m.marker.setOptions({
				'fillColor' : attributes[attribute].categ(datum[attribute])
			});
			$('#legendbar .padding').html(
				'<h2>' + attributes[attribute].description + '</h2>'
				+ ''+ attributes[attribute].details
			);
			//alert(attributes[attribute].categ(datum[attribute]));
		} else {
			alert(0);
		}
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
		+'<h2>'+datum.provname+'</h2>'
		+'<table id="datum">'
		;
	
	for (i in attributes) {
		if (parseFloat(datum[i]) > 0) {
			text+= '<tr><th>' + attributes[i].description + ': </th><td>'+datum[i]+'</td></tr>';
		}
	}
		text += '</table>';
	$('#marker_data .padding').html(text);
	//infoWindow.setContent(text);
	//alert(this);
	//infoWindow.open(map,this);
	
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
	categ = 'provinces';
	//alert(items.length);
	
	j = 0;
	var errors = '';
	for (var i = 0; i < items.length; i++) {
		items[i] = cleanJson(items[i]);
		items[i].ofhhenrolledincct = roundOff(items[i].ofhhenrolledincct,-2);
		if (provinces[items[i].provname] && items[i].categ == 'r') {
			var prov = $(provinces[items[i].provname].marker);
			prov.data('datum', items[i]);
			j++;
		} else if (items[i].categ == 'r') {
			errors += '\n' + (items[i].provname);
		}
		//alert(items[i].latitude);
		//if (items[i].latitude);
		/*
		items[i].category = categ;
		items[i].position = new google.maps.LatLng(
			parseFloat(items[i].latitude), 
			parseFloat(items[i].longitude));
		var marker = new google.maps.Marker({
			map: map,
			position: items[i].position,
			icon: icon
		});
		google.maps.event.addListener(marker, 'click', showMarkerInfoWindow);
		//google.maps.event.addListener(marker, 'mouseover', showMarkerInfoWindow);
		
		items[i].marker = marker;
		$(marker).data('datum', items[i]);
		*/
	}
	for (var i in provinces) {
		if ($(provinces[i].marker).data('datum')['provname']) {
		} else {
			alert(i);
		}
	}
	//alert(j);
	//alert(errors);
	//categories[categ].items = items;
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
