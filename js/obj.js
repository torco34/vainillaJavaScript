

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
     this.logNaber()
 	}
 	pestana(e){
 		
 			
 			ingresar.classList.remove('active')
 			sabores.classList.remove('active')
 			menu.classList.remove('active')
 			inicio.classList.remove('active')


 			// quitar pestana
 			taps1.style.display = "none"
 		    taps2.style.display = 'none'
 		    taps3.style.display = 'none'
 		    taps4.style.display = 'none'

 		    // colocando el evento a la lista

 		    const list =  event.target 
 		    const bodyTaps = list.dataset.body;

 		    const viewBody = document.querySelector(bodyTaps)
            
            viewBody.style.display = 'block'


 		    // const remover = event.target.dataset.cuerpo

 		    // const moveColour = list.parentNode
 		    list.classList.add('active')
 		    console.log(list)
 		     console.log(moveColour)
 		    console.log(bodyTaps)
 		     console.log(viewBody)
 		
 		
 	}
 	logNaber(){
 		window.addEventListener('click', (e)=>{
 			// console.log(e.target)
 		})

 	}	
 	
 }
header.addEventListener('click', () =>{
	let mostrarPestana = new MostrarPestana()
	// alert('hola')
})