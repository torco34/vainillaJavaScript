

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
     // this.removeNaveWithScroll()
     
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

// section donde pone color a la barra y quita la foto header
logNaber(){

    
	
    window.addEventListener('click', (e) =>{
    //logrado no es el mejor reto cambiar el codigo luego
    // mostrar una barra al darle click segun la pestana

    	if( e.target === menu || e.target === sabores || e.target === ingresar){
    	  partHeader.classList.add('nave')
           console.log(partHeader)
    	}else if(e.target === inicio){
    
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
    //quitar la lista segun la pestana
    constructor(){
        this.removeNav()
    }


    removeNav(){
     // Quitar la nav de la pestana inicio
     
    let Localizar = window.pageYOffset;
    window.onscroll = ()=>{
         let desplazar = window.pageYOffset
         if(Localizar < desplazar){
            header.style.display = 'none'
        }else{
           header.style.display = 'block' 
        }
    }
    //Mantener el nav en las pestanas menu, sabor, ingresar

    window.addEventListener('click', e =>{
          window.onscroll = ()=>{
        let desplazar = window.pageYOffset
     
        if(Localizar < desplazar && e.target != menu && e.target != sabor && e.target != ingresar ){

        header.style.display = 'none'

        } else {
         header.style.display = 'block'
      
       
        }
             
     }
    })
   
 }

}

const eyelashTwo = new EyelashTwo()

