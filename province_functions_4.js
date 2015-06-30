var map;
var circle = null;


function parse_geo_json(GEOJSON, gjgroup) {
	for ( var i in GEOJSON.features) {
		province_coords.push({
			name: GEOJSON.features[i].properties[GEOJSON.name_field || settings.geojson_name ],
			coordinates: GEOJSON.features[i].geometry.coordinates,
			group: gjgroup,
			n: i,
			is_multi: (GEOJSON.features[i].geometry.type != 'Polygon')
		});
	}
}

if (typeof GEOJSON == 'object') {
	//alert(0);
	province_coords = [];
	parse_geo_json(GEOJSON,'');
}
if (typeof GEOJSONS == 'object') {
	province_coords = [];
	for (var j in GEOJSONS) {
		parse_geo_json(GEOJSONS[j],j);
	}
}


/*var current_province = stubbify(province_coords[0].name);*/
if (typeof categories == 'undefined') var categories = [];
var	provinces = [],
	cities = [];
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
var categ_ss = {};


var infoWindow = new google.maps.InfoWindow({ pixelOffset: google.maps.Size(0,0), maxWidth: 200});
var colors = ['yellow', 'green', 'red', 'gray'], colorIcons = {};

function loadPolygonData(m) {
		//alert(m.keyword);
	categ_ss[m.key] = m.keyword;
	//alert(m.key + '=' + m.keyword);
	console.log('categories before');
	console.log(categories);
	categories[m.keyword] = m;
	categories[m.keyword].infoboxes = [];
	console.log('categories after');
	console.log(categories);
	var newInput = $('<input>')
		.attr({'type':'radio', 'id': 'cb_' + m.keyword, 'name': 'spreadsheet','value': m.keyword, 'checked':true})
		.click(togglePolygonCheckboxes);
	var newLabel = $('<label>')
		.attr({'for': 'cb_' + m.keyword})
		.html(' '+m.description);
	var newImage = $('<img>')
		.attr({'src': m.marker})
		.html(m.description);
	var newDiv = $('<div>')
		.append(newInput)
		//.append(newImage)
		.append(newLabel);
	$('#addressbar .padding').append(newDiv);
	fetchGoogleSpreadsheet(m.key, 'displayPolygonsNew');
}

$(document).ready(loadPolygonSpreadsheets); 


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
	if (val == '') return 'gray';
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}

