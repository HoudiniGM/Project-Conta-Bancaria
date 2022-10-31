// VARIÁVEIS ----------------------------
let listaDados = [];
const dados = document.getElementById('dados');
const operacoes = document.getElementById('operacoes');
let opcoes = document.getElementById('opcoes');
let valor = document.getElementById('valor');
let conta = document.getElementById('conta');
let usarSenha = document.getElementById('usarSenha');
let console = document.getElementById('console');



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
        console.innerHTML += `- Conta criado com sucesso!<br>Número da conta: ${dado.conta}<br>`;
    } else {
        console.innerHTML += `- Senhas não conferem<br>`;
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
    console.innerHTML += `- Seu saldo é de R$${cliente['saldo']},00 reais<br>`;
}

function operar(evento){
    evento.preventDefault();
    let cliente = listaDados[0];

    if (valor.value < 0){
        console.innerHTML += '- Valor inválido<br>';
    } else if (conta.value != cliente['conta']){
        console.innerHTML += '- Conta não existente<br>';
    } else if (usarSenha.value !== cliente['definirSenha']){
        console.innerHTML += '- Senha incorreta<br>';
    } else {
        switch (opcoes.value){
            case '0':
                console.innerHTML += '- Selecione uma operação<br>'
                break
            case '1':
                if (cliente['saldo'] < parseInt(valor.value)){
                    console.innerHTML += '- Saldo insuficiente<br>';
                } else {
                    sacar(cliente);
                    console.innerHTML += `- Você sacou R$${valor.value},00 reais<br>`;
                }
                break
            case '2':
                depositar(cliente);
                console.innerHTML += `- Você depositou R$${valor.value},00 reais<br>`;
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