var Data = JSON.parse(dataproducto);
console.log(Data)

loadFavoritos(Data)
loadMasVendido(Data)
loadRecomendados(Data)

function loadFavoritos(Data){
    for(var i in Data[0].productos){
        if(Data[0].productos[i].tipo == "favoritos" ){
            console.log(Data[0].productos[i].tipo)
            for(var j in Data[0].productos[i].productos){
                var g = Data[0].productos[i].productos[j]
                console.log(g.precio) 
                var elem = createElement(g.image,g.precio)
                document.getElementById("favorito").appendChild(elem)
            }
        }
    }
}

function loadMasVendido(Data){
    for(var i in Data[0].productos){
        if(Data[0].productos[i].tipo == "masvendido" ){
            for(var j in Data[0].productos[i].productos){
                var g = Data[0].productos[i].productos[j]
                console.log(g.precio) 
                var elem = createElement(g.image,g.precio)
                document.getElementById("vendido").appendChild(elem)
            }
        }
    }    
    
}
function loadRecomendados(Data){
    for(var i in Data[0].productos){
        if(Data[0].productos[i].tipo == "recomendados" ){
            for(var j in Data[0].productos[i].productos){
                var g = Data[0].productos[i].productos[j] 
                var elem = createElement(g.image,g.precio)
                document.getElementById("recomendado").appendChild(elem)
            }
        }
    } 
}

function createElement(img,precio){
    var colw = document.createElement("div")
    colw.className = "col-2"
    var div = document.createElement("div")
    div.className = "card"
    div.style = "widht 18rem;"
    var imge = document.createElement("img")
    imge.className = "card-img-top"
    imge.src = img
    imge.widht = "10"
    imge.height= "160"
    var text = document.createElement("div")
    text.className = "card-body align-self-center"
    var cola = document.createElement("div")
    cola.className = "col-md-12 "
    var price = document.createElement('h5')
    price.className = "card-title "
    console.log(price)
    price.innerHTML = precio
    cola.appendChild(price)
    text.appendChild(cola)
    div.appendChild(imge)
    div.appendChild(text)
    colw.appendChild(div)
    return colw

}