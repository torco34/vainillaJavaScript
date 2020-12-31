

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
 
const partHeader = document.querySelector('#foto_header')
 class MostrarPestana{
 	constructor(){
     this.eyelash()
     this.logNaber()
     
 	}
 	
eyelash(){
 		
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

// section donde pone color ala barra y quita la foto header
logNaber(){
	   // const partHeader = document.querySelector('#foto_header')
	
    window.addEventListener('click', (e) =>{
    //logrado no es el mejor reto cambiar el codigo luego
    // mostrar una barra al darle click segun la pestana
    	if( e.target === menu || e.target === sabores || e.target === ingresar){
    		partHeader.classList.add('nave')
    		// partHeader.classList.remove('nave')

    	}else if(e.target === inicio){
        // partHeader.classList.add('header')
    	partHeader.classList.remove('nave')
    	}
      })  
	} 
 }




header.addEventListener('click', () =>{
	let mostrarPestana = new MostrarPestana()
	
})


// section de la pestana de menu y la parra de navegacion

class EyelashTwo {
    // agrgar color a la barra
    constructor(){
        this.addColour()
    }
    addColour(){
     // section the onscroll
     
    let Localizar = window.pageYOffset;
    const nuevo = header
    console.log(nuevo)
     console.log( Localizar)
     window.onscroll = ()=>{
        let desplazar = window.pageYOffset
        console.log( desplazar)
        if(Localizar < desplazar  ){

        header.style.display = 'none'
        
        }else{
        
        nuevo.style.display = 'block'
       
        }
          
          
            
          }

    }
}

const eyelashTwo = new EyelashTwo()

// window.addEventListener('click', event =>{

 		// 	 const encabezado = document.querySelector('#foto_header')
   //           if(encabezado.classList.toggle('nav') && event.target != encabezado){
   //            encabezado.classList.toggle('header')
   //           }
 	         
 	 //     console.log(encabezado.classList.toggle('nav'))
 	 //     // console.log(encabezado.classList.toggle('header'))
 			
 		// })