var ficherosJSON = ["1.json","2.json","3.json"];
var cargado=0;
var c=true;
$(document).ready(function() {

	$('html, body').animate({ scrollTop: 0 }, 100);
	
	$("#mas").click(function(){
		cargarNoticias();
	});
	
	// Each time the user scrolls
	var win = $(window);
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
				$(tit).hide();

				but.className="btn btn-default";
				but.type="button";
				but.id="seguirLeyendo";
				but.textContent="Seguir Leyendo";
				$(but).hide();

				img.id="imgNoticia";
				img.className="img-thumbnail"
				img.src=jsOb[x].img;
				img.alt=jsOb[x].alt;
				$(img).hide();

				desc.textContent=jsOb[x].desc;
				$(desc).hide();

				divI.id="nImg";				
				divN.className = "container";
				divN.id="news";

				//TENGO QUE METER LOS ELEMENTOS QUE he creado
				$("#aire").append(tit);				
				$(tit).fadeIn(2000);
				$("#aire").append(divI);
				$(divI).append(img);
				$(img).fadeIn(2000);
				$("#aire").append(divN);
				$(divN).append("<br/>");
				$(divN).append(desc);
				$(desc).fadeIn(2000);
				$(divN).append(but);
				$("#aire").append("<hr>");
			}
		});
		cargado++;
	}else{
		$('#noMas').fadeIn(3000);
		$('#noMas').fadeOut(5000);

	}

}