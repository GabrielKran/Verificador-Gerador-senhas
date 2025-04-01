const inputSenha = document.getElementById('senha');
inputSenha.addEventListener("input", verificarSenha);

const spanResult = document.getElementById('seguranca-status');


function verificarSenha() {
    let senha = inputSenha.value;
    analiseForcaSenha(senha);
}

function analiseForcaSenha(senha) {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    const regexSimbolo = /[^a-zA-Z0-9]/;

    const temMaiuscula = regexMaiuscula.test(senha);
    const temMinuscula = regexMinuscula.test(senha);
    const temNumero = regexNumero.test(senha);
    const temSimbolo = regexSimbolo.test(senha);

    if (senha === '') {
        spanResult.textContent = '';
        return;
    }

    // Verifica se a senha é "Segura"
    if (
        senha.length >= 12 &&
        temMaiuscula &&
        temMinuscula &&
        temNumero &&
        temSimbolo
    ) {
        spanResult.textContent = 'Segura';
    }
    // Verifica se a senha é "Forte"
    else if (
        senha.length >= 8 &&
        temMaiuscula &&
        temMinuscula &&
        temNumero
    ) {
        spanResult.textContent = 'Forte';
    }
    // Verifica se a senha é "Média"
    else if (
        senha.length >= 6 &&
        senha.length <= 8 &&
        temMaiuscula &&
        temMinuscula
    ) {
        spanResult.textContent = 'Média';
    }
    // Verifica se a senha é "Fraca"
    else if (
        senha.length <= 5 ||
        (temMinuscula && temNumero && !temMaiuscula && !temSimbolo) || // Apenas minúsculas e números
        (temMaiuscula && temNumero && !temMinuscula && !temSimbolo)    // Apenas maiúsculas e números
    ) {
        spanResult.textContent = 'Fraca';
    }
}