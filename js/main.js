const header = document.getElementById("header");
const quitarImg = document.getElementById("foto_header");
let ubicacion = window.pageYOffset;

console.log(header);

window.onscroll = function () {
  let desplaza = window.pageYOffset;
  console.log(header);

  if (ubicacion < desplaza) {
    header.style.top = "0";
    header.style.transition = "0.6s";
    header.style.top = "-120px";
  } else {
    header.style.transition = "0.6s";
    header.style.top = "0px";
  }
};
// creando pestanas
const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");
const sabores = document.getElementById("sabor");
const ingresar = document.getElementById("ingresar");

// las API del pestana
const taps1 = document.getElementById("taps1");
const taps2 = document.getElementById("taps2");
const taps3 = document.getElementById("taps3");
const taps4 = document.getElementById("taps4");
const taps5 = document.getElementById("taps5");
console.log(taps2);
console.log(taps1);
console.log(taps3);
// const documen = document.getElementById('header')
// console.log(documen)
const pesMenu = () => {
  // documen.classList.toggle("header")
  taps1.style.display = "none";
  taps2.style.display = "block";
  taps3.style.display = "none";
  taps4.style.display = "none";
  taps5.style.display = "none";
  // quitarImg.style.display = 'none'
  inicio.classList.remove("active");
  menu.classList.remove("active");
  inicio.classList.remove("active");
  sabores.classList.remove("active");
  ingresar.classList.remove("active");
  menu.classList.add("active");
};

const pesInicio = () => {
  taps1.style.display = "block";
  //   quitarImg.style.display = "block";
  taps2.style.display = "none";
  taps4.style.display = "none";
  taps3.style.display = "none";
  taps5.style.display = "block";
  menu.classList.remove("active");
  sabores.classList.remove("active");
  ingresar.classList.remove("active");
  inicio.classList.add("active");
};

const pesSabores = () => {
  taps1.style.display = "none";
  taps2.style.display = "none";
  taps4.style.display = "none";
  taps5.style.display = "none";
  //   quitarImg.style.display = "none";
  taps3.style.display = "block";
  inicio.classList.remove("active");
  menu.classList.remove("active");
  ingresar.classList.remove("active");
  sabores.classList.add("active");
};

const pesIgresar = () => {
  taps1.style.display = "none";
  taps2.style.display = "none";
  taps3.style.display = "none";
  taps5.style.display = "none";
  // quitarImg.style.display = 'none'
  taps4.style.display = "block";
  inicio.classList.remove("active");
  menu.classList.remove("active");
  inicio.classList.remove("active");
  sabores.classList.remove("active");
  ingresar.classList.remove("active");
  ingresar.classList.add("active");
};

menu.addEventListener("click", pesMenu);
inicio.addEventListener("click", pesInicio);
sabores.addEventListener("click", pesSabores);
ingresar.addEventListener("click", pesIgresar);
