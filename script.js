// Função para adicionar uma entrada no estoque
function adicionarEntradaEstoque(event) {
    event.preventDefault();

    let data = document.getElementById("data-estoque").value;
    let produto = document.getElementById("produto-estoque").value;
    let preco = parseFloat(document.getElementById("preco-estoque").value);
    let quantidade = parseInt(document.getElementById("quantidade-estoque").value);

    // Aqui você pode fazer o que quiser com os dados, como enviar para um servidor, armazenar localmente, etc.
    console.log("Entrada no estoque registrada:");
    console.log("Data:", data);
    console.log("Produto:", produto);
    console.log("Preço:", preco);
    console.log("Quantidade:", quantidade);

    // Limpa o formulário após o registro
    document.getElementById("estoque-form").reset();
}

// Função para registrar uma venda
function registrarVenda(event) {
    event.preventDefault();

    let data = document.getElementById("data-vendas").value;
    let produto = document.getElementById("produto-vendas").value;
    let valor = parseFloat(document.getElementById("valor-vendas").value);
    let metodo = document.getElementById("metodo-vendas").value;
    let nomeFiado = document.getElementById("nome-vendas").value;
    let contatoFiado = document.getElementById("contato-vendas").value;

    // Se o método de pagamento for fiado, obtemos o nome e o contato
    if (metodo === "fiado") {
        console.log("Venda fiada registrada:");
        console.log("Data:", data);
        console.log("Produto:", produto);
        console.log("Valor:", valor);
        console.log("Método de pagamento:", metodo);
        console.log("Nome:", nomeFiado);
        console.log("Contato:", contatoFiado);
    } else {
        console.log("Venda registrada:");
        console.log("Data:", data);
        console.log("Produto:", produto);
        console.log("Valor:", valor);
        console.log("Método de pagamento:", metodo);
    }

    // Limpa o formulário após o registro
    document.getElementById("vendas-form").reset();
}

// Função para registrar uma entrada ou saída
function registrarEntradaSaida(event) {
    event.preventDefault();

    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let valor = parseFloat(document.getElementById("valor").value);

    if (tipo === "entrada") {
        console.log("Entrada registrada:");
        console.log("Tipo:", tipo);
        console.log("Descrição:", descricao);
        console.log("Valor:", valor);
    } else {
        console.log("Saída registrada:");
        console.log("Tipo:", tipo);
        console.log("Descrição:", descricao);
        console.log("Valor:", valor);
    }

    // Limpa o formulário após o registro
    document.getElementById("entrada-saida-form").reset();
}

// Função para registrar um pagamento
function registrarPagamento(event) {
    event.preventDefault();

    let tipoPagamento = document.getElementById("tipo-pagamento").value;
    let descricao = document.getElementById("descricao-pagamento").value;
    let valor = parseFloat(document.getElementById("valor-pagamento").value);

    console.log("Pagamento registrado:");
    console.log("Tipo de pagamento:", tipoPagamento);
    console.log("Descrição:", descricao);
    console.log("Valor:", valor);

    // Limpa o formulário após o registro
    document.getElementById("pagamentos-form").reset();
}

// Adiciona os ouvintes de evento para os formulários
document.getElementById("estoque-form").addEventListener("submit", adicionarEntradaEstoque);
document.getElementById("vendas-form").addEventListener("submit", registrarVenda);
document.getElementById("entrada-saida-form").addEventListener("submit", registrarEntradaSaida);
document.getElementById("pagamentos-form").addEventListener("submit", registrarPagamento);
