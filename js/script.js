


/* let vh = window.innerHeight * 0.01;   
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }); */

const decoracoes = document.querySelector(".decoracoes");
console
function hide(){
  if( window.innerHeight < 600){
    decoracoes.style.display="none";
  }
  else{
    decoracoes.style.display="flex";
  }
  
}
hide();
addEventListener("resize", hide)




const btnHome = document.querySelector(".btn.home");
const main = document.querySelector(".conteudo");


const passo = document.querySelector(".passo");

setTimeout(()=>{
  passo.classList.add("ativo")
}, 3000)

setTimeout(()=>{
  btnHome.classList.add("ativo")
}, 4000)

const input = document.querySelector("input")

input.addEventListener("click", ()=>{
  document.body.style.display="fixed";
})


