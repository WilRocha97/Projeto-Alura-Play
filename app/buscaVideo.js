import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

async function buscaVideo(evento) {
evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")
    
    //limpa a lista de vídeos
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    // exibe a lista personalizada com os resultados da busca
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento))