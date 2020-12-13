const header = document.getElementById('header')
const quitarImg = document.getElementById('foto_header')
let ubicacion = window.pageYOffset

console.log(quitarImg)

window.onscroll = function(){
let desplaza = window.pageYOffset


if(ubicacion < desplaza ){
	header.style.top = '0'
	header.style.transition = "0.6s";
    header.style.top = "-120px"
	console.log(desplaza)

}else {
	
	header.style.transition = "0.6s";
	header.style.top = '0px'
}

}
// creando pestanas
const inicio = document.getElementById('inicio')
const menu = document.getElementById('menu')
const sabores = document.getElementById('sabor')
const ingresar = document.getElementById('ingresar')
console.log(inicio)
console.log(menu)
console.log(sabores)
console.log(ingresar )

const taps1 = document.getElementById('taps1')
const taps2 = document.getElementById('taps2')
console.log(taps2)
const pesMenu = () =>{
taps1.style.display = "block"
taps2.style.display = "none"
inicio.classList.remove('active')
menu.classList.add('active')
// let link = menu.classList.add('active')
// console.log(link)
} 


const pesInicio = () => {
let num = 3

taps1.style.display = "none"
taps2.style.display = "block"
menu.classList.remove('active')
inicio.classList.add('active')
if(num){

// quitarImg.style.display = 'none'	quitar la foto que me quede solo la pestana
}

// alert('hola')

}

const nose = () =>{
	// refresh una  pagina y quedar en la misma pestana
	// no se como pero si debuelvo la funcion con una condicional 
	// creo que me funciona
	// let link = pesMenu()

	// return pesMenu()
	
	// console.log(link)
}
const debolve =() =>{
	return pesInicio()
	nose()
}
debolve()
nose()
menu.addEventListener('click', pesMenu)
inicio.addEventListener('click', pesInicio)