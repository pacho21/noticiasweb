//Array donde guardamos el nombre de los archivos JSON
var ficherosJSON = ["1.json","2.json"];
//variable para controlar las cargas.
var cargado=0;
//variables para controlar las minicargas.
var miniCarga=0;


$(document).ready(function() {
	
	//metodo que añade items al carrosel para mostrar todas las noticias(las del json + las que ya habia).	
	cargaMini();
	
	//esto hace que al cargar la pagina nos posicionemos arriba del todo.
	$('html, body').animate({ scrollTop: 0 }, 100);
	
	//si hacemos click en el botón con id "mas" hara que carguemos más noticias.
	$("#mas").click(function(){
		cargarNoticias();
	});
	
	// Cuando el usuario hace scroll:
	var win = $(window);
	win.scroll(function() {
		// Si hemos alcanzado la pagina de abajo.
		if ($(document).height() - win.height()  == win.scrollTop()) {					
		cargarNoticias();
		}
	});
});

//metodo que si lo ejecutamos cargara más noticias si no hemos alcanzado el limite de noticias que tenemos en los ficherosJSON.
function cargarNoticias(){
	if((cargado<ficherosJSON.length)){
		$.getJSON("https://rawgit.com/pacho21/noticiasweb/master/data/"+ficherosJSON[cargado], function(jsOb){
			for(x=0;x<jsOb.length;x++){				
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
				$(tit).fadeIn(1500);
				$("#aire").append(divI);
				$(divI).append(img);
				$(img).fadeIn(1500);
				$("#aire").append(divN);
				$(divN).append("<br/>");
				$(divN).append(desc);
				$(desc).fadeIn(1500);
				$(divN).append(but);
				$(but).fadeIn(1500);
				$("#aire").append("<hr>");
			}
		});
		cargado++;
	}else{
		$('#noMas').fadeIn(3000);
		$('#noMas').fadeOut(5000);

	}

}

//metodo que añade items al carrosel para mostrar todas las noticias(las del json + las que ya habia).
function cargaMini(){
	while(miniCarga<ficherosJSON.length){
		$.getJSON("https://rawgit.com/pacho21/noticiasweb/master/data/"+ficherosJSON[miniCarga], function(jsObject){
			for(x=0;x<jsObject.length;x++){				
				var type=document.createElement("h3");
				var minidesc=document.createElement("p");
				var divItem=document.createElement("div");
				type.textContent=jsObject[x].type;
				minidesc.textContent=jsObject[x].title;
				divItem.className="item";

				$("#itemsCarro").append(divItem);
				$(divItem).append(type);
				$(divItem).append(minidesc);
				}
		});
		miniCarga++;
	}
}