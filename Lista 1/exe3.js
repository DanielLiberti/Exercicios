function main(){

    //declaração variaveis
    var cadeia1 = []
    var cadeia2 = []
    var nro

    //entrada de dados
    for(var i = 0 ; i < 3; i++){
        nro = Number(prompt(`Informe um número:`))
        cadeia1.push(nro)
    }
    console.log(`Valor final do vetor ${cadeia1}`)

    for(var i = 0 ; i < 3; i++){
        nro = Number(prompt(`Informe um número:`))
        cadeia2.push(nro)
    }
    console.log(`Valor final do vetor ${cadeia2}`) 

    //chama a função
    compara(cadeia1, cadeia2)
}

function compara(vet1, vet2){

    for(var i = 0; i<3; i++){
        if(vet1[i] != vet2[i]){
            console.log(`Este valor ${vet1[i]} é diferente deste ${vet2[i]} no indice ${i}`) 
        }
    }
}
main()