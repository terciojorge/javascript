import { desenharProdutoCarrinhoSimples, lerLocalStore } from "./src/ultilidades";

function criarPedidoHistorico(pedidoComData){
    const elementoPedido = `<p class="text-xl text-bold my-4">${new Date(
      pedidoComData.dataPedido
    ).toLocaleDateString("pt-br", { hour: "2-digit", minute: "2-digit" })}</p>
        <section id="container-pedidos-${
          pedidoComData.dataPedido
        }" class="bg-slate-300 p-3 rounded-m"></section>
        `;
    const main= document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoComData.pedido){
        desenharProdutoCarrinhoSimples(idProduto,`container-pedidos-${pedidoComData.dataPedido}`,pedidoComData.pedido[idProduto]);

    }


}

export function renderizarHistoricoPedidos(){
    const historico = lerLocalStore('historico');
    for(const pedidoComData of historico){ //in vai no indice do objeto , o of não

        criarPedidoHistorico(pedidoComData);

    }
}

renderizarHistoricoPedidos();