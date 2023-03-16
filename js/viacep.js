'use strict'

export const pesquisarCEP = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const data = await response.json()

    return {
        municipio: data.localidade,
        estado: data.uf,
        ...data
        // bairro: data.bairro,
        // cidade: data.cidade,
        // logradouro: data.logradouro
    }
}
