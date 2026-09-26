export function salvarUsuario(dadosUsuario) {
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
}

export function buscarUsuario() {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (!usuarioSalvo) {
        return null;
    }

    return JSON.parse(usuarioSalvo);
}