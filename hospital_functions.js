var map;
var circle = null;
var geocoder;
if (typeof categories == 'undefined') var categories = [];
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
var latlngbounds = new google.maps.LatLngBounds();
var SPREADSHEET_URL_BASE = 'https://spreadsheets.google.com/feeds/list/',
	SPREADSHEET_URL_END = '/public/values',
	categ_ss = {};
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
//https://docs.google.com/spreadsheet/tq?tq=SELECT+B,G,H,I,O+WHERE+H%3E0&key=0Ai5xV-_s2GaFdF9Zc1NNeU1qNllqYjFWZWZKQWJKVlE&hl=en_US&gid=0&tqx=responseHandler:wayne

var infoWindow = new google.maps.InfoWindow({ pixelOffset: google.maps.Size(0,0), maxWidth: 200, disableAutoPan: true});

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

function loadPointsData(m) {
	categ_ss[m.key] = m.keyword;
	//console.log('keyword = ' + m.keyword);
	//console.log(m);
	//console.log('categories before');
	//console.log(categories);
	categories[m.keyword] = m;
	categories[m.keyword].infoboxes = [];
	//console.log('categories after');
	//console.log(categories);
	var newInput = $('<input>')
		.attr({'type':'checkbox', 'id': 'cb_' + m.keyword, 'name': m.keyword, 'checked':(m.hideLayer ? false : true)})
		.click(togglePointCheckboxes);
	var newLabel = $('<label>')
		.attr({'for': 'cb_' + m.keyword})
		.html(' '+m.description);
	var newImage = $('<img>')
		.attr({'src': m.marker})
		.html(m.description);
	var newDiv = $('<div>')
		.append(newInput)
		.append(newImage)
		.append(newLabel);
	//console.log('--CATEGORIES--');
	//console.log(categories);
	$('#addressbar .padding').append(newDiv);
	fetchGoogleSpreadsheet(m.key, 'displayPointsNew');
}



$(document).ready(loadPointSpreadsheets); 

function loadPointSpreadsheets() {
	var initOptions = {
		zoom: 6,
		center : new google.maps.LatLng(14.6137, 121.0376),
		disableDefaultUI: false,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById("map"), initOptions); 
		
	for (var i = 0; i < spreadsheets.length; i++) {
		if (spreadsheets[i].is_title) {
			var newLabel = $('<h1>')
				.html(' '+spreadsheets[i].description);
			var newDiv = $('<div>')
				.append(newLabel);
			//console.log('--CATEGORIES--');
			//console.log(categories);
			$('#addressbar .padding').append(newDiv);
		} else {
			loadPointsData(spreadsheets[i]);
		}
	}
	$('#addressbar .padding').append($('<hr/>'));
	if (typeof facility_attributes != 'undefined') {
		
		
		for (var i in facility_attributes) {
			var attr = facility_attributes[i];
			attr.keyword = i;
			var newInput = $('<input>')
				.attr({'type':'radio', 'id': 'radio_' + attr.keyword, 'name': 'fac_attr','value': attr.keyword, 'checked':false})
				.click(togglePointRadioboxes);
			var newLabel = $('<label>')
				.attr({'for': 'cb_' + attr.keyword})
				.html(' '+attr.description);
			var newDiv = $('<div>')
				.append(newInput)
				//.append(newImage)
				.append(newLabel);
			$('#addressbar .padding').append(newDiv);
		}
	}
	if (services.length > 0) {
		for (var i in services) {
			m = services[i];
			m.keyword = i;
			var newInput = $('<input>')
				.attr({'type':'checkbox', 'id': 'cb_' + m.keyword , 'name': m.keyword})
				.click(togglePointCheckboxes_services);
			var newLabel = $('<label>')
				.attr({'for': m.keyword})
				.html(' '+m.description);
			var newDiv = $('<div>')
				.append(newInput)
				.append(newLabel);
			$('#addressbar .padding').append(newDiv);
		}
		
		var newInput = $('<input>')
				.attr({'type':'button', 'id': 'cb_clear' , 'name': 'service', 'value': 'Clear'})
				.click(clearHide);
			
			var newDiv = $('<div>')
				.append(newInput);
			$('#addressbar .padding').append(newDiv);
	}
	$('#addressbar .padding').append($('<hr/>'));
}
function togglePointRadioboxes() {
	var attr_id = $(this).attr('value'),
		attr = facility_attributes[attr_id];
	//console.log(attr_id);
	//console.log(attr);
	for (var categ in categories) {
        //console.log(categ);
        var categ_is_checked = ($('#cb_'+categ).attr('checked'));
        var items = categories[categ].items;
        if (items) {
			//console.log(items.length);
            for (var j = 0; j < items.length; j++) {
                if (items[j].marker) {
					var attr_val = items[j][attr_id];
					//console.log(attr_val);
					var icon_val = attr.categ(attr_val);
					//console.log(icon_val);
					items[j].marker.setIcon(icon_val);
                }
            }	
        }
    }
	$('#legendbar .padding').html('<h2>' + attr.description + '</h2>' + attr.details);
	
}

function clearHide() {
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		//items[j].marker.setIcon(hospitalIcon);
		items[j].marker.setMap(map);
	}
}

hideInfotipWindow = function() {
	infoWindow.close();
}



