const header = document.getElementById('header')
let ubicacion = window.pageYOffset

console.log(ubicacion, header)

window.onscroll = function(){
let desplaza = window.pageYOffset
if(ubicacion < desplaza ){
	// header.style.top = '0'
	header.style.transition = "0.5s";
    header.style.top = "-120px"
	// header.style.background = ""
	console.log(desplaza)

}else {
	
	
	header.style.top = "0px"
	header.style.transition = "0.5s";
	// header.style.background = "#497e6a"
}
ubicacion = desplaza
console.log(desplaza, ubicacion )
}
