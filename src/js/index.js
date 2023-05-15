const bataoAlteraTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector('body')
const imagemBtnTema = document.querySelector(".imagem-botao")

bataoAlteraTema.addEventListener("click", () =>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro")

    if(modoEscuroAtivo){   
        imagemBtnTema.setAttribute("src", "./src/img/sun.png") 
    }else{ 
        imagemBtnTema.setAttribute("src", "./src/img/moon.png") 
    }   
    
})