function loadPolygonSpreadsheets() {
	
	var initOptions = {
		zoom: (settings.zoom ? settings.zoom : 6),
		center : (settings.center ? new google.maps.LatLng(settings.center[0],settings.center[1]) : new google.maps.LatLng(11.6137, 121.0376)),
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById("map"), initOptions); 
		
	for(var layer in layers) {
		addTR(layer, layers[layer].name);
	}
	if (typeof(showOtherLayers) == 'function') {
		showOtherLayers();
	}
	if (typeof polygon_spreadsheets == 'undefined') polygon_spreadsheets = spreadsheets;
	for (var i = 0; i < polygon_spreadsheets.length; i++) {
		if (polygon_spreadsheets[i].is_title) {
			var newLabel = $('<h1>')
				.html(polygon_spreadsheets[i].description);
			var newDiv = $('<div>')
				.append(newLabel);
			$('#addressbar .padding').append(newDiv);
		} else {
			loadPolygonData(polygon_spreadsheets[i]);
		}
		//fetchSpreadsheet(m.keyword);
	}
	
	
	var newLine = $('<hr>');
	$('#addressbar .padding').append(newLine);
	
	for (var i in attributes) {
		m = attributes[i];
		if (m.details_) {
			m.details = '<b>Legend:</b><br/>' +  m.details_();
		}
		if (m.is_indicator) {
			m.keyword = i;
			var newInput = $('<input>')
				.attr({'type':'radio', 'id': 'cb_' + m.keyword , 'name': 'attribute', 'value': m.keyword})
				.click(togglePolygonCheckboxes_attributes);
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
		.attr({'type':'radio', 'id': 'cb_reset' , 'name': 'attribute','value': 'reset', 'checked':true})
		.click(togglePolygonCheckboxes_attributes);
	var newLabel = $('<label>')
		.attr({'for': 'cb_reset'})
		.html(' RESET');
	var newDiv = $('<div>')
		.append(newInput)
		//.append(newImage)
		.append(newLabel);
	$('#addressbar .padding').append(newDiv);
	
	
	/*
	if (typeof(m)) {
		var newInput = $('<input>')
			.attr({'type':'button', 'id': 'cb_' + m.keyword , 'name': 'attribute', 'value': 'Clear'})
			.click(clearHide);
		
		var newDiv = $('<div>')
			.append(newInput);
		//$('#addressbar .padding').append(newDiv);
	}
	*/
	
	var province = [];
	var n_prev = -1;
	for (var i in colors) {
		colorIcons[colors[i]] = new google.maps.MarkerImage(
			'circle_'+colors[i]+'.png',
			new google.maps.Size(16, 16),
			new google.maps.Point(0, 0),
			new google.maps.Point(8, 8)
		);
	}
	if (province_coords[0].points) {
		//console.log('use points');
		for (var i in province_coords) {
				var shape = [],
					group = province_coords[i].group || '',
					pr = province_coords[i],
					pts = pr.points;
				if (n_prev != pr.n) {
					if (province.length > 0) {
						createProvince(province,province_coords[i-1].name,group);
					}
					province = [];
				}
				for (var j in pts) {
					shape.push(new google.maps.LatLng(pts[j][0],pts[j][1]));
				}
				province.push(shape);
				n_prev = pr.n;
		} createProvince(province,province_coords[i].name);
	} else {
		for (var i in province_coords) {
			var province = [], 
				coords = province_coords[i].coordinates,
				group = province_coords[i].group || '';
            if (province_coords[i].is_multi) {
                for (y in coords) {
                    for (x in coords[y]) {
                        var shape = [], pts = coords[y][x];
                        for (j in pts) {
                            shape.push(new google.maps.LatLng(pts[j][1],pts[j][0]));
                        }
                        province.push(shape);
                    }
                }
            }
			for (x in coords) {
				var shape = [], pts = coords[x];
				for (j in pts) {
					shape.push(new google.maps.LatLng(pts[j][1],pts[j][0]));
				}
				province.push(shape);
			}
			createProvince(province, province_coords[i].name, group);
		}
	}
	if (settings.cities) {
		for (var i in city_coords) {
			first = city_coords[i];
			//var city_marker = new google.maps.Marker({ 
			var city_marker = new google.maps.Circle({ 
				//icon: colorIcons['gray'],
				//position: new google.maps.LatLng(parseFloat(first.lat), parseFloat(first.lng)),
				radius: Math.sqrt(first.popn)*30,
				fillOpacity: 0.5,
				strokeColor: '#000',
				strokeOpacity: 1,
				strokeWeight: 1,
				fillColor: '#777',
				center: new google.maps.LatLng(parseFloat(first.lat), parseFloat(first.lng)),
				map: map,
				zIndex: 120- Math.floor(first.popn/10000)
			});
			google.maps.event.addListener(city_marker, 'click', showPolygonInfoWindow);
			$(city_marker).data('datum', {name:first.name});
			//console.log('added city_marker listener to ' + first.name);
			cities[stubbify(first.name)] = {
				'marker' : city_marker,
				'name' : first.name
			}
		}
		togglePolygonCheckboxes_attributes();
		
	}

	
	
	var input = document.getElementById('searchTextField');
	if (input) {
		var options = {
			types: ['(regions)'
				//,'(regions)'
				]
			, componentRestrictions: {country: 'ph'}
		};

		autocomplete = new google.maps.places.Autocomplete(input, options);
		
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			input.className = '';
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				// Inform the user that the place was not found and return.
				input.className = 'notfound';
				return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
				console.log(place.geometry.viewport	);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(10);	// Why 17? Because it looks good.
			}
			
		});
	}
} 


