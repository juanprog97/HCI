navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
    if(position.coords.latitude == 3.4174158023637915 && position.cords.longitude == 3.4174158023637915 ){
        console.log("A")
    }
})