/*

    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelecida

*/

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao  && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')