function createProvince(province_coords,name, group) {
	var province_poly = new google.maps.Polygon({
		paths: province_coords,
		strokeColor: "#000000",
		zIndex: 10,
		strokeOpacity: 0.9,
		strokeWeight: 1,
		fillColor: "#777",
		fillOpacity: 0.5
	});
	google.maps.event.addListener(province_poly, 'click', showPolygonInfoWindow);
	$(province_poly).data('datum', {'name': name, 'group' : group});
	
	var rgFocus = /focus=([a-z]+)/;
	var pname = false;
	if (location.href.match(rgFocus)) {
		pname = rgFocus.exec(location.href)[1];
	}
    //console.log('adding to provinces: ' + name);
	provinces[stubbify(name)] = { 
		'marker' : province_poly,
		'name' : name,
		'group' : group
	}
    //console.log(provinces[stubbify(name)]);
	if (!pname || pname == stubbify(name)) {
		province_poly.setMap(map);
		latlngbounds = new google.maps.LatLngBounds();
		
		//alert(latlngbounds);
	}
	if (pname == stubbify(name)) {
		for (var x in province_coords) {
			for (var y in province_coords[x]) {
				latlngbounds.extend(province_coords[x][y]);
				//alert(province_coords[x][y]);
			}
		}
		//map.fitBounds(latlngbounds);
	}
}

