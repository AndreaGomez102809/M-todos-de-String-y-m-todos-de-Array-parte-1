//Métodos de String//

// Recorre la cadena y muestra un alert con cada caracter de la misma//
var saludo = "Buenos dias";
for(i = 0 ; i< saludo.length; i++) { 
  console.log( saludo.charAt(i) ) ; 
}

//También se puede utilizar pasándole el índice//
var saludo = "Buenos dias";
alert(saludo.charAt(2));

//Devuelve un String con el número de copias de la cadena especificado por parámetro.//
var hoby = "Me gustaria salir a correr";
var resultado = hoby.repeat(2);

//Devuelve la posición de la primera ocurrencia del carácter pasado como parámetro. //
var hoby = "Me gustaria tener el talento de cantar";
var indice = hoby.indexOf("cantar"); 

//Devuelve la cadena en minúsculas. No la cambia.//
var leer = "la lectura enrriquce el alma"
leer = leer.toLowerCase();

//Extrae una parte de una cadena en base a los parámetros que indiquemos como índices de inicio y final.//
var sed = "siempre que hace calor me da sed"; 
var sed = sed.slice(7); 
var sed = sed.slice(7, -32);

//Devuelve la cadena en mayúsculas. No la cambia//
var feliz=("hoy quiero estar feliz");
feliz = feliz.toUpperCase(); 






//Métodos de Array//

//Junta los elementos de un array en una cadena con un separador – opcional.//
var nombre = ["Michely", "Andrea", "Gomez"];
var nombresPegados = nombres.join(); 

//Añadir elementos a un Array//
var deportes = ["Fútbol", "Tenis", "Voleibol", "Béisbol."];
var resultado = deportes.splice(2, 0, "Baloncesto", "Golf");
console.log(deportes.splice);

//Borrar elementos de un Array//
var deportes = ["Fútbol", "Tenis", "Voleibol", "Béisbol."];
var resultado = deportes.splice(2, 2);

//Añadir elementos a un Array y borrar uno.//
var deportes = ["Fútbol", "Tenis", "Voleibol", "Béisbol."];
var resultado = deportes.splice(2, 1, "Baloncesto", "Golf");

//Busca un elemento en el array y devuelve su posición. Busca desde el principio y a partir de la primera posición si no se especifica nada//
var deportes = ["Fútbol", "Tenis", "Voleibol", "Béisbol."];
console.log(deporte.indexOf("Fútbol")); 