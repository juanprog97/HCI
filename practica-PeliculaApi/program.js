document.getElementById("buscar").onclick = function() {recibirValor()};

var urlSend = "http://www.omdbapi.com/?apikey=db60d42f&";

var buscar = "t=rocky" 
infoMovie(urlSend,buscar);

function infoMovie(url,string){
	var request = new XMLHttpRequest();
	request.open('GET', url + string, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data)
		var textTitle =  document.getElementById('nombrePeli');
		var textYear  =  document.getElementById('anoPeli');
		var img 	  =  document.getElementById('image');
		var rating    =  document.getElementById('rating');
		console.log(data)
		textTitle.textContent = data.Title; 
		textYear.textContent = data.Year;
		
		var calificacion = parseFloat(data.imdbRating);
		var calificacion = (calificacion/10)*100
		rating.style.width = calificacion+'%';
		rating.innerHTML = calificacion+'%';
		img.src = data.Poster;

		
	};
	request.send();
}


function recibirValor(){
	var ide = document.getElementById('textoBuscar').value;
	var string = "t="+ ide;
	infoMovie(urlSend,string);
};
 