function togglePointCheckboxes () {
	var categ = $(this).attr('name');
	//console.log('categ = ' + categ);
	var infoboxes = categories[categ].infoboxes;
	$('#div_'+categ).toggleClass('hidden');
	for (var j = 0; j < infoboxes.length; j++) {
		if (infoboxes[j].getMap() == null) {
			infoboxes[j].setMap(map);
		} else {
			infoboxes[j].setMap(null);
		}
	}
	var categ_is_checked = ($('#cb_'+categ).attr('checked'));
	var items = categories[categ].items;
	for (var j = 0; j < items.length; j++) {
		if (items[j].marker) {
			if (categ_is_checked) {
				items[j].marker.setMap(map);
			} else {
				items[j].marker.setMap(null);
			}
		}
	}	
}

function refreshMarkers() {
    var should_show = map.getZoom() >= settings.minZoom;
    //console.log(should_show);
	//console.log(categories);
    for (var categ in categories) {
        //console.log(categ);
        var categ_is_checked = ($('#cb_'+categ).attr('checked'));
        var items = categories[categ].items;
        if (items) {
			//console.log(items.length);
            for (var j = 0; j < items.length; j++) {
                if (items[j].marker) {
                    if (categ_is_checked && should_show) {
                        items[j].marker.setMap(map);
                    } else {
                        items[j].marker.setMap(null);
                    }
                }
            }	
        }
    }
    
}

function togglePointCheckboxes_services() {
	service = $(this).attr('name');
	for (var categ in categories) {
		var items = categories[categ].items;
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
				if (datum) {
				if ((datum[k] == '1' || parseInt(datum[k]) > 0) && $('#cb_' + k).attr('checked')) {
					//alert(datum[k]);
					n++;
				}
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


function roundOff(num, dec) {
	return Math.round(num*Math.pow(10,-dec))/Math.pow(10,-dec);
}

showPointInfoWindow = function () {
	var datum = $(this).data('datum');
	var text = 
//		categories[datum.category].description +':'
		''
		+'<h1>'+datum.name+'</h1>'
		+(datum['address'] ? '<br class="address"/>' + datum['address'] + ', ' : '')
		+(datum['city'] ? ', ' + datum['city'] : '')
		+(datum['province'] ? ', ' + datum['province'] : '')
		+(datum['region'] ? '<br/>Region ' + datum['region'] : '')
		+ getInfoText(datum);
	//if (typeof settings != 'undefined' && settings.noInfoWindow) {
	
	$('#rightpanel').show();
		$('#marker_data .padding').html(text);
	/*} else {
		infoWindow.setContent(text);
		infoWindow.open(map,(datum.marker||datum));
	}*/
	
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

function displayPointsNew(result) {
	var items = result.feed.entry,
	ss_id = result.feed.id.$t.replace(SPREADSHEET_URL_BASE,'').replace(SPREADSHEET_URL_END,'');
	categ = categ_ss[ss_id];
	//alert(ss_id);
	//alert(0);
	iconsize = (categories[categ].size ? categories[categ].size : 10);
	var icon = new google.maps.MarkerImage(
		categories[categ].marker,
		new google.maps.Size(iconsize, iconsize),
		new google.maps.Point(0, 0),
		new google.maps.Point(iconsize/2, iconsize/2));
	//alert(items.length);
	//alert(items.length);
	//console.log(items.length);
	if (typeof(items) != 'undefined') {
		for (var i = 0; i < items.length; i++) {
			items[i] = cleanJson(items[i]);
			if (items[i].xrayservices) {
				items[i].xrayservices = (items[i].xrayservice.length > 0 ? '1' : '0');
			}
			//alert(items[i].latitude);
			//if (items[i].latitude);
			
			if (parseFloat(items[i].latitude) > 0) {
				items[i].category = categ;
				items[i].position = new google.maps.LatLng(
					parseFloat(items[i].latitude), 
					parseFloat(items[i].longitude));
	               
				latlngbounds.extend(items[i].position);
				var marker = new google.maps.Marker({
					position: items[i].position
					//,icon: icon
				});
	            //console.log('minzoom = ' + settings.minZoom + ', currzoom = ' + map.getZoom());
	            
	            if (typeof settings != 'undefined' && settings.minZoom && map.getZoom() <= settings.minZoom) {
	                
	            }
	            else if (!categories[categ].hideLayer) {   
					marker.setMap(map);
	            }
	            
				if (categories[categ].zIndex) {
					marker.setZIndex(categories[categ].zIndex);
				}
				marker.setIcon(icon);
				google.maps.event.addListener(marker, 'click', showPointInfoWindow);
				//google.maps.event.addListener(marker, 'mouseover', showPointInfoWindow);
				//google.maps.event.addListener(marker, 'mouseover', showPointInfoWindow);
				items[i].marker = marker;
				$(marker).data('datum', items[i]);
			}
		}
	}
    if (typeof settings != 'undefined' && settings.minZoom) {
        google.maps.event.addListener(map, 'zoom_changed', refreshMarkers );
        google.maps.event.trigger(map, 'zoom_changed');
    }
	categories[categ].items = items;
}



function fetchGoogleSpreadsheet(ws_key, callback) {
	t = (new Date()).getTime();
	
	script_url = SPREADSHEET_URL_BASE
				+ ws_key
				+ SPREADSHEET_URL_END
				+ '?alt=json-in-script'
				+ '&callback='+callback
				+ '&t='+(roundOff((new Date()).getTime(),-2));
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


