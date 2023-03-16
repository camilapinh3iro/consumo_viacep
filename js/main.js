'use strict' // usa para o navegador ser rigoroso com o meu js

import { pesquisarCEP } from './postmon.js'

const preencherFormulario = async () => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCEP(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)
