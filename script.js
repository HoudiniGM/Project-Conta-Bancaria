// VARIÁVEIS ----------------------------
let listaDados = [];
const form = document.getElementById('dados');
let opcoes = document.getElementById('opcoes');
let valor = document.getElementById('valor');



// FUNÇÕES ------------------------------
function criarDado(evento){
    evento.preventDefault();

    let dado = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        celular: document.getElementById('celular').value,
        definirSenha: document.getElementById('definirSenha').value,
        conta: Math.floor(1000 + Math.random() * 90000),
        saldo: 0
    }

    if (dado.definirSenha === document.getElementById('confirmarSenha').value){
        listaDados.push(dado);
        alert(`Conta criado com sucesso!\nNúmero da conta: ${dado.conta}`)
    } else {
        alert('Senha incorreta');
    }
}

function desabilitarValor(){
    if (opcoes.value == 3){
        valor.disabled = true;
    } else {
        valor.disabled = false;
    }
}

// CHAMADAS DE FUNÇÕES -------------------
form.addEventListener('submit', criarDado);
opcoes.addEventListener('click', desabilitarValor);