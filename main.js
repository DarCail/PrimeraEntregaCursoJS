const productos = [
    { nombre: "mario kart", precio: 800 },
    { nombre: "monster hunter", precio: 1200 },
    { nombre: "demons souls", precio: 2000 },
    { nombre: "call of duty", precio: 1600 },
    { nombre: "fifa 48", precio: 1300 },
];

let carrito = []

let seleccion = prompt("Hola, desea comprar algun juego ¿si o no?")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Hola, desea comprar algun juego ¿si o no?")
}

if (seleccion == "si"){
    alert("a continuacion le mostraremos nuestra lista de los juegos con sus respectivos precios")
    let todoslosProductos = productos.map(
        (producto) =>producto.nombre + " " + producto.precio + "$");
    
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("entendido, que tenga un buen dia")
}

while(seleccion != "no"){
    let producto = prompt("agrega un juego a tu carrito")
    let precio = 0

    if(producto == "mario kart" || producto == "monster hunter" || producto == "demons souls" || producto == "call of duty" || producto == "fifa 48"){
        switch(producto){
            case "mario kart":
                precio = 800
                break;
            case "monster hunter":
                precio = 1200
                break;
            case "demons souls":
                precio = 2000
                break;
            case "call of duty":
                precio = 1600
                break;
            case "fifa 488":
                precio = 1300
                break;  
            default:
                break; 
        }

        carrito.push({producto, precio})
        console.log(carrito)
    }
    else{
        alert("lo sentimos, no tenemos ese juego ")
    } 
    
    seleccion = prompt("desea seguir comprando?")
    
    while(seleccion === "no"){
        alert("gracias por su compra!, vuelva pronto")
        break
    }
}