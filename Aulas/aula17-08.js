function cadastra(vet) {
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe código"))
    objeto.qtde = Number(prompt("Informe quantidade"))
    objeto.preco = Number(prompt("Informe preço"))
    objeto.nome = prompt("Informe nome")
    // insere objeto no vetor
    vet.push(objeto)
}

function mostra(vet) {
    for (i=0; i<vet.lenght; i++) {
        console.log(vet[i])
    }
}

function chefe() {
    var vetor = []

    do {
        var opcao = Number(prompt("Digite uma opção [1]. Cadastrar /n [2]. Consultar"))
        switch(opcao) {
            case 1: cadastra (vetor)
                break
            case 2: console.log(vetor)
                break
            case 3: console.log(`Até logo`)
                default: console.log(`Opção inválida`)
        }
    }
while (opcao != 3)
}

chefe()