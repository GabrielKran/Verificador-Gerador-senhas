//verificador de senhas
const backgroundVerificador = document.querySelector('.verificador-section');
const backgroundGerador = document.querySelector('.gerador-section');

const inputSenha = document.getElementById('senha');
inputSenha.addEventListener('input', verificarSenha);
inputSenha.addEventListener('paste', () => {
    setTimeout(verificarSenha, 0);
})

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
        backgroundVerificador.style.backgroundColor = '#16161a';
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
        backgroundVerificador.style.backgroundColor = '#2ecc71';
    }
    // Verifica se a senha é "Forte"
    else if (
        senha.length >= 8 &&
        temMaiuscula &&
        temMinuscula &&
        temNumero
    ) {
        spanResult.textContent = 'Forte';
        backgroundVerificador.style.backgroundColor = '#27ae60';
    }
    // Verifica se a senha é "Média"
    else if (
        senha.length >= 6 &&
        senha.length <= 8 &&
        temMaiuscula &&
        temMinuscula
    ) {
        spanResult.textContent = 'Média';
        backgroundVerificador.style.backgroundColor = '#f39c12';
    }
    // Verifica se a senha é "Fraca"
    else {
        spanResult.textContent = 'Fraca';
        backgroundVerificador.style.backgroundColor = '#e74c3c';
    }
}

//gerador de senhas
const buttonGerar = document.getElementById('gerar');
buttonGerar.addEventListener('click', gerarSenha);

function gerarSenha() {
    const senhaPrint = document.getElementById('senha-gerada');
    const inputTamanho = parseInt(document.getElementById('tamanho').value);
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let senha = '';

    if (isNaN(inputTamanho) || inputTamanho < 4 || inputTamanho > 128) {
        alert('Por favor, insira um tamanho válido entre 4 e 128.');
        return;
    }

    for (let i = 0; i < inputTamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
        
    }

    senhaPrint.textContent = senha;
    document.getElementById('tamanho').value = '';

}