function stubbify(name) {
	if (name)
	return name.toLowerCase().replace(/[^a-z0-9_]+/g,'');
	else return '';
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

function togglePolygonCheckboxes () {
	showPolygonInfoWindow();
	togglePolygonCheckboxes_attributes();
}


function togglePolygonCheckboxes_attributes() {	
	//attribute = $(this).attr('value');
	showPolygonInfoWindow();
	
	var attribute = $('input:radio[name=attribute]:checked').val(),
	items = provinces, categ = $('input:radio[name=spreadsheet]:checked').val();
	var datas = '<table><tr><th>Name</th><th>Count</th></tr>', total = 0;
	console.log('categ=' + categ);
	console.log(items);
	for (var j in items) {
		var m = items[j];
		var datum = $(m.marker).data('datum' + categ);
		//console.log(datum);
		console.log('datum = ');
		console.log(m);
		console.log($(m.marker).data());
		if (m.group != '' && m.group != categ) {	
			m.marker.setMap(null);
		} else if (m.group != '') {
			m.marker.setMap(map);
		}
		if (attribute == 'reset') {
			m.marker.setOptions({
				fillColor : '#777'
			});
		} else if (datum != null) {
			if (attributes[attribute]) {
				m.marker.setOptions({
					fillColor : attributes[attribute].categ(datum[attribute])
				});
			} else {
				m.marker.setOptions({
					fillColor : '#777'
				});
				console.log('attribute ' + attribute + ' not found');
			}
			
			//console.log(m.name + ' = ' + datum[attribute]);
			if (parseInt(datum[attribute]) > 0) {
				datas += '<tr><td>'+m.name+'</td><th>'+datum[attribute]+'</th></tr>';
				total += parseInt(datum[attribute]);
			}
		} else {
			
		}
	}
	var details = attributes[attribute].details;
	datas += '<tr><th>Total</th><th>'+total+'</th></tr>' + '</table>';
	$('#legendbar .padding').html(
		'<h2>' + attributes[attribute].description + '</h2>'
		+ ''+ (typeof details === 'function' ? attributes[attribute].details() : details)
		+ (settings.showList ? datas : '')
	);
	items = cities;
	for (var j in items) {
		var m = items[j];
		var datum = $(m.marker).data('datum' + categ);
		if (datum != null) {
			m.marker.setOptions({
					fillColor: attributes[attribute].categ(datum[attribute])
			});
		} else {
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

showPolygonInfoWindow = function () {
	//current_province = showPolygonInfoWindow
	var province_name = '';
	if ($(this).data('datum') != null) {
		current_province = stubbify($(this).data('datum').name);
		province_name = $(this).data('datum').name;
		//alert(current_province);
	} 
	provname = current_province;
	//console.log (provname);
	var prov;
	if  (provinces[provname]) prov =  $(provinces[provname].marker); else prov = $(cities[provname].marker);
	var categ = $('input:radio[name=spreadsheet]:checked').val(),
		//prov = $(provinces[provname].marker),
		datum = prov.data('datum' + categ),
		attribute = $('input:radio[name=attribute]:checked').val(),
		text = '';
	//alert(provname);
		
	if (datum != null) {
		console.log(provinces[provname]);
		console.log(datum);
		text = 
	//		categories[datum.category].description +':'
			''
			+'<h2>'+province_name+ ' ('  + categ + ')</h2>'
			+'<table id="datum">'
			;
		
		for (i in attributes) {
			//if (parseFloat(datum[i]) > 0) {
			//alert(i);
			
			if (datum[i] !=null && datum[i] != '') {
				text+= '<tr id="data_'+i+'"' + (i == attribute ? ' class="active"' : '') +'><th>' 
				+ attributes[i].description + ': </th>'
				+ (attributes[i].is_group ? '' : ''
					+' <td class="data">'+(datum[i] > 1000 ? commatize(datum[i]) : attributes[i].formatter ? attributes[i].formatter(datum[i]) : datum[i]) +'</td>' 
					+ '<td>' + (attributes[i].is_indicator ? 
						'<span onmouseout="hideHelper()" onmouseover="showHelper(\''+ i +'\')" style="background-color:' + attributes[i].categ(datum[i]) + ';color:' + attributes[i].categ(datum[i]) + '">__</span> '
						: '') + '</td>'
				)
				+'</tr>';
			}
		}
		text += '</table>';
	} else {
		
		text = 
	//		categories[datum.category].description +':'
			''
			+'<h2>'+province_name+ ' ('  + categ + ')</h2>'
	}
	$('#rightpanel').show();
	$('#marker_data .padding').html(text);
	//infoWindow.setContent(text);
	//alert(this);
	//infoWindow.open(map,this);
	
}

function showHelper(attribute) {
	$('#helper .padding').html(attributes[attribute].details);
	$('#helper').css({
		'display':'block',
		'top': ($('#data_'+attribute).position().top + 20) + 'px'
	});
}

function hideHelper() {
	$('#helper').css('display','none');
}

function sortLocations(a,b) {
	return a.distance - b.distance;
}

function roundOff(num, dec) {
	return Math.round(num*Math.pow(10,-dec))/Math.pow(10,-dec);
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
var SPREADSHEET_URL_BASE = 'https://spreadsheets.google.com/feeds/list/',
	SPREADSHEET_URL_END = '/public/values';


function displayPolygonsNew(result) {
	var items = result.feed.entry;
	ss_id = result.feed.id.$t.replace(SPREADSHEET_URL_BASE,'').replace(SPREADSHEET_URL_END,'');
	categ = categ_ss[ss_id];
	var errors = '';
	j = 0;
	//alert(categ);
	for (var i = 0; i < items.length; i++) {
		
		items[i] = cleanJson(items[i]);
		ignorecateg = false;
		if (settings && settings.provname) {
			//alert('[' + items[i][settings.provname] + ']');
			items[i].provname = items[i][settings.provname];
			ignorecateg = true;
		} else {
			//alert(1);
		}
		if (items[i].ofhhenrolledincct) items[i].ofhhenrolledincct = roundOff(items[i].ofhhenrolledincct,-2);
		if (provinces[stubbify(items[i].provname)])  {
			var prov = $(provinces[stubbify(items[i].provname)].marker);
			prov.data('datum' + categ, items[i]);
			j++;
		} else 	if (items[i].provname && cities[stubbify(items[i].provname)]) {
			var prov = $(cities[stubbify(items[i].provname)].marker);
			prov.data('datum' + categ, items[i]);
			j++;
		} else {
			errors += '\n' + i + ' | ' + (items[i].provname);
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
		google.maps.event.addListener(marker, 'click', showPolygonInfoWindow);
		//google.maps.event.addListener(marker, 'mouseover', showPolygonInfoWindow);
		
		items[i].marker = marker;
		$(marker).data('datum', items[i]);
		*/
	}
	if (errors.length > 0) //console.log(errors);
	if (1==1) {
	//alert(0);
	for (var i in provinces) {
		//alert('datum'+categ);
		if (!$(provinces[i].marker).data('datum' + categ)) {
			//provinces[i].marker.setMap(null);
			//console.log(i);
			//alert('('+i+')');
		} else {
		if ($(provinces[i].marker).data('datum' + categ)['provname']) {
			//alert('['+i+']');
		} else {
			//alert(i);
		}
		}
	}
	}
}



function fetchGoogleSpreadsheet(ws_key, callback) {
	t = (new Date()).getTime();
	script_url = 'https://spreadsheets.google.com/feeds/list/'
				+ws_key
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