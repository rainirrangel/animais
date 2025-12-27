// const imagens = document.querySelectorAll("img");

// console.log(imagens);

// const imagensAnimais = document.querySelectorAll(".animais-imagens img");

// console.log(imagensAnimais);

// const linksInternos = document.querySelectorAll('[href^="#"]');

// console.log(linksInternos);

// const primeiroH2 = document.querySelector(".animais-descricao h2");

// console.log(primeiroH2.innerText);

// const ultimoP = document.querySelectorAll("p");

// console.log(ultimoP[--ultimoP.length].innerText);

// const paragrafos = document.querySelectorAll("p");

// // console.log(paragrafos);
// paragrafos.forEach((item, index) => console.log(item.innerText, index));

// const menuItens = document.querySelectorAll(".menu a");

// menuItens.forEach((item) => item.classList.add("ativo"));

// menuItens.forEach((item) => item.classList.remove("ativo"));

// menuItens[0].classList.add("ativo");

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, i) => console.log(imgs[i].src, item.hasAttribute("alt")));

/*
const linkExterno = document.querySelector(".menu a[href^=https]");

linkExterno.setAttribute("href", "https://google.com");
console.log(linkExterno.innerText);
*/

/*
const primeiraImagem = document.querySelector("img");

const distanciaTop = primeiraImagem.offsetTop;

console.log(distanciaTop);
*/

/*
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
    console.log(soma);
  });
  console.log(`A soma das larguras das imagens do site é ${soma}px.`);
}

window.onload = function () {
  somaImagens();
};
*/
/*
const links = document.querySelectorAll("a");

console.log(links);

links.forEach((link) => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48) {
    console.log(`${link.href} possui tamanho adequado para mobile.`);
  } else {
    console.log(`${link.href} não possui tamanho adequado para mobile.`);
  }
});
*/
/*
const larguraTela = window.innerWidth;
if (larguraTela < 720) {
const menu = document.querySelector(".menu");
menu.classList.add("menu-mobile");
}
*/
/*
const larguraTela = window.matchMedia("(max-width: 720px)").matches;
if (larguraTela) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
*/
/*
const linksInternos = document.querySelectorAll('a[href^="#"]');

function ativo(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.target.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", ativo);
});
*/
/*
todosElementos = document.querySelectorAll("body *");

function mostrar(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", mostrar);
});
*/
/*
todosElementos = document.querySelectorAll("body *");

function mostrar(event) {
  event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", mostrar);
});
*/

// const todoTexto = document.querySelectorAll("p, a, h1, h2");

// function aumentarTexto(event) {
//   let tecla = event.key;
//   if (tecla === "t" || tecla === "T") {
//     todoTexto.forEach((elemento) => {
//       let tamanhoAtual = elemento.getPropertyValue("font-size");
//       elemento.style.fontSize = "calc()";
//     });
//     console.log(`A tecla ${tecla} foi pressionada.`);
//   }
// }

// document.addEventListener("keydown", aumentarTexto);
/*
const menu = document.querySelector(".menu");
const footer = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
footer.appendChild(cloneMenu);

const Dl = document.querySelector(".faq dl");
const primeiroDt = Dl.firstElementChild;
const primeiroDd = primeiroDt.nextElementSibling;

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
*/
