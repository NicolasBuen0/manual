const btnHome = document.querySelector(".btn.home");
const main = document.querySelector(".conteudo");


const passo = document.querySelector(".passo");

setTimeout(()=>{
  passo.classList.add("ativo")
}, 1000)

setTimeout(()=>{
  btnHome.classList.add("ativo")
}, 2000)

const input = document.querySelector("input")

input.addEventListener("click", ()=>{
  document.body.style.display="fixed";
})


