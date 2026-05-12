const params = new URLSearchParams(window.location.search);
const albumId = params.get("id");

const album = itens.albuns.find(a => a.id == albumId);

const albumHeader = document.getElementById("album-header");
const tracklist = document.getElementById("tracklist");
const relatedAlbums = document.getElementById("related-albums");


albumHeader.innerHTML = `
<div class="album-layout">
    <div class="album-cover">
        <img src="${album.imagem_principal}" alt="${album.nome}">
    </div>

    <div class="album-info">
        <span class="artist-name">
            ${album.artista}
        </span>

        <h1 class="album-title">
            ${album.nome}
        </h1>

        <div class="album-meta">
            <div>
                <span>Gênero</span>
                <strong>${album.genero}</strong>
            </div>

            <div>
                <span>Ano</span>
                <strong>${album.data.slice(0,4)}</strong>
            </div>

            <div>
                <span>Faixas</span>
                <strong>${album.faixas.length}</strong>
            </div>
        </div>

        <p class="album-description">
            ${album.conteudo}
        </p>
    </div>
</div>
`;


album.faixas.forEach((faixa, index) => {

    tracklist.innerHTML += `
    <div class="track-item">

        <div class="track-left">
            <span class="track-number">
                ${index + 1}
            </span>

            <span class="track-name">
                ${faixa.nome}
            </span>
        </div>

        <span class="track-duration">
            ${faixa.duracao}
        </span>

    </div>
    `;
});

const relacionados = itens.albuns.filter(a => a.id != album.id);

relacionados.forEach(relacionado => {

    relatedAlbums.innerHTML += `
    <a href="detalhes.html?id=${relacionado.id}" class="related-card">
        <img src="${relacionado.imagem_principal}" alt="${relacionado.nome}">
    </a>
    `;
});