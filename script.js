const modalMeuCarrinho = document.querySelector("#modal-background");
const btnFecharModal = document.querySelector("#btn-fechar");
const btnVerCarrinho = document.querySelector("#ver-carrinho");
const btnAddProduto = document.querySelector(".btn-add-produto");
const updateItens = document.querySelector(".content-itens");
const subtotalCarrinho = document.querySelector("#subtotal");
const menuBars = document.querySelector("#bars");
const menuClose = document.querySelector("#close");
const modalMenu = document.querySelector("#modal-menu");
const modalMenuLinkSobre = document.querySelector("#link-sobre")
const modalMenuLinkHorarios = document.querySelector("#link-horarios");
const modalMenuLinkPagamentos = document.querySelector("#link-pagamentos");
const modalMenuSobre = document.querySelector("#modal-menu-sobre");
const modalMenuHorario = document.querySelector("#modal-menu-horarios");
const modalMenuPagamentos = document.querySelector("#modal-menu-pagamentos")
const containerCategorias = document.querySelector(".container-categoria")
const rodape = document.querySelector("footer")





const modalProdutosSelecionado = document.querySelector("#modal-produtos")
const modalCloseProdutos = document.querySelector("#modal-close-produtos")
const produtoSelecionado = document.querySelector(".container")


let carrinho = [];

/* Função de Abrir e fechar Modal menu Bars */
function abrirModalDadosEstabelecimento() {
  menuBars.style.display = "none";
  menuClose.style.display = "flex";
  modalMenu.style.display = "block";
  btnVerCarrinho.style.display = "none"
  containerCategorias.style.display = "none"
  rodape.style.display = "none"
}
menuBars.addEventListener("click", abrirModalDadosEstabelecimento);

function fecharModalDadosEstabelecimento() {
  menuBars.style.display = "block";
  menuClose.style.display = "none";
  modalMenu.style.display = "none";
  btnVerCarrinho.style.display = "block"
  containerCategorias.style.display = "block"
  rodape.style.display = "block"
}
menuClose.addEventListener("click", fecharModalDadosEstabelecimento);

function fecharModalDadosEstabelecimentoCLickFora(event) {
  if (event.target === modalMenu) {
    menuBars.style.display = "block";
    menuClose.style.display = "none";
    modalMenu.style.display = "none";
    btnVerCarrinho.style.display = "block"
    containerCategorias.style.display = "block"
    rodape.style.display = "block"

  }
}
modalMenu.addEventListener("click", fecharModalDadosEstabelecimentoCLickFora);

/*Função de Navegacao dos dados do estabelecimento */
function dadosEstabelecimentoSobre(event) {
  event.preventDefault();
  modalMenuSobre.style.display = "block";
  modalMenuPagamentos.style.display = "none"
  modalMenuHorario.style.display = "none";
} modalMenuLinkSobre.addEventListener("click", dadosEstabelecimentoSobre);

function dadosEstabelecimentoHorarios(event) {
  event.preventDefault();
  modalMenuSobre.style.display = "none";
  modalMenuPagamentos.style.display = "none"
  modalMenuHorario.style.display = "block";
} modalMenuLinkHorarios.addEventListener("click", dadosEstabelecimentoHorarios);

function dadosEstabelecimentoPagamentos(event) {
  event.preventDefault();
  modalMenuSobre.style.display = "none";
  modalMenuHorario.style.display = "none";
  modalMenuPagamentos.style.display = "block"

} modalMenuLinkPagamentos.addEventListener("click", dadosEstabelecimentoPagamentos);


/************************************************ */

/* Função Abrir e Fechar Modal do Carrinho (MEU CARRINHO) */
function abrirModalMeuCarrinho() {
  modalMeuCarrinho.style.display = "flex";
}
btnVerCarrinho.addEventListener("click", abrirModalMeuCarrinho);

function fecharModalMeuCarrinho() {
  modalMeuCarrinho.style.display = "none";
}
btnFecharModal.addEventListener("click", fecharModalMeuCarrinho);

function fecharModalMeuCarrinhoClickFora(event) {
  if (event.target === modalMeuCarrinho) {
    modalMeuCarrinho.style.display = "none";
  }
}
modalMeuCarrinho.addEventListener("click", fecharModalMeuCarrinhoClickFora);







//

function addPegarIntemClicado(event) {
  const btnPaiAddProduto = event.target.closest(".btn-add-produto");

  if (btnPaiAddProduto) {
    const name = btnPaiAddProduto.getAttribute("data-name");
    const valor = parseFloat(
      btnPaiAddProduto.getAttribute("data-price")

    ).toFixed(2);
    addiItemCarrinho(name, valor);
  }
}
document.querySelector("main").addEventListener("click", addPegarIntemClicado);



function addiItemCarrinho(name, valor) {
  const verificarQuantidade = carrinho.find((item) => item.name === name);
  if (verificarQuantidade) {
    verificarQuantidade.quantidade += 1;
  } else {
    carrinho.push({
      name,
      valor,
      quantidade: 1,
    });
  }
  addProdutoMeuCarrinho();
}



function addProdutoMeuCarrinho() {
  updateItens.innerHTML = "";
  total = 0;

  carrinho.forEach((item) => {
    const itemsCarrinho = document.createElement("div");
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
       `;

    updateItens.appendChild(itemsCarrinho);

    total += item.quantidade * item.valor;
    subtotalCarrinho.innerHTML = "Total R$" + total.toFixed(2);

    let totalItens = carrinho.length;
    if (totalItens > 0) {
      btnVerCarrinho.querySelector("span").textContent = `( ${totalItens} )`;
    }
  });
}


/* Fechar e abrir modal dos produtos selecionados */
function abrir() {
  modalProdutosSelecionado.style.display = "block"

} document.querySelector(".container").addEventListener("click", abrir)

function fechar() {
  modalProdutosSelecionado.style.display = "none"
} modalCloseProdutos.addEventListener("click", fechar)

function fecharClickFora() {
  modalProdutosSelecionado.style.display = "none"
} modalProdutosSelecionado.addEventListener("click", fecharClickFora)

/* Funcao que pega qual elemento foi clicado e adiciona a modal de produtos selecionado */

function selecionarProduto(event) {
  const pegarProdutoClicado = event.target.closest(".container");

  if (pegarProdutoClicado) {
    const name = pegarProdutoClicado.querySelector(".descricao").textContent;

    const valorString = pegarProdutoClicado.querySelector(".valor").textContent;

    const valor = parseFloat(valorString.replace(",", "."))

    console.log(name, "R$" + valor.toFixed(2));
  }
}

document.querySelector("main").addEventListener("click", selecionarProduto);


