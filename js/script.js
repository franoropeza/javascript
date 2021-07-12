let calculadoraCalorias = document.getElementById("calculadora");
calculadoraCalorias.addEventListener("submit", seleccionCalculadora)


// localStorage.clear();


function seleccionCalculadora (e){
   e.preventDefault();
   let calculadora = e.target
   let productoElegido1 = calculadora.elegirAlimento1.value;
   console.log(productoElegido1);
   let cantidadProducto1 = calculadora.cantidadGramos1.value;
   console.log(cantidadProducto1);

   localStorage.setItem("Nombre1", productoElegido1);
   localStorage.setItem("Cantidad1", cantidadProducto1);
   
   
   let productoElegido2 = calculadora.elegirAlimento2.value;
   console.log(productoElegido2);
   let cantidadProducto2 = calculadora.cantidadGramos2.value;
   console.log(cantidadProducto2);

   localStorage.setItem("Nombre2", productoElegido2);
   localStorage.setItem("Cantidad2", cantidadProducto2);

   
   let productoElegido3 = calculadora.elegirAlimento3.value;
   console.log(productoElegido3);
   let cantidadProducto3 = calculadora.cantidadGramos3.value;
   console.log(cantidadProducto3);

   localStorage.setItem("Nombre3", productoElegido3);
   localStorage.setItem("Cantidad3", cantidadProducto3);

   
   let productoElegido4 = calculadora.elegirAlimento4.value;
   console.log(productoElegido4);
   let cantidadProducto4 = calculadora.cantidadGramos4.value;
   console.log(cantidadProducto4);

   localStorage.setItem("Nombre4", productoElegido4);
   localStorage.setItem("Cantidad4", cantidadProducto4);

   
   let productoElegido5 = calculadora.elegirAlimento5.value;
   console.log(productoElegido2);
   let cantidadProducto5 = calculadora.cantidadGramos5.value;
   console.log(cantidadProducto2);

   localStorage.setItem("Nombre5", productoElegido5);
   localStorage.setItem("Cantidad5", cantidadProducto5);

   location.reload();

}


let Producto1 = localStorage.getItem("Nombre1");
let Producto1Cantidad = parseInt( localStorage.getItem("Cantidad1"));

let Producto2 = localStorage.getItem("Nombre2");
let Producto2Cantidad = parseInt( localStorage.getItem("Cantidad2"));

let Producto3 = localStorage.getItem("Nombre3");
let Producto3Cantidad = parseInt( localStorage.getItem("Cantidad3"));

let Producto4 = localStorage.getItem("Nombre4");
let Producto4Cantidad = parseInt( localStorage.getItem("Cantidad4"));

let Producto5 = localStorage.getItem("Nombre5");
let Producto5Cantidad = parseInt( localStorage.getItem("Cantidad5"));



/* Creador productos */

class producto {
   constructor(nombre, cantidad, hidratosDeCarbono, proteinas, grasas) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.hidratosDeCarbono = hidratosDeCarbono;
      this.hdcCalorias = this.hidratosDeCarbono * 4;
      this.proteinas = proteinas;
      this.protCalorias = this.proteinas * 4;
      this.grasas = grasas;
      this.grasasCalorias = this.grasas * 9;
      this.calorias =  this.hdcCalorias +  this.protCalorias +  this.grasasCalorias;

   }


   mostrarDatos (){ 
      console.log (` La tabla Nutricional de ${this.nombre} se compone de ${this.hidratosDeCarbono}g de H. de Carbono, ${this.proteinas}g de Proteínas y ${this.grasas}g de Grasas en ${this.cantidad}g`); 
  
   }


}

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    $("#app").append(`<div><h3> ID: ${producto.id}</h3>
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b></div>`);
}



// /* Agregar un nuevo producto */

// class productosNuevos {
//    constructor(nombre, cantidad, hidratosDeCarbono, proteinas, grasas) {
//       this.nombre = nombre;
//       this.cantidad = cantidad;
//       this.hidratosDeCarbono = parseInt(hidratosDeCarbono);
//       this.proteinas = parseInt(proteinas);
//       this.grasas = parseInt(grasas);
//       this.calorias =  (this.hidratosDeCarbono * 4) + (this.proteinas * 4) + (this.grasas * 9);
//    }

  

//    mostrarDatosNuevos (){ 
//       console.log (` La tabla Nutricional de ${this.nombre} se compone de ${this.hidratosDeCarbono}g de H. de Carbono, ${this.proteinas}g de Proteínas y ${this.grasas}g de Grasas en ${this.cantidad}g`); 
  
//    }

 
// }

// const productoNuevo1 = new productosNuevos( prompt("Ingresar Nombre del alimento a calcular, ejemplo: Pan Frances"), 100,  prompt("¿Cuantos hidratos de carbono tiene en 100g?"),  prompt("¿Cuantas proteinas tiene en 100g?") , prompt("¿Cuantas grasas tiene en 100g?")) ;


const lecheSancor = new producto("Leche", 1, 0.05, 0.03, 0.03);
const yogur = new producto("Yogur", 1, 0.045, 0.04, 0.03);
const quesos1 = new producto("Quesos 1", 1, 0.04, 0.14, 0.12);
const huevo = new producto("Huevo", 1, 0, 0.12, 0.12);
const carneVacuna = new producto("Carne de Vaca", 1, 0, 0.20, 0.10);
const carneCerdo = new producto("Carne de Cerdo", 1, 0, 0.17, 0.21);
const carnePollo = new producto("Carne de Pollo", 1, 0, 0.20, 0.06);
const carnePescado = new producto("Carne de Pescado", 1, 0, 0.18, 0.06);
const jamon = new producto ("Jamon", 1, 0.20, 0.15, 0.55);
const vegetalesA = new producto("Vegetales (A)", 1, 0.05, 0.01, 0);
const frutasFrescas = new producto("Frutas Frescas", 1, 0.15, 0.01, 0);

   // lecheSancor.mostrarDatos();
   // yogur.mostrarDatos();
   // quesos1.mostrarDatos();
   // huevo.mostrarDatos();
   // carneVacuna.mostrarDatos();
   // carneCerdo.mostrarDatos();
   // carnePollo.mostrarDatos();
   // carnePescado.mostrarDatos();
   // jamon.mostrarDatos();
   // vegetalesA.mostrarDatos();
   // frutasFrescas.mostrarDatos();
   // carneVacuna.mostrarDatos();

