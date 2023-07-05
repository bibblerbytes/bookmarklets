$(document.body).append('
    <iframe id="w3c-nav-iframe" style="padding: 0px; position: absolute; top: 10px; right: 10px; z-index: 999999999;" frameborder="0" scrolling="no" width="350px" height="660px"></iframe>
');

//Add the data as the hash. The iframe will pull the data.
$('#w3c-nav-iframe').attr('src', "https://github.com/bibblerbytes/bookmarklets/blob/main/iframe-base.html#"+JSON.stringify(data));

$(document).ready(function(){
	//Need to pull off the "#" from the string
	var data = window.location.hash.substring(1);

	//if the string is empty that means there is no data and
	//the browser does not support the API.
	if (data != ""){
		data = JSON.parse(data);
		showW3cNavPerformanceData(data);
	}else{
		$(document.body).html($("#w3c-nav-bookmarklet-notsupported").render({}));
	}
});
