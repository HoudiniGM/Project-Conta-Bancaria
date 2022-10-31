// VARIÁVEIS ----------------------------
let listaDados = [];
const dados = document.getElementById('dados');
const operacoes = document.getElementById('operacoes');
let opcoes = document.getElementById('opcoes');
let valor = document.getElementById('valor');
let conta = document.getElementById('conta');
let usarSenha = document.getElementById('usarSenha');



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

function sacar(cliente){
    cliente['saldo'] -= valor.value;
}

function depositar(cliente){
    cliente['saldo'] += parseInt(valor.value);
}

function consultarSaldo(cliente){
    alert(`Seu saldo é de R$${cliente['saldo']},00 reais`);
}

function operar(evento){
    evento.preventDefault();
    let cliente = listaDados[0];

    if (valor.value < 0){
        alert('Valor inválido');
    } else if (conta.value != cliente['conta']){
        alert('Conta não existente');
    } else if (usarSenha.value !== cliente['definirSenha']){
        alert('Senha incorreta');
    } else {
        switch (opcoes.value){
            case '0':
                alert('Selecione uma operação');
                break
            case '1':
                if (cliente['saldo'] < parseInt(valor.value)){
                    alert('Saldo insuficiente');
                } else {
                    sacar(cliente);
                    alert(`Você sacou R$${valor.value},00 reais`);
                }
                break
            case '2':
                depositar(cliente);
                alert(`Você depositou R$${valor.value},00 reais`);
                break
            case '3':
                consultarSaldo(cliente);
                break
        }
    }
}

// CHAMADAS DE FUNÇÕES -------------------
dados.addEventListener('submit', criarDado);
operacoes.addEventListener('submit', operar);
opcoes.addEventListener('click', desabilitarValor);