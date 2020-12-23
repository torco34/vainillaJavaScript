class NombreLista{
	constructor(inicio, menu,  sabores, ingresar){
     this.inicio = inicio
     this.menu = menu
     this.sabores =  sabores
     this.ingresar = ingresar
	}
	mostrarTaps(){
		console.log(`hola, soy : ${this.nombre}, ${this.apellido}`)
	}
}

let tasp = new NombreLista(`${this.menu}`)


const inicio = document.getElementById('inicio')
const menu = document.getElementById('menu')
const sabores = document.getElementById('sabor')
const ingresar = document.getElementById('ingresar')

// las API del pestana
const taps1 = document.getElementById('taps1')
const taps2 = document.getElementById('taps2')
const taps3 = document.getElementById('taps3')
const taps4 = document.getElementById('taps4')
// function Persona(nombre, apellidos, edad, ){
// 	this.nombre = nombre
// 	this.apellidos = apellidos
// 	this.edad = edad
// }

// let toco = new Persona('torco', 'arias', 35)