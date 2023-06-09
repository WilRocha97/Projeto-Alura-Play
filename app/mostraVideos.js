import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

// constroi um card para o vídeo
export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li")
    video.className = "video__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img src="${imagem}" alt="Logo do canal Alura Cursos Online">
                        <h3>${titulo}</h3>
                        <p>${descricao}</p>
                    </div>`

    return video;
}

// para cada vídeo na lista da pi constroi um elemento filho na lista de vídeos da página
async function listaVideo() {
    try {
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(element => lista.appendChild(
            constroiCard(element.titulo, element.descricao, element.url, element.imagem,)));
        } catch {
            lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar os vídeos :( (Este site usa um servidor local com a API dos vídeos)</h2>`
        }
}

listaVideo()