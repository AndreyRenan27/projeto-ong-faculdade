import { projetos } from "./projetos.js";
import { cadastro } from "./cadastro.js";
import { salvarUsuario, buscarUsuario } from "./storage.js";

const app = document.getElementById("app");

function inicio() {
    app.innerHTML = `
        <section class="section1">

            <img src="../imagens/imagem.png"
                alt="Imagem representando uma ação social da ONG">

            <h2 class="sobrenos">Sobre nós</h2>

            <p>
                Somos uma ONG solidária focada em ajudar a comunidade.
                Somos uma ONG solidária focada em ajudar a comunidade
                Somos uma ONG solidária focada em ajudar a comunidade
                Somos uma ONG solidária focada em ajudar a comunidade
                Somos uma ONG solidária focada em ajudar a comunidade.
            </p>

        </section>

        <section class="section2">

            <h2>Avisos importantes!</h2>

            <article class="avisos">
                <h3>Aviso 1</h3>
                <p>fizemos varias coisas solidarias legais vice so se vendo</p>
            </article>

            <article class="avisos">
                <h3>Aviso 2</h3>
                <p>fizemos varias coisas solidarias legais vice so se vendo</p>
            </article>

            <article class="avisos">
                <h3>Aviso 3</h3>
                <p>fizemos varias coisas solidarias legais vice so se vendo</p>
            </article>

            <article class="contato">
                <h3>Contato</h3>
                <p>E-mail: contato@ongsolidaria.com</p>
                <p>Telefone: (83) 99999-9999</p>
            </article>

        </section>
    `;
}

app.addEventListener("submit", function (event) {
    event.preventDefault();

    const formulario = event.target;

    const nome = formulario.nome.value;
    const email = formulario.email.value;

    const dadosUsuario = {
        nome: nome,
        email: email
    };

    salvarUsuario(dadosUsuario);

    const usuario = buscarUsuario();

    console.log(usuario.nome);
    console.log(usuario.email);
});


// ====================
// LINKS DO MENU
// ====================

const linkInicio = document.getElementById("link-inicio");
const linkProjetos = document.getElementById("link-projetos");
const linkCadastro = document.getElementById("link-cadastro");


linkInicio.addEventListener("click", function (event) {
    event.preventDefault();
    inicio();
});


linkProjetos.addEventListener("click", function (event) {
    event.preventDefault();
    projetos(app);
});


linkCadastro.addEventListener("click", function (event) {
    event.preventDefault();
    cadastro(app);
});


// ====================
// PÁGINA INICIAL AO ABRIR
// ====================

inicio();