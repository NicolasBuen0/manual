const teclas = document.querySelectorAll(".grid button")
const input = document.querySelector("input")
const linhas = document.querySelector(".selecionar_linhas")
const btnConfirmar = document.querySelector(".confirmar")
const passos = document.querySelector(".passos")


function digitaCampo(event){
    const elemento = event.target.innerText
    if(elemento === "CLR"){
        input.value = "" 
        linhas.style.display="none";
    }

    else if(elemento === "x"){

    }
    else if (elemento != "-" & elemento != "." & elemento != "ABC"){
        input.value += elemento
        linhas.style.display="flex";
    }
    
}

teclas.forEach((item)=>{
    item.addEventListener("click", digitaCampo)
})


linhas.addEventListener("click", ()=>{
  input.value = "05000";
})





function verificaCampo(){
  if(input.value === "05000"){
    btnConfirmar.setAttribute("href","../confirmacao/confirmacao.html")
  }
}

btnConfirmar.addEventListener("click", verificaCampo)