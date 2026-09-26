const dadosProjetos = [
    {
        nome: "Projeto 1",
        descricao: "projeto legal feito com a mor e carinho ai sla o que nos fez nos so sabe que foi bom e e isso mermão e aszidea ne pai",
        categoria: "Educação"
    },

    {
        nome: "Projeto 2",
        descricao: "Dprojeto legal feito com a mor e carinho ai sla o que nos fez nos so sabe que foi bom e e isso mermão e aszidea ne pai",
        categoria: "Voluntariado"
    },

    {
        nome: "Projeto 3",
        descricao: "projeto legal feito com a mor e carinho ai sla o que nos fez nos so sabe que foi bom e e isso mermão e aszidea ne pai",
        categoria: "Doação"
    }
];


export function projetos(app) {

    const listaProjetos = dadosProjetos.map(function (projeto) {
        return `
            <article class="projetos">
                <h3>${projeto.nome}</h3>

                <p>
                    ${projeto.descricao}
                </p>

                <span class="badge">${projeto.categoria}</span>
            </article>
        `;
    });

    app.innerHTML = `
        <h2>Nossos projetos e doações</h2>

        <section class="lista-projetos">
            ${listaProjetos.join("")}
        </section>

        <article class="doacoes">
            <h3>Doações</h3>

            <p>
                Para contribuir com doações, é possível enviar neste PIX ou nos contatar
                pelos nossos meios de comunicação.
            </p>

            <p>Chave: vhoi23ad5fafaaf235</p>
        </article>
    `;
}