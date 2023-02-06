// OBJETO Y ARRAY DE JUEGOS GLOBAL
let dlgBox = document.createElement("dialog");
const videojuegos = [];
class Juego {

    constructor(nombre, categoria, descripcion, precio, imagen) {

        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
propiedad() {
    
    dlgBox.open = true;
    const Texto = document.createTextNode(`El juego es ${this.nombre} , y la descripcion es ${this.descripcion} .`);
    dlgBox.append(Texto);
    
    //dlgBox.classList.add("container-items");
    document.body.append(dlgBox);
   

//alert("El Juego es: " + this.nombre + " , y la descripcion es: " + this.descripcion);
}
}

//






const juego1 = new Juego("Counter Strike Global Offensive", "FPS", "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).", 0) ;
const juego2 = new Juego("League of Legends", "Estrategia", "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.", 0);
const juego3 = new Juego("Age of Empires II", "Estrategia", "Age of Empires II: Definitive Edition incluye Los últimos khanes, que incorpora 3 campañas y 4 civilizaciones nuevas. Las frecuentes actualizaciones contienen eventos, contenido adicional, nuevos modos de juego (¡como el reciente modo cooperativo!) y funciones mejoradas.", 105);
const juego4 = new Juego("FIFA 23", "Deportes", "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!", 1200);
const juego5 = new Juego("F1 22", "Deportes", "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022", 1040);
const juego6 = new Juego("New World", "Aventura", "Explora un emocionante MMO de mundo abierto repleto de peligros y oportunidades en el que forjarás un nuevo destino en la isla sobrenatural de Aetérnum.", 399);
const juego7 = new Juego("Project Zomboid", "Supervivencia", "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..", 287);
const juego8 = new Juego("Grounded", "Supervivencia", "The world is a vast, beautiful and dangerous place especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?", 535);
const juego9 = new Juego("NBA 2k23", "Deportes", "Ponte a la altura de las circunstancias en NBA 2K23. Demuestra tu talento en Mi CARRERA. Empareja a All-Stars con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM, o guía a la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y siente el juego real.", 874);
const juego10 = new Juego("Valorant", "FPS", "Valorant es un juego de disparos tácticos que involucra a dos equipos con 5 jugadores en cada equipo. Todos los jugadores pueden iniciar sesión y jugar de forma remota desde cualquier parte del mundo. Cada juego tiene 25 rondas y el equipo que gana 13 de ellos primero gana el juego. Los jugadores pueden elegir sus personajes en el juego llamados agentes al comienzo del juego.", 0);
const juego11 = new Juego("Among Us", "Estrategia", "Un juego de socialización local o en línea de trabajo en equipo y traición para 4 a 15 jugadores... ¡ambientado en el espacio!", 84);
const juego12 = new Juego("Dying Light 2 Stay Human", "Supervivencia", "El virus ha ganado y la civilización ha vuelto a la Edad Oscura. La Ciudad, uno de los últimos asentamientos de la humanidad, está al borde del abismo. Con tu agilidad y tu maestría del combate, deberás sobrevivir y dar forma al mundo. Tus decisiones importan.", 999);
const juego13 = new Juego("Elden Ring", "Aventura", "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.", 1540);
const juego14 = new Juego("Red Dead Redemtion II", "Aventura", "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.", 527);
const juego15 = new Juego("Hogwarts Legacy", "Aventura", "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.", 1899);
const juego16 = new Juego("Sea of Thieves", "Aventura", "Sea of Thieves ofrece la experiencia de piratasdefinitiva, desde la navegación y elcombate hasta la exploración y elsaqueo: todo para disfrutar de la vidapirata y convertirteenleyenda. No hay funcionesestablecidas, tienes total libertad para enfrentarte al mundo y a los demásjugadorescomodesees.", 399);
const juego17 = new Juego("Destiny 2", "FPS", "Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.", 0);
const juego18 = new Juego("Stray", "Aventura", "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.", 519);

//videojuegos.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12, juego13, juego14, juego15, juego16, juego17, juego18);
//const nombre = prompt("Ingrese su nombre");
//const apellido = prompt("Ingrese su apellido");

//FUNCION PARA CREACION DE USUARIO.
function usuario(){ 
if((nombre != "") && (apellido != "")) {
    alert("Bienvenido a LifeGame " + nombre + " " + apellido + " ,esperamos puedas disfrutar de algunos de los titulos que tenemos!")
}else{
    alert("Aunque no hayas ingresado lo solicitado, eres bienvenido a la Experiencia LifeGame!")
    };
    console.log("El usuario de la pagina es " + nombre + " " + apellido );
}

//usuario();

//FUNCION PARA VALIDAR EDAD DE LA PERSONA QUE INGRESE A LA PAGINA.

function validarEdad() {
    let edad = parseInt(prompt("Introducir tu edad"));
    while((isNaN(edad)) || (edad < 18 ) ) {
        alert("Debes de agregar una edad valida para poder ingresar a LifeGame.");
    edad = parseInt(prompt("Ingrese otra edad"));
    }
    alert("Tu edad es " + edad + " años, Bienvenido " + nombre + " " + apellido + " a LifeGame !");
    console.log("La edad del usuario es de " + edad + " años.");
};

//validarEdad();

//FUNCION CON OPCIONES PARA QUE EL USUARIO PUEDA ELEGIR QUE QUIERE REALIZAR

