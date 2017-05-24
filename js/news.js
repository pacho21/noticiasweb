var ficherosJSON = ["1.json","2.json","3.json"];
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
		$.getJSON("https://rawgit.com/pacho21/noticiasweb/master/data/"+ficherosJSON[cargado], function(jsOb){
			for(x=0;x<2;x++){				
				var tit = document.createElement("h3");
				var divI = document.createElement("div");
				var img = document.createElement("img");
				var divN = document.createElement("div");
				var desc = document.createElement("p");
				var but = document.createElement("button");
				

				tit.textContent=jsOb[x].title;				
				tit.style="text-align: center;";

				but.className="btn btn-default";
				but.type="button";
				but.id="seguirLeyendo";
				but.textContent="Seguir Leyendo";

				img.id="imgNoticia";
				img.src=jsOb[x].img;
				img.alt=jsOb[x].alt;

				desc.textContent=jsOb[x].desc;

				divI.id="nImg";				
				divN.className = "container";
				divN.id="news";

				//TENGO QUE METER LOS ELEMENTOS QUE he creado
				$("#aire").append(tit);				
				$("#aire").append(divI);
				$(divI).append(img);
				$("#aire").append(divN);
				$(divN).append("<br/>");
				$(divN).append(desc);
				$(divN).append(but);
				$("#aire").append("<hr>");
			}
		});
		cargado++;
	}else{
		$('#noMas').fadeIn("slow");
		$('#noMas').fadeOut(3000);
	}

}