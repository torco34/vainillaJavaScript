

const header = document.getElementById('header')
const inicio = document.getElementById('inicio')
const menu = document.getElementById('menu')
const sabores = document.getElementById('sabor')
const ingresar = document.getElementById('ingresar')

// las API del pestana
const taps1 = document.getElementById('taps1')
const taps2 = document.getElementById('taps2')
const taps3 = document.getElementById('taps3')
const taps4 = document.getElementById('taps4')
 

 class MostrarPestana{
 	constructor(){
     this.pestana()
 	}
 	pestana(){
 		taps4.style.display = "block"
 		taps1.style.display = 'none'
 	}
 }
header.addEventListener('click', () =>{
	let mostrarPestana = new MostrarPestana()
	// alert('hola')
})