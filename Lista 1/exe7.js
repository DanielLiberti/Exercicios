function main(){

    //declaração de variaveis
    var nro
    var soma = 0
    var media = 0
    var cont = 0

    //entrada de dados
    while (nro != 0) {

        nro = Number(prompt(`Informe um número, e quando quiser parar, aperte 0:`))
        soma = soma + nro
        cont = cont + 1
    }
    //operando os dados
    cont = cont - 1
    media = soma / cont 
    console.log(`Você informou ${cont} numeros`)
    console.log(`A media desses numeros é ${media}`)
    console.log(`A soma desses numeros é ${soma}`)
}

main()