const dieta = [lecheSancor, yogur, quesos1, huevo, carneVacuna, carneCerdo, carnePollo, carnePescado, vegetalesA, jamon, frutasFrescas];


dieta.sort(function (x, y) {

return x.calorias - y.calorias;

});
console.log ('Alimentos ordenados de menor a mayor calorias')
console.table(dieta);


function calcularCantidad (cantOriginal = 0, cantNueva = 0,){

   const cantidadNueva = cantOriginal * cantNueva;
   let dosDecimales = cantidadNueva.toFixed();
   return(dosDecimales);

}


/* Buscar un producto */

for (let i = 0; i < dieta.length; i++) {
   if (Producto1 === dieta[i].nombre) {
      document.getElementById("resultado1_Nombre").innerHTML = dieta[i].nombre;
      document.getElementById("resultado1_Cantidad").innerHTML = calcularCantidad (dieta[i].cantidad, Producto1Cantidad);
      document.getElementById("resultado1_Hdec").innerHTML = calcularCantidad (dieta[i].hidratosDeCarbono, Producto1Cantidad);
      document.getElementById("resultado1_Prot").innerHTML = calcularCantidad (dieta[i].proteinas, Producto1Cantidad);
      document.getElementById("resultado1_Grasas").innerHTML = calcularCantidad (dieta[i].grasas, Producto1Cantidad);
      document.getElementById("resultado1_Calorias").innerHTML = calcularCantidad (dieta[i].calorias, Producto1Cantidad);
   }

} 

for (let i = 0; i < dieta.length; i++) {
   if (Producto2 === dieta[i].nombre); {
      document.getElementById("resultado2_Nombre").innerHTML = Producto2;
      document.getElementById("resultado2_Cantidad").innerHTML = calcularCantidad (dieta[i].cantidad, Producto2Cantidad);
      document.getElementById("resultado2_Hdec").innerHTML = calcularCantidad (dieta[i].hidratosDeCarbono, Producto2Cantidad);
      document.getElementById("resultado2_Prot").innerHTML = calcularCantidad (dieta[i].proteinas, Producto2Cantidad);
      document.getElementById("resultado2_Grasas").innerHTML = calcularCantidad (dieta[i].grasas, Producto2Cantidad);
      document.getElementById("resultado2_Calorias").innerHTML = calcularCantidad (dieta[i].calorias, Producto2Cantidad);
   }
}
for (let i = 0; i < dieta.length; i++) {
   if (Producto3 === dieta[i].nombre); {
      document.getElementById("resultado3_Nombre").innerHTML = Producto3;
      document.getElementById("resultado3_Cantidad").innerHTML = calcularCantidad (dieta[i].cantidad, Producto3Cantidad);
      document.getElementById("resultado3_Hdec").innerHTML = calcularCantidad (dieta[i].hidratosDeCarbono, Producto3Cantidad);
      document.getElementById("resultado3_Prot").innerHTML = calcularCantidad (dieta[i].proteinas, Producto3Cantidad);
      document.getElementById("resultado3_Grasas").innerHTML = calcularCantidad (dieta[i].grasas, Producto3Cantidad);
      document.getElementById("resultado3_Calorias").innerHTML = calcularCantidad (dieta[i].calorias, Producto3Cantidad);
   }
}
for (let i = 0; i < dieta.length; i++) {
   if (Producto4 === dieta[i].nombre); {
      document.getElementById("resultado4_Nombre").innerHTML = Producto4;
      document.getElementById("resultado4_Cantidad").innerHTML = calcularCantidad (dieta[i].cantidad, Producto4Cantidad);
      document.getElementById("resultado4_Hdec").innerHTML = calcularCantidad (dieta[i].hidratosDeCarbono, Producto4Cantidad);
      document.getElementById("resultado4_Prot").innerHTML = calcularCantidad (dieta[i].proteinas, Producto4Cantidad);
      document.getElementById("resultado4_Grasas").innerHTML = calcularCantidad (dieta[i].grasas, Producto4Cantidad);
      document.getElementById("resultado4_Calorias").innerHTML = calcularCantidad (dieta[i].calorias, Producto4Cantidad);
   }
}
for (let i = 0; i < dieta.length; i++) {
   if (Producto5 === dieta[i].nombre); {
      document.getElementById("resultado5_Nombre").innerHTML = Producto5;
      document.getElementById("resultado5_Cantidad").innerHTML = calcularCantidad (dieta[i].cantidad, Producto5Cantidad);
      document.getElementById("resultado5_Hdec").innerHTML = calcularCantidad (dieta[i].hidratosDeCarbono, Producto5Cantidad);
      document.getElementById("resultado5_Prot").innerHTML = calcularCantidad (dieta[i].proteinas, Producto5Cantidad);
      document.getElementById("resultado5_Grasas").innerHTML = calcularCantidad (dieta[i].grasas, Producto5Cantidad);
      document.getElementById("resultado5_Calorias").innerHTML = calcularCantidad (dieta[i].calorias, Producto5Cantidad);
   }
}

$(document).ready(function () {
   $('#tablaResultados').sumtr();
});

