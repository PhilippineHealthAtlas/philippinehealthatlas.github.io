var polygon_spreadsheets = [
{   
		'key' : '1B3cPqpTHTLER9XNiTiYZ-VRemCnYlHQE2TaDOAE_FD8/ocy',
		description : 'Medical Missions 2011',
		'keyword' : 'Medical Missions 2011',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'
	},
	{
		'key' : '1B3cPqpTHTLER9XNiTiYZ-VRemCnYlHQE2TaDOAE_FD8/odb',
		description : 'Medical Missions 2012',
		'keyword' : 'Medical Missions 2012',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'	
	},
	{
		'key' : '1B3cPqpTHTLER9XNiTiYZ-VRemCnYlHQE2TaDOAE_FD8/ocu',
		description : 'Medical Missions 2013',
		'keyword' : 'Medical Missions 2013',
		'marker' : 'static/hospital_.png',
		'callback' : 'load_provinces'	
	}
], spreadsheets = [
	{ 
		'is_title' : true,
		'description' : '<br/><h2>Health Facilities</h2>'
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/od9',
		'description' : 'DOH Retained Hospital',
		'keyword' : 'DOH_Retained_Hospital',
		'marker' : '1hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/od6',
		'description' : 'LGU Hospital',
		'keyword' : 'LGU_Hospital',
		'marker' : '2hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocy',
		'description' : 'Military Hospital',
		'keyword' : 'Military_Hospital',
		'marker' : '3hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1hcS-OTajzxhLSoGhpVLyxaHNArA8cPdk2Ks6hELKl9E/ocz',
		'description' : 'University Hospital',
		'keyword' : 'University_Hospital',
		'marker' : '4hospital.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1pR7ANIDk7GlQu_izej3QVUiZJw3JxvYL7WeXhCcE6QI/od6',
		'description' : 'Private Hospitals',
		'keyword' : 'Private_Hospitals',
		'marker' : '5hospital.png',
		'hideLayer' : true,
		size:12,
		zIndex: 1
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/od7',
		'description' : 'Rural Health Unit',
		'keyword' : 'Rural_Health_Unit',
		'marker' : 'rhu12x12.png',
		'hideLayer' : true,
		size:12
	},
	{
		'key' : '1qRdfeR2h6pxZM8MI2Fnn6kM276tIurBaLx2FvBC0aXE/odb',
		'description' : 'Barangay Health Station',
		'keyword' : 'Barangay_Health_Station',
		'marker' : 'bhs12x12.png',
		'hideLayer' : true,
		size:12
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
	'provname' : 'provname',
	showList : false
};
function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}

function twodecimals(val) {
	if (val < 0) return "";
	return (Math.round(val*100) + '').replace(/(..)$/,'.$1');
}
function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:blue;background-color:blue">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.target_cutoff + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> None';
	} else {
	return '</br><span style="color:blue;background-color:blue">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + this.ave_cutoff + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> None';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'blue') )); 
	} else {
		return ( val > this.target_cutoff ? 'blue' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 ? 'gray' : 'red') )); 
	}
}

function getOne(val) {
	return (parseInt(val) > 0 ? this.myColor : 'grey');
}

function getOneDetails() {
	return '</br><span style="color:'+this.myColor+';background-color:'+this.myColor+'">__</span> Covered ' 
		   +'</br><span style="color:grey;background-color:grey">__</span> None ';
}
function getDetails() {
	if (this.is_reverse) {
	return '</br><span style="color:green;background-color:green">__</span> 0 - ' + this.target_cutoff
			+ ( this.ave_cutoff > this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1)  + ' - ' + this.ave_cutoff  : '')
			+'</br><span style="color:red;background-color:red">__</span> > ' + Math.max(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	} else {
	return '</br><span style="color:green;background-color:green">__</span> > ' + this.target_cutoff
			+ ( this.ave_cutoff < this.target_cutoff ? '</br><span style="color:yellow;background-color:yellow">__</span> ' + (this.ave_cutoff + 1)  + ' - ' + this.target_cutoff : '')
			+'</br><span style="color:red;background-color:red">__</span> 0 - ' + Math.min(this.target_cutoff, this.ave_cutoff)
			+'</br><span style="color:gray;background-color:gray">__</span> No Data';
	}
}

