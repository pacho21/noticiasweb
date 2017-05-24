var ficherosJSON = ["new1.json","new2.json","new3.json"];
var cargado=0;
var c=true;
$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
		cargarNoticias();
		}
	});
});

function cargarNoticias(){
	if((cargado<ficherosJSON.length)){
		cargado++;
	}else{
		$('#noMas').fadeIn("slow");
			$('#noMas').fadeOut(3000);
	}

}