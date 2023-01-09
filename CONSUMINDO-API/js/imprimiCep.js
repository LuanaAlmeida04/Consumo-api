const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))