    const div1 = document.createElement('div');
    div1.classList.add('.div-dialog1');
    const div2 = document.createElement('div');
    div2.classList.add('.div-dialog2');

     dlgBox = document.createElement("dialog");

    const button1 = document.createElement('button');

    button1.classList.add('botones');

    const button2 = document.createElement('button');
    button2.classList.add('botones');

    const button3 = document.createElement('button');
    button3.classList.add('botones');

    const button4 = document.createElement('button');
    button4.classList.add('botones');

    const button5 = document.createElement('button');
    button5.classList.add('botones');

    const button6 = document.createElement('button');
    button6.classList.add('botones');


    button1.innerHTML = "1 - Agregar Juego";
    button2.innerHTML = "2 - Dar de Baja (Proximamente)";
    button3.innerHTML = "3 - Calcular descuento (Proximamente)";
    button4.innerHTML = "4 - Descripcion de un juego (Proximamente)";
    button5.innerHTML = "5 - Juegos Free to play (Proximamente)";
    button6.innerHTML = "6 - Filtrar por categoria (Proximamente)";
    
    let textoArriba = "Bienvenida al selector de opciones de LifeGame, a continuacion tendras varias opciones para poder disfrutar de nuestro contenido.";
    
    
    dlgBox.append(div1);
    dlgBox.append(div2);
    div1.append(textoArriba);
    div2.append(button1);
    div2.append(button2);        
    div2.append(button3);    
    div2.append(button4); 
    div2.append(button5);
    div2.append(button6);
    
    document.body.append(dlgBox);

    dlgBox.classList.add('dialog');

    dlgBox.showModal();


    button1.addEventListener('click', ()=>{
        clearDialog();
        textoArriba = "Indique los siguientes campos para ingresar un juego";
        div1.append(textoArriba);
        const atributos = ['Nombre', 'Precio', 'Categoría', 'Descripción', 'URL Imagen'];
        let inputs = [];
        for (let i =0; i<5; i++){
            inputs.push(document.createElement('input'));
            inputs[i].placeholder = atributos[i];
            inputs[i].classList.add('input-dialog');
            div2.append(inputs[i]);
     
    }
    const botonAgregar = document.createElement('button');
    botonAgregar.innerHTML = "Agregar";
    botonAgregar.setAttribute('class', 'btn btn-danger');
    div2.append(botonAgregar);
    
    botonAgregar.addEventListener('click', ()=>{
        agregarJuego( inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value, inputs[4].value );

    })

       
    })

