import { apagarDoLocalStore, desenharProdutoCarrinhoSimples, lerLocalStore, salvarLocalStorage } from "./src/ultilidades";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStore("carrinho") ?? {};
    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento){
  evento.preventDefault(); //pra tirar a funcao padrao do submit
  const idsProdutoCarrinhoComQuantidade = lerLocalStore("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length===0) {
    return;
  }
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };
  const historicoDePedidos = lerLocalStore("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos]; //operador espalhamento - pega o item novo e desmancha a lista antiga

  salvarLocalStorage("historico", historicoDePedidosAtualizado);
  apagarDoLocalStore("carrinho");

  window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));