function main(){

    //declaração de variaveis
    var nro
    var fatorial

    //chamada de dados
    nro = Number(prompt(`Informe o numero que deseja fatorar:`))
    if(nro>0){

        //chamada de função
        fatorial = fator(nro)
        
        //saida de dados
        console.log(`O fatorial desse numero é: ${fatorial}`)
    }else
        console.log(`O fatorial de 0 é 1`)
}

function fator(n){
    var r = n
    for(var i = 1; i < n; i++){
        r = r * i
    }
    return r
}

main()
