

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
 	pestana(){
 		
 			// quitando el color de hover de cada lista
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

 		    // mover el pestana con el evento

 		    const bodyTaps = list.dataset.body;
            // agrupar la pesta pa luego mostra
 		    const viewBody = document.querySelector(bodyTaps)
            // mostrando el cuerpo de cada pestana
            // debugger
            viewBody.style.display = 'block'
            
            
            // mover el color de cada pestana segun este el evento
 		    list.classList.add('active')
 	
 		
 		
 	}
 	logNaber(){
    const quitar = document.querySelector('#foto_header')
    
    window.addEventListener('click', (e) =>{
    	console.log(e.target)
    	 if(true && e.target != header  ){
         quitar.classList.add('nave')

         return inicio

    	 }
    	 
    })
   
   



}

 	
 }
header.addEventListener('click', () =>{
	let mostrarPestana = new MostrarPestana()
	// alert('hola')
})

// window.addEventListener('click', event =>{

 		// 	 const encabezado = document.querySelector('#foto_header')
   //           if(encabezado.classList.toggle('nav') && event.target != encabezado){
   //            encabezado.classList.toggle('header')
   //           }
 	         
 	 //     console.log(encabezado.classList.toggle('nav'))
 	 //     // console.log(encabezado.classList.toggle('header'))
 			
 		// })