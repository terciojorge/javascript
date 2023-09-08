// const nomeProduto = "Casaco Branco";
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = "product-1.jpg"
//ctrl + k e ctrl + c pra fazer comentarios

//alert("Opa, olha o javascript aqui funcionando!");

// const produto1 = {
//     id: 1,
//     nome: "Casaco Branco",
//     marca: "Zara", 
//     preco: 70,
//     nomeArquivoImagem: "product-1.jpg",
// };

// const produto2 = {
//     id: 2,
//     nome: "Sobretudo Azul Marinho",
//     marca: "Zara", 
//     preco: 110,
//     nomeArquivoImagem: "product-2.jpg",
// };
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";




renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
