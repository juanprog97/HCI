function toHex(d) {
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function recibirValor()
{
    var rgb = document.getElementById("enterColorCodeRGB").value
    rgb  = rgb.split(",")
    var hex = ''
    for(var i = 0; i<3; i++){
        hex+=toHex(rgb[i])
    }
    document.getElementById("enterColorCodeHexa").value = hex
    var object = document.getElementsByClassName("changeColor")
    object[0].style.backgroundColor = "#"+hex
    object[1].style.backgroundColor = "#"+hex
    
    
}