function getCategory(val) {
	if (this.is_reverse) {
		return ( val > this.ave_cutoff ? 'red' : ( val > this.target_cutoff ? 'yellow' : (val < 0 || val == '' ? 'gray' : 'green') )); 
	} else {
		return ( val > this.target_cutoff ? 'green' : ( val > this.ave_cutoff ? 'yellow' : (val < 0 || val == ''? 'gray' : 'red') )); 
	}
}
function nonee(val) {
return val;
}

function lister(text) {
    return '</td></tr><tr><td colspan="3"><div style="max-height:500px; overflow:auto">'+text+'</div>';
}
var attributes = {

	'nummedmission' : {
            is_indicator : true,
            ave_cutoff: 0,
            target_cutoff: 2,
			description : 'No. of Missions',
            categ : getCategory, formatter : commatize, details_: getDetails
	},
	'numprioritymunicipality' : {
			'is_indicator' : true,
		'description' : 'No. of Priority Municipality',
		'categ' : function(val) { 
			return ( val > 20 ? 'red' : val > 15 ? 'blue' : val > 10 ? 'green' : (val < 6 ? (val == 0 ? 'gray' : 'orange') : 'yellow')); 
			},
		'details': 
			'</br><span style="color:orange;background-color:orange">__</span> 1 - 5'
			+'</br><span style="color:yellow;background-color:yellow">__</span> 6 - 10'
			+'</br><span style="color:green;background-color:green">__</span> 11 - 15'
			+'</br><span style="color:blue;background-color:blue">__</span> 16 - 20'
			+'</br><span style="color:red;background-color:red">__</span> &gt; 21'
			+'</br><span style="color:gray;background-color:gray">__</span> 0'
	},	
	'medicalmission' : {
	
		is_indicator : true,
		myColor: '#ffff00',
		description : 'Medical Mission',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'surgicalmission' : {
	
		is_indicator : true,
		myColor: '#E01B6A',
		description : 'Surgical Mission',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},	
	'medicalsurgicalmission' : {
	
		is_indicator : true,
		myColor: '#007f00',
		description : 'Medical-Surgical Mission',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'dentalmission' : {
	
		is_indicator : true,
		myColor: '#1B77E0',
		description : 'Dental Mission',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'medicaldentalmission' : {
	
		is_indicator : true,
		myColor: '#1BDDE0',
		description : 'Medical-Dental Mission',
		categ : getOne, formatter : nonee, details_: getOneDetails
	},
	'listed' : {
            is_indicator : false,
            description : 'List',
            formatter:lister	
	
	}
}
function getInfoText(datum) {
	return ''
	// Basic Information
		+ (datum.dohfacilitycode || datum.adr || datum.facilitytype  || datum.completeaddress || datum.medicaldirector || datum.headofthefacility || datum.bnb || datum.bemonc || datum.birthingfattached  ? '<br/><br/><h2>Basic Information</h2>':'')
		+ (datum.dohfacilitycode && datum.dohfacilitycode.length > 0? '<br/><b>DOH Health Facility Code</b>: ' + datum.dohfacilitycode : '')
		+ (datum.adr && datum.adr.length > 0? '<br/><b>Address</b>: ' + datum.adr : '')
		+ (datum.facilitytype && datum.facilitytype.length > 0? '<br/><b>Type of Facility</b>: ' + datum.facilitytype : '')
		+ (datum.completeaddress && datum.completeaddress.length > 0? '<br/><b>Complete Address</b>: ' + datum.completeaddress : '')
		+ (datum.medicaldirector && datum.medicaldirector.length > 0? '<br/><b>Medical Director</b>: ' + datum.medicaldirector : '')
		+ (datum.headofthefacility && datum.headofthefacility.length > 0? '<br/><b>Head of the Facility</b>: ' + datum.headofthefacility : '')
		+ (datum.telephonenumber && datum.telephonenumber.length > 0? '<br/><b>Telephone Number</b>: ' + datum.telephonenumber : '')
		+ (datum.cellphonenumber && datum.cellphonenumber.length > 0? '<br/><b>Cellphone Number</b>: ' + datum.cellphonenumber : '')
		+ (datum.emailadd && datum.emailadd.length > 0? '<br/><b>Email Address</b>: ' + datum.emailadd : '')
		+ (datum.ophours && datum.ophours.length > 0? '<br/><b>Operational Hours</b>: ' + datum.ophours : '')
		+ (datum.catchmentpopulation && datum.catchmentpopulation.length > 0? '<br/><b>Catchment Population</b>: ' + datum.catchmentpopulation : '')
		+ (datum.ownership && datum.ownership.length > 0? '<br/><b>Ownership</b>: ' + datum.ownership : '')
		+ (datum.authorizedbedcapacity && datum.authorizedbedcapacity.length > 0? '<br/><b>Authorized Bed Capacity</b>: ' + datum.authorizedbedcapacity : '')
		+ (datum.servicecapability && datum.servicecapability.length > 0? '<br/><b>Service Capability</b>: ' + datum.servicecapability : '')
		+ (datum.bnb && datum.bnb.length > 0? '<br/><b>Botika ng Barangay nearby</b>: ' + datum.bnb :'')
		+ (datum.bemonc && datum.bemonc.length > 0? '<br/><b>BEmONC Facility</b>: ' + datum.bemonc : '')
		+ (datum.birthingfattached && datum.birthingfattached.length > 0? '<br/><b>Attached Birthing Facility</b>: ' + datum.birthingfattached : '')
		
		// Referral Hospital
		+ (datum.referralgovthosp || datum.referralprihosp? '<br/><br/><h2>Referral Hospital</h2>':'')
		+ (datum.referralgovthosp && datum.referralgovthosp.length > 0? '<br/><b>Government Hospital</b>: ' + datum.referralgovthosp : '')
		+ (datum.referralprihosp && datum.referralprihosp.length > 0? '<br/><b>Private Hospital</b>: ' + datum.referralprihosp : '')
		
		
		// HFEP Allocation
		+ (datum.pcofequip2011 || datum.pcofequip2012 || datum.pcofinfra2011 || datum.pcofinfra2012 || datum.pcofinfra2013 || datum.pcofequip2013 ? '<br/><br/><h2>HFEP Allocation</h2>':'')
		+ (datum.pcofinfra2013 && datum.pcofinfra2013.length > 0? '<br/><b>HFEP Infrastracture 2013</b>: ' + datum.pcofinfra2013 : '')
		+ (datum.pcofequip2013 && datum.pcofequip2013.length > 0? '<br/><b>HFEP Equipment 2013</b>: ' + datum.pcofequip2013 : '')
		+ (datum.pcoftotal2013 && datum.pcoftotal2013.length > 0? '<br/><b>HFEP Total 2013</b>: ' + datum.pcoftotal2013 : '')
		+ (datum.description2013 && datum.description2013.length > 0? '<br/><b>Description 2013</b>: ' + datum.description2013 : '')
		+ (datum.pcofinfra2012 && datum.pcofinfra2012.length > 0? '<br/><b>HFEP Infrastracture 2012</b>: ' + datum.pcofinfra2012 : '')
		+ (datum.pcofequip2012 && datum.pcofequip2012.length > 0? '<br/><b>HFEP Equipment 2012</b>: ' + datum.pcofequip2012 : '')
		+ (datum.pcoftotal2012 && datum.pcoftotal2012.length > 0? '<br/><b>HFEP Total 2012</b>: ' + datum.pcoftotal2012 : '')
		+ (datum.description2012 && datum.description2012.length > 0? '<br/><b>Description 2012</b>: ' + datum.description2012 : '')
		+ (datum.pcofinfra2011 && datum.pcofinfra2011.length > 0? '<br/><b>HFEP Infrastracture 2011</b>: ' + datum.pcofinfra2011 : '')
		+ (datum.pcofequip2011 && datum.pcofequip2011.length > 0? '<br/><b>HFEP Equipment 2011</b>: ' + datum.pcofequip2011 : '')
		+ (datum.pcoftotal2011 && datum.pcoftotal2011.length > 0? '<br/><b>HFEP Total 2011</b>: ' + datum.pcoftotal2011 : '')
		+ (datum.description2011 && datum.description2011.length > 0? '<br/><b>Description 2011</b>: ' + datum.description2011 : '')
		
		
		// DOH Hospital Budget 
		+ (datum.totalbudget2013 ? '<br/><br/><h2>DOH Hospital Budget</h2>':'')
		+ (datum.totalbudget2013 && datum.totalbudget2013.length > 0? '<br/><b>Total Budget 2013</b>: ' + datum.totalbudget2013 : '')
		+ (datum.totalbudget2012 && datum.totalbudget2012.length > 0? '<br/><b>Total Budget 2012</b>: ' + datum.totalbudget2012 : '')
		+ (datum.totalbudget2011 && datum.totalbudget2011.length > 0? '<br/><b>Total Budget 2011</b>: ' + datum.totalbudget2011 : '')
		+ (datum.totalbudget2010 && datum.totalbudget2010.length > 0? '<br/><b>Total Budget 2010</b>: ' + datum.totalbudget2010 : '')
		
		// Medical Services Offered
		+ (datum.generalpediatrics || datum.obgynebreastfeeding || datum.obgynecesareansection || datum.obgynenormaldelivery || datum.generalmedicine ? '<br/><br/><h2>Medical Services Offered</h2>':'')
		+ (datum.generalmedicine && datum.generalmedicine.length > 0? '<br/><b>General Medicine</b>: ' + datum.generalmedicine : '')
		+ (datum.generalpediatrics && datum.generalpediatrics.length > 0? '<br/><b>General Pediatrics</b>: ' + datum.generalpediatrics : '')
		+ (datum.obgynenormaldelivery && datum.obgynenormaldelivery.length > 0? '<br/><b>OB-Gyne Normal Delivery</b>: ' + datum.obgynenormaldelivery : '')
		+ (datum.obgynecesareansection && datum.obgynecesareansection.length > 0? '<br/><b>OB-Gyne Cesarean Section</b>: ' + datum.obgynecesareansection : '')
		+ (datum.obgynebreastfeeding && datum.obgynebreastfeeding.length > 0? '<br/><b>OB-Gyne Breastfeeding</b>: ' + datum.obgynebreastfeeding : '')
		
		
		// Ancillary Services Offered
		+ (datum.ctscanservices || datum.xraycapability || datum.mriservices || datum.ultrasoundservices || datum.laboratory ? '<br/><br/><h2>Ancillary Services Offered</h2>':'')	
		+ (datum.xraycapability && datum.xraycapability.length > 0? '<br/><b>X-ray Capability</b>: ' + datum.xraycapability : '')
		+ (datum.ctscanservices && datum.ctscanservices.length > 0? '<br/><b>CT Scan Services</b>: ' + datum.ctscanservices : '')
		+ (datum.mriservices && datum.mriservices.length > 0? '<br/><b>MRI Services</b>: ' + datum.mriservices : '')
		+ (datum.ultrasoundservices && datum.ultrasoundservices.length > 0? '<br/><b>Ultrasound Services</b>: ' + datum.ultrasoundservices : '')
		+ (datum.laboratory && datum.laboratory.length > 0? '<br/><b>Laboratory Services</b>: ' + datum.laboratory : '')
		
		
		// PhilHealth Out-Patient Packages
		+ (datum.phictbdots ? '<br/><br/><h2>PhilHealth Out-Patient Packages</h2>':'')
		+ (datum.phictbdots && datum.phictbdots.length > 0? '<br/><b>TB DOTS</b>: ' + datum.phictbdots : '')
		+ (datum.phicmcp && datum.phicmcp.length > 0? '<br/><b>Maternal & Child Package</b>: ' + datum.phicmcp : '')	
		+ (datum.phicmalaria && datum.phicmalaria.length > 0? '<br/><b>Malaria</b>: ' + datum.phicmalaria : '')
		+ (datum.phicothers && datum.phicothers.length > 0? '<br/><b>Other Services</b>: ' + datum.phicothers : '')
		
		// Surgical Services Offered
		+ (datum.surgicalservices ? '<br/><br/><h2> Surgical Services Offered</h2>':'')
		+ (datum.surgicalservices && datum.surgicalservices.length > 0? '<br/><b>Surgical Services</b>: ' + datum.surgicalservices : '')
		+ (datum.generalsurgery && datum.generalsurgery.length > 0? '<br/><b>General Surgery</b>: ' + datum.generalsurgery : '')
		+ (datum.plastic && datum.plastic.length > 0? '<br/><b>Plastic Surgery</b>: ' + datum.plastic : '')
		+ (datum.microsurgery && datum.microsurgery.length > 0? '<br/><b>Micro-Surgery</b>: ' + datum.microsurgery : '')
		+ (datum.neuro && datum.neuro.length > 0? '<br/><b>Neuro-Surgery</b>: ' + datum.neuro : '')
		+ (datum.thoracardio && datum.thoracardio.length > 0? '<br/><b>Thoracic & Cardio Surgery</b>: ' + datum.thoracardio : '')
		+ (datum.laparoscopy && datum.laparoscopy.length > 0? '<br/><b>Laparoscopy Surgery</b>: ' + datum.laparoscopy : '')
		+ (datum.urologic && datum.urologic.length > 0? '<br/><b>Urologic Surgery</b>: ' + datum.urologic : '')
		+ (datum.colorectal && datum.colorectal.length > 0? '<br/><b>Colorectal Surgery</b>: ' + datum.colorectal : '')
		+ (datum.other && datum.other.length > 0? '<br/><b>Other Surgery</b>: ' + datum.other : '')
		
		// Equipment Available
		+ (datum.ambulance || datum.autoclave || datum.hemocytometercb || datum.refrigeratorforvaccines || datum.ms || datum.bpmadult || datum.bpmpedia || datum.stethoscope || datum.aweighingscale ? '<br/><br/><h2>Equipment Available</h2>':'')
		+ (datum.ambulance && datum.ambulance.length > 0? '<br/><b>Ambulance Availability</b>:' + datum.ambulance : '')
		+ (datum.autoclave && datum.autoclave.length > 0? '<br/><b>Autoclave</b>:' + datum.autoclave : '')
		+ (datum.hemocytometercbc && datum.hemocytometercbc.length > 0? '<br/><b>Hemocytometer (CBC)</b>:' + datum.hemocytometercbc : '')
		+ (datum.refrigeratorforvaccines && datum.refrigeratorforvaccines.length > 0? '<br/><b>Refrigerator for Vaccines</b>:' + datum.refrigeratorforvaccines : '')
		+ (datum.ms && datum.ms.length > 0? '<br/><b>Microscope</b>:' + datum.ms : '')
		+ (datum.bpmadult && datum.bpmadult.length > 0? '<br/><b>BP Machine (Adult)</b>:' + datum.bpmadult : '')
		+ (datum.bpmpedia && datum.bpmpedia.length > 0? '<br/><b>BP Machine (Pedia)</b>:' + datum.bpmpedia : '')
		+ (datum.stethoscope && datum.stethoscope.length > 0? '<br/><b>Stethoscope</b>:' + datum.stethoscope : '')
		+ (datum.aweighingscale && datum.aweighingscale.length > 0? '<br/><b>Adult Weighing Scale</b>:' + datum.aweighingscale : '')
		+ (datum.icweighingscale && datum.icweighingscale.length > 0? '<br/><b>Infant/Child Weighing Scale</b>:' + datum.icweighingscale : '')
		+ (datum.nebulizer && datum.nebulizer.length > 0? '<br/><b>Nebulizer</b>:' + datum.nebulizer : '')
		+ (datum.pus && datum.pus.length > 0? '<br/><b>Portable Ultrasound</b>:' + datum.pus : '')
		+ (datum.ot && datum.ot.length > 0? '<br/><b>Oxygen Tank</b>:' + datum.ot : '')
		+ (datum.de && datum.de.length > 0? '<br/><b>Dental Equipment</b>:' + datum.de : '')
		+ (datum.oe && datum.oe.length > 0? '<br/><b>Otoscope & Other EENT Equipment</b>:' + datum.oe : '')
		+ (datum.da && datum.da.length > 0? '<br/><b>Doppler Apparatus</b>:' + datum.da : '')
		+ (datum.ecg && datum.ecg.length > 0? '<br/><b>ECG</b>:' + datum.ecg : '')
		//+ (datum.diagnosticlabservices && datum.diagnosticlabservices.length > 0? '<br/><b>Diagnostic Laboratory Services</b>: ' + datum.diagnosticlabservices : '')
		
		// Human Resources
		+ (datum.md2013 || datum.dmd2013 || datum.rmw2013 || datum.bhws || datum.rnheals || datum.bns  || datum.si ? '<br/><br/><h2>Human Resource Complement<br/></h2>':'')
		+ '<table>'
		+ (datum.md2013 && datum.md2013.length > 0? '<tr><th>No. of Medical Doctor</th><td>' + datum.md2013 + '</th></tr>' : '')
		+ (datum.dmd2013 && datum.dmd2013.length > 0? '<tr><th>No. of Medical Dentist</th><td>' + datum.dmd2013 + '</th></tr>' : '')
		+ (datum.rmw2013 && datum.rmw2013.length > 0? '<tr><th>No. of Registered Midwives</th><td>' + datum.rmw2013 + '</th></tr>' : '')
		+ (datum.rn2013 && datum.rn2013.length > 0? '<tr><th>No. of Registered Nurses</th><td>' + datum.rn2013	: '')
		+ (datum.medtech2013 && datum.medtech2013.length > 0? '<tr><th>No. of Medical Technologist</th><td>' + datum.medtech2013 + '</th></tr>' : '')
		+ (datum.nut2013 && datum.nut2013.length > 0? '<tr><th>No. of Nutritionist</th><td>' + datum.nut2013 + '</th></tr>' : '')
		+ (datum.phar2013 && datum.phar2013.length > 0? '<tr><th>No. of Pharmacist</th><td>' + datum.phar2013 + '</th></tr>' : '')
		+ (datum.ot2013 && datum.ot2013.length > 0? '<tr><th>No. of Occupational Therapist</th><td>' + datum.ot2013 + '</th></tr>' : '')
		+ (datum.pt2013 && datum.pt2013.length > 0? '<tr><th>No. of Physical Therapist</th><td>' + datum.pt2013 + '</th></tr>' : '')
		/*+ (datum.rt2013 && datum.rt2013.length > 0? '<tr><th>No. of Radio Technician</th><td>' + datum.rt2013 + '</th></tr>' : '')
		+ (datum.xt2013 && datum.xt2013.length > 0? '<tr><th>No. of X-ray Technician</th><td>' + datum.xt2013 + '</th></tr>' : '')*/
	    + (datum.rnheals && datum.rnheals.length > 0? '<tr><th>No. of RNHeals</th><td>' + datum.rnheals + '</th></tr>' : '')
		+ (datum.si && datum.si.length > 0? '<tr><th>No. of Sanitary Inspector</th><td>' + datum.si + '</th></tr>' : '')
		+ (datum.bhws && datum.bhws.length > 0? '<tr><th>No. of Barangay Health Workers</th><td>' + datum.bhws + '</th></tr>' : '')
		+ (datum.bns && datum.bns.length > 0? '<tr><th>No. of Barangay Nutrition Scholar</th><td>' + datum.bns + '</th></tr>' : '')
		+ '</table>'
		
			// Gallery
		+ (datum.image ? '<br/><br/><h2>Gallery</h2>':'')
		+'<table>'
		+ (datum.image && datum.image.length > 0? '<tr><th colspan="2">Image </th></tr><tr><td colspan="2"><div style="max-height:300px; overflow:auto;">' + showImages(datum.image)+'</div></td></tr>' : '')
		+'</table>'
		;
		
		
} 	
var services = {};
$(document.body).ready(function() {

	$('#rightpanel').hide();
	$('#rightpanel #close').click(function() {
		$('#rightpanel').hide();
	});
});