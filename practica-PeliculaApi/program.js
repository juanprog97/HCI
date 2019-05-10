var Data = JSON.parse(data);
console.log(Data)
document.getElementById('buscar').onclick = function() {recibirValor()};

var urlSend = "http://www.omdbapi.com/?apikey=db60d42f&";



$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var gener = $(e.target).attr("id") // activated tab
	var target = $(e.target).attr("href")
	//loadCatalog(gener,target)
	//document.getElementById(target.slice(1,target.lenght)).removeChild()
 });

 loadCatalog("animated","#anima")
 loadCatalog("comedy","#come")
 loadCatalog("scary","#terr")
 loadCatalog("romance","#roma")




var buscar = "t=rocky" 
infoMovie(urlSend,buscar);


function getMovie(url,search) {
	return new Promise(function(resolve, reject) {
	  var request = new XMLHttpRequest();
  
	  request.open('GET', url + search);
	  request.onload = function() {
		if (request.status == 200) {
		  resolve(request.response); // we get the data here, so resolve the Promise
		} else {
		  reject(Error(request.statusText)); // if status is not 200 OK, reject.
		}
	  };
  
	  request.onerror = function() {
		reject(Error("Error fetching data.")); // error occurred, so reject the Promise
	  };
  
	  request.send(); // send the request
	});
  }



function loadCatalog(value,target){
	console.log(value)
	for(var i in Data[0].movies){
		if(Data[0].movies[i].gender == value){
			for(var k in Data[0].movies[i].movies){
				var string = Data[0].movies[i].movies[k].nameMovie
				fetchMovie(target.slice(1,target.lenght), "t="+string)
			}	
		}
			
	}

	
};


function fetchMovie(target,string) {
	
	getMovie(urlSend,string).then(function(data) {
		var item = JSON.parse(data)
		var div = document.createElement('div');
		div.className = "card"
		div.style = "widht 18rem;"
		var image = document.createElement('img')
		image.className = "card-img-top"
		image.src = item.Poster
		var cardBody = document.createElement('div')
		cardBody.className = "card-body"
		var textNombre = document.createElement('h5')
		textNombre.className = "card-title text-center"
		textNombre.innerHTML = item.Title
		var textAnio = document.createElement('h6')
		textAnio.className="card-text text-center"
		textAnio.innerHTML = item.Year
		cardBody.appendChild(textNombre);
		cardBody.appendChild(textAnio);
		div.appendChild(image)
		div.appendChild(cardBody)
		document.getElementById(target).appendChild(div)
		
	});

  }




			/* var div = document.createElement('div');
			div.className = "card"
			div.style = "widht 18rem;"
			var image = document.createElement('img')
			image.className = "card-img-top"
			image.src = item.Poster
			var cardBody = document.createElement('div')
			cardBody.className = "card-body"
			var textNombre = document.createElement('h5')
			textNombre.className = "card-title text-center"
			textNombre.innerHTML = item.Title
			var textAnio = document.createElement('h6')
			textAnio.className="card-text text-center"
			textAnio.innerHTML = item.Year
			cardBody.appendChild(textNombre);
			cardBody.appendChild(textAnio);
			div.appendChild(image)
			div.appendChild(cardBody)
			pana.appendChild(div);
 */

	



	
/* 			
			

 */



// htmlContent = `
// 					<div class="card" style="width: 18rem;">
// 						<img class="card-img-top" alt="Card image cap" src="${imagen}">
// 						<div class="card-body">
// 							<h5 class="card-title text-center">${nombre}</h5>
// 							<h6 class="card-text text-center">${anio}</h6>
// 						</div>    
// 					</div>
// 					`


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
		textTitle.textContent = data.Title; 
		textYear.textContent = data.Year;
		var calificacion = parseFloat(data.imdbRating);
		var calificacion = parseInt((calificacion/10)*100)
		rating.style.width = calificacion+'%';
		rating.innerHTML = calificacion+'%';
		img.src = data.Poster;

		
	};
	request.send();
}


function recibirValor(){
	
	var ide = document.getElementById('textoBuscar').value;
	console.log(ide)
	var string = "t="+ ide;
	infoMovie(urlSend,string);
};
 

 

