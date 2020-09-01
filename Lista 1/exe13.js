main ()
function main(){

    //declaração de variaveis
    var vetor = []
    var opcao

    do{
        opcao = Number(prompt(`Escolha: \n[1]. Cadastrar \n[2]. Media dos Salarios \n[3]. Menor e Maior idade \n[4]. Quantidade de Mulheres \n[5]. Sair do Programa`))
        switch(opcao){
            case 1: entrada(vetor)
                    break
            case 2: mediaSalario(vetor)
                    break
            case 3: menorMaiorIdade(vetor)
                    break
            case 4: qtdeMulheres(vetor)
                    break
            case 5: console.log(`Obrigado por utilizar o nosso programa`)
                    break
            default: console.log(`Opção Invalida`)
        }
    }while(opcao != 5)

}

function entrada(vet){
    var objeto = new Object
    objeto.salario = Number(prompt(`Informe o salario:`))
    objeto.nroFilhos = Number(prompt(`Informe o número de filhos:`))
    objeto.sexo = prompt(`Informe o sexo (M/F)`).toUpperCase()
    objeto.idade = Number(prompt(`Informe a idade:`))

    //insere no vetor
    vet.push(objeto)
}

function mediaSalario(vet){
    if(vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }else{
        var soma = 0
        for(var i = 0; i < vet.length; i++){
            soma = soma + vet[i].salario
        }
        console.log(`A media é: ${soma/vet.length}`) // faz a media
    }
}

function menorMaiorIdade(vet){
    if(vet.length == 0){
        console.log(`Nenhum habitante cadastrado`)
    }else {
        var menor = vet[0].idade 
        var maior = vet[0].idade
        for(var i = 0; i < vet.length; i++){
            if(vet[i].idade > maior){
                maior = vet[i].idade
            }
            if (vet[i].idade < maior){
                menor = vet[i].idade
            }
        }
        console.log(`Maior: ${maior} e menor ${menor}`)
    }
}

function qtdeMulheres(vet){
	if(vet.length == 0){
    console.log(`Nenhum habitante cadastrado`)
  }else{
    var cont = 0

    for(var i = 0; i<vet.length; i++){
      if(vet[i].salario <= 500 && vet[i].nroFilhos === 3 && vet[i].sexo === "F"){
        cont = cont + 1
      }
    }
  }
    console.log(cont)
}