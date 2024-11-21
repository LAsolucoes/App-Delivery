const modalMeuCarrinho = document.querySelector("#modal-background")
const btnFecharModal = document.querySelector("#btn-fechar")
const btnVerCarrinho = document.querySelector("#ver-carrinho")
const btnAddProduto = document.querySelector(".btn-add-produto")
const updateItens = document.querySelector(".content-itens")
const subtotalCarrinho = document.querySelector("#subtotal")
const menuBars = document.querySelector("#bars")
const menuClose = document.querySelector("#close")
const modalMenu = document.querySelector("#modal-menu")
const modalMenuSobre = document.querySelector("#sobre")
const modalMenuHorario = document.querySelector("horarios")

const linkModalHorario = document
let carrinho = []

/* Função de Abrir e fechar Modal menu Bars */
function abrirModalDadosEstabelecimento() {
    menuBars.style.display = "none"
    menuClose.style.display = "flex"
    modalMenu.style.display = "block"
} menuBars.addEventListener("click", abrirModalDadosEstabelecimento)

function fecharModalDadosEstabelecimento() {
    menuBars.style.display = "block"
    menuClose.style.display = "none"
    modalMenu.style.display = "none"
} menuClose.addEventListener("click", fecharModalDadosEstabelecimento)

function fecharModalDadosEstabelecimentoCLickFora(event) {
    if (event.target === modalMenu) {
        menuBars.style.display = "block"
        menuClose.style.display = "none"
        modalMenu.style.display = "none"
        }
} modalMenu.addEventListener("click", fecharModalDadosEstabelecimentoCLickFora)

/*****************  CORRIGIR *************** */
function dadosEstabelecimento() {
        document.querySelector("#sobre").style.display = "none"
    
        document.getElementById("horarios").style.display = "block"  
   
    
}document.getElementById("link-horarios").addEventListener("click" , dadosEstabelecimento)
/************************************************ */

/* Função Abrir e Fechar Modal do Carrinho (MEU CARRINHO) */
function abrirModalMeuCarrinho() {
    modalMeuCarrinho.style.display = "flex"
} btnVerCarrinho.addEventListener("click", abrirModalMeuCarrinho)

function fecharModalMeuCarrinho() {
    modalMeuCarrinho.style.display = "none"
} btnFecharModal.addEventListener("click", fecharModalMeuCarrinho)

function fecharModalMeuCarrinhoClickFora(event) {
    if (event.target === modalMeuCarrinho) {
        modalMeuCarrinho.style.display = "none"
    }
} modalMeuCarrinho.addEventListener("click", fecharModalMeuCarrinhoClickFora)


// 

function addPegarIntemClicado(event) {
    const btnPaiAddProduto = event.target.closest(".btn-add-produto")

    if (btnPaiAddProduto) {
        const name = btnPaiAddProduto.getAttribute("data-name")
        const valor = parseFloat(btnPaiAddProduto.getAttribute("data-price")).toFixed(2)
        addiItemCarrinho(name, valor)
    }
} document.querySelector("main").addEventListener("click", addPegarIntemClicado)


function addiItemCarrinho(name, valor) {
    const verificarQuantidade = carrinho.find(item => item.name === name)
    if (verificarQuantidade) {
        verificarQuantidade.quantidade += 1


    } else {
        carrinho.push({
            name,
            valor,
            quantidade: 1
        })
    }
    addProdutoMeuCarrinho()
}



function addProdutoMeuCarrinho() {
    updateItens.innerHTML = ""
    total = 0

    carrinho.forEach(item => {
        const itemsCarrinho = document.createElement("div")
        itemsCarrinho.innerHTML = `
       
       <div class=" itens-adiconado">
           <div>
            <p><strong>${item.name}</strong></p>
             <p>Valor Un.: R$${item.valor}</p>
             <p>Qtd.: <strong>${item.quantidade}</strong></p>
           </div>
           <div>
           <button> <i class="fa-solid fa-trash"></i> </button>
           </div>
       </div>
       <hr>
       `

        updateItens.appendChild(itemsCarrinho)

        total += item.quantidade * item.valor
        subtotalCarrinho.innerHTML = "Total R$" + total.toFixed(2)

        let totalItens = carrinho.length
        if (totalItens > 0) {
            btnVerCarrinho.querySelector("span").textContent = `( ${totalItens} )`
        }



    });


}