
document.getElementById("convertir").onclick = function() {recibirValor()};

function hex2rgb(hex)
{
        // long version
        r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (r)
        {
                return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
        }
        // short version
        r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
        if (r)
        {
                return r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16); });
        }
        return null;
}

function toHex(d)
{
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function recibirValor()
{
    var rgb = document.getElementById("enterColorCodeRGB").value
    var hexa = document.getElementById("enterColorCodeHexa").value
    if(rgb.length != 0  || hexa.length != 0  )
    {
        if(rgb.length  != 0 && hexa.length  == 0 )
        {
            //RGB to Hexa
            rgb  = rgb.split(",")
            var hex = ''
            for(var i = 0; i<3; i++)
            {
                hex+=toHex(rgb[i])
            }
            document.getElementById("enterColorCodeHexa").value = hex
            var object = document.getElementsByClassName("changeColor")
            object[0].style.backgroundColor = "#"+hex
            object[1].style.backgroundColor = "#"+hex
        }
        else
        {
            var rt = ''
            var ty = hex2rgb("#"+hexa)
            for(var i=0; i<3; i++)
            {
                rt+= ty[i]+","
            }
            rt = rt.slice(0,rt.length-1)
            document.getElementById("enterColorCodeRGB").value = rt
            var object = document.getElementsByClassName("changeColor")
            object[0].style.backgroundColor = "#"+hexa
            object[1].style.backgroundColor = "#"+hexa       
        }
    }   
}