    function clearDialog (){
       
        div1.innerHTML = "";
        div2.innerHTML = "";
    }



//FUNCTION AGREGAR JUEGO A DOM
function agregarJuegoHTML (juego){
    let divContainer = document.querySelector('.container-items');
    let divJuego = document.createElement('div');

    if(juego !== undefined){
    
    
    divJuego.innerHTML = `<div class="container-items"></div>
    
    <div class="item">
                <figure>
                    <img src=${juego.imagen} alt="Producto">
                </figure>
                <div class="info-producto">
                    <h2>${juego.nombre}</h2>
                    <p class="price">$${juego.precio} </p>
                    <button  class="btn-add-cart">Añadir al carrito</button>
                </div>
            </div>`
    
    divContainer.append(divJuego);
    }else{
        for(let juego in videojuegos){
         
        divJuego.innerHTML = `<div class="container-items"></div>
        <div class="item">
        <figure>
        <img src=${videojuegos[juego].imagen} alt="Producto">
        </figure>
        <div class="info-producto">
        <h2>${videojuegos[juego].nombre}</h2>
        <p class="price">$${videojuegos[juego].precio} </p>
        <button  class="btn-add-cart">Añadir al carrito</button>
        </div>
        </div>`
            
    divContainer.append(divJuego);
        }
    }

}

agregarJuegoHTML();
//FUNCION PARA AGREGAR JUEGO


function agregarJuego(nombre, precio, categoria, descripcion, imagen) { 


    
let nombreJuego = nombre
let categoriaJuego = categoria;
let informacionJuego = descripcion;
let preciojuego = precio;
let Urlimagen = imagen;
let juego = {};


if((nombreJuego !="") && (categoriaJuego!="") && (informacionJuego !="") && (!isNaN(preciojuego))){



     juego = new Juego(nombreJuego, categoriaJuego, informacionJuego, preciojuego, Urlimagen  );
    videojuegos.push(juego);
  
}else{
   
}

console.log("El juego que ingresaste es " + nombreJuego + " y el precio del juego es " + preciojuego + " pesos.");
 

agregarJuegoHTML(juego);

}; 


//FUNCION PARA QUITAR JUEGO

function quitarJuego() {

let quitarJuego = prompt("Ingrese el nombre del juego que propone quitar de la venta.");
let descripcionJuego = prompt("Describe el motivo por el cual quieres que quitemos ( " + quitarJuego + " ) de LifeGame.");

if(quitarJuego ==""){
    alert("Debes agregar el nombre del juego que quieres que quitemos.");
} else if(descripcionJuego ==""){
    alert("Explicanos el motivo por el cual quieres que quitemos el titulo.");
} else{
    alert("Esperamos poder satisfacer tus peticiones para que sigas eligiendo LifeGame!");
}

console.log("El juego que quieres sacar es " + quitarJuego + " y la descripcion es " + descripcionJuego);

};

//FUNCION PARA CALCULAR DESCUENTO DE JUEGO

function montoFinal() {

let montoArticulo = parseInt(prompt("Ingrese monto de articulo"));
let elegirDescuento= parseInt(prompt("Ingresar si su decuento debe ser 5, 10 o 15%"));
let montoDescuento = montoArticulo / 100 * elegirDescuento;

switch(elegirDescuento) {
    case 5 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case 10 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case 15 :
        alert("El total a pagar por el usuario es " + ( montoArticulo - montoDescuento ) + " pesos.");
        break;
    case "null":
       alert("No ingresaste ningun descuento valido.")
    default:
        alert("No existe dicho monto de descuento") ;         
}; 

let resultadoperacion = montoArticulo - montoDescuento;

console.log("El costo del articulo con el descuento solicitado es de " + resultadoperacion + " pesos.");

}

//FUNCION QUE DEMUESTRE DESCRIPCION DE JUEGOS

function descripcionJuego() {



const elegirJuego = prompt("Ingrese nombre como se observa en la pagina para ver descripcion del juego solicitado. Ejemplo: Age of Empires II o Counter Strike Global Offensive."); //.toLowerCase

for(let i = 0; i < videojuegos.length; i++){

if(videojuegos[i].nombre == elegirJuego){
    
videojuegos[i].propiedad()
}
} 
}

//FUNCION PARA MOSTRAR FILTRADO FREE TO PLAY

function freetoplay() {
let auxiliar="";
for(let i = 0; i < videojuegos.length; i++){
    if(videojuegos[i].precio == 0 ){
        auxiliar += videojuegos[i].nombre + "\n";
    }
} 
    alert("Estos son los juegos Free to play: \n" + auxiliar);
}


//FILTRAR POR CATEGORIA

function filtrarporCategoria() {


    const videojuegosFPS = videojuegos.filter( (videojuegos) => videojuegos.categoria === "FPS");
    //alert("First-Personal Shooter: \n"+devolverNombres(videojuegosFPS).join('\n'));
    
    const videojuegosEstrategia = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Estrategia");
    //alert("Estrategia: \n"+devolverNombres(videojuegosEstrategia).join('\n'));
    
    
    const videojuegosDeportes = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Deportes");
    //alert("Deportes: \n"+devolverNombres(videojuegosDeportes).join('\n'));
    
    const videojuegosAventura = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Aventura");
    //alert("Aventura: \n"+devolverNombres(videojuegosAventura).join('\n'));
    
    const videojuegosSupervivencia = videojuegos.filter( (videojuegos) => videojuegos.categoria === "Supervivencia");
    //alert("Supervivencia: \n"+devolverNombres(videojuegosSupervivencia).join('\n'));
    
    let opcionCategoria = true;
    
    while(opcionCategoria) {
    
    let elegirCategoria = "LifeGame cuenta con distintas categorias de juegos, a continuacion puedes elegir tu favorita, y ver la lista disponible de Videojuegos."
    
    elegirCategoria += "\n 1)First-Person Shooter.";
    elegirCategoria += "\n 2)Estrategia.";
    elegirCategoria += "\n 3)Deportes.";
    elegirCategoria += "\n 4)Aventura.";
    elegirCategoria += "\n 5)Supervivencia.";
    elegirCategoria += "\n 6)Salir";
    
    let respuestaCategoria = prompt(elegirCategoria);
    
        switch (respuestaCategoria) {
    
            case "1":
                alert("First-Personal Shooter: \n"+devolverNombres(videojuegosFPS).join('\n')); ;
            break;
            case "2":
                alert("Estrategia: \n"+devolverNombres(videojuegosEstrategia).join('\n'));
            break;
            case "3":
                alert("Deportes: \n"+devolverNombres(videojuegosDeportes).join('\n'));;
            break;
            case "4":
                alert("Aventura: \n"+devolverNombres(videojuegosAventura).join('\n'));
            break;
            case "5":
                alert("Supervivencia: \n"+devolverNombres(videojuegosSupervivencia).join('\n'));
            break;
            case "6" :
                alert("Gracias por visitar LifeGame!");
                opcionCategoria=false;
                break;
    
            case "null":
                alert("Gracias por elegir LifeGame.");
                opcionCategoria =false;
            break;
            default:
                alert("No elegiste ninguna opcion valida.");
            
        }
    
    }
    
    
  
};

function devolverNombres(videojuegos) {
    
    
    const auxiliar = [];
for(let i = 0; i < videojuegos.length; i++){
    auxiliar.push(videojuegos[i].nombre);
    }
    return auxiliar;
} ;






// CARRITO

//abrir-cerrar carrito

const abrirCarrito = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

abrirCarrito.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}
        guardarCarritoEnLS();
		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};


//LOCAL STORAGE

function leerCarritoEnLS () {
 

    const carritoLS = localStorage.getItem("carrito");

    // Si la key carrito existe en el LS
    if(carritoLS !== null) {
        allProducts = JSON.parse(carritoLS);
    }

    return allProducts;



}

function guardarCarritoEnLS () {

    localStorage.setItem("carrito", JSON.stringify(allProducts));
}

function renderizarCarrito () {

    showHTML();
    

}

allProducts = leerCarritoEnLS();
renderizarCarrito();

