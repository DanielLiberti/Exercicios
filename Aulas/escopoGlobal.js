//variaveis com escopo global
//podem ter escopo global vetores e objetos

function chefe(){
    var vetor = []
    entrada(vetor)
    console.log(vetor)
    soma10(vetor)
    console.log(`Valor final do vetor${vetor}`) 
}

//variaveis com escopo global - vet
function entrada(vet){
    vet.push(8)
    vet.push(6)
    vet.push(7)


}

//variaveis com escopo global - vet
function soma10(vet){

    for(var i = 0; vet.length; i++){
        vet[i] = vet[i] + 10
    }


}

chefe()
