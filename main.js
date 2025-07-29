alert("biemvenido a la primer prueba de calculador");
let nombre = prompt("ingrese su nombre");

let peso = 0;
let altura = 0;
let inicio = prompt("confirme su nombre para validarlo");
let permiso = false;
let sumador = 0;
nombre === inicio ? (permiso = true) : (permiso = false);

if (permiso) {
  alert("hola " + nombre + " bienvenido");
  alert("tienes tres pruebas gratis");

  for (sumador = 0; sumador < 3; sumador++) {
    peso = Number(prompt("ingrese su peso en kilos"));
    altura = Number(prompt("ingrese su altura en metros"));
    if ((peso < 200) & (altura < 3)) {
      alert(
        "estas dentro de lo logico de altura y peso... proximamente esto va a calcular si estas bien de peso"
      );
      if (sumador < 3) {
        alert("todavia te quedan pruebas gratis");
      }
    } else {
      alert(
        "o tu peso supera los 200 kilos lo cual es raro o medis mas de tres metros lo cual tambien es raro"
      );
      alert("por favor poner un valor mas razonable");
      sumador--;
    }
  }
  alert("tu fase de prueba se termino.");
} else {
  alert("este nombre no esta registrado");
  inicio = prompt("ingrese el nombre que ingreso al principio");
}

permiso = false;
