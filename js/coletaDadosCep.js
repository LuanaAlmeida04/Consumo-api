//faz requisição do site do viacep, com ela faz uma conversão para JSON (formato semelhante a javascript) para ser lido como objeto

async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = ""
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const cepConvertido = await consultaCep.json();
        if(cepConvertido.erro){
            throw Error('CEP não existente');
        }
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        const bairro = document.getElementById('bairro');

        cidade.value = cepConvertido.localidade;
        logradouro.value = cepConvertido.logradouro;
        estado.value = cepConvertido.uf;
        bairro.value = cepConvertido.bairro;

        console.log(cepConvertido);
        return cepConvertido;
    } catch (erro){
        mensagemErro.innerHTML = `<p class="erro">CEP inválido. Tente novamente</p>`
        console.log(erro);
    }
}


