const header = document.getElementById('header')
let ubicacion = window.pageYOffset

console.log(ubicacion, header)

window.onscroll = function(){
let desplaza = window.pageYOffset


if(ubicacion < desplaza ){
	header.style.top = '0'
	header.style.transition = "0.3s";
    header.style.top = "-120px"
	console.log(desplaza)

}else {
	
	header.style.transition = "0.6s";
	header.style.top = '0px'
}

}
