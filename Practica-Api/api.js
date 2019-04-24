var urlSend = "http://www.omdbapi.com/?apikey=db60d42f&";
function infoMovie(url,string){
	var request = new XMLHttpRequest();
	request.open('GET', url + string, true);
	request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data)
	};
	request.send(); 
	var textTitle =  document.getElementById('TitleMovie');
	var textYear  =  document.getElementById('titleYear');
	var img 	  =  document.getElementById('logoMovie');
	textTitle.textContent = data.Title; 
	textYear.textContent = data.Year;
	img.src = data.Poster;
}




var string = "t=rocky" 
infoMovie(urlSend,string)




