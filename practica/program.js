var netflixData= netflixData ||{};

netflixData.getInfo = {
	nameMovie : "",
	yearMovie : "",
	setnameMovie : function(name,year){
		this.nameMovie = name;
		this.yearMovie = year;
	}

	
}

function movie(name,year){
	this.nameS = name,
	this.yearS = year

}

movie.prototype.showInfo = function(){
	console.log(this.nameS,this.yearS)
}
var movie1 = new movie("titanic","1991");
console.log(movie1),
netflixData.getInfo.setnameMovie("titanic","1992");
console.log(netflixData.getInfo.nameMovie);
console.log(netflixData.getInfo.yearMovie);
function serie(name,year){
	movie.call(this,name),
	movie.call(this,year)
}

serie.prototype = Object.create(movie.prototype)