function main(){

    //declaração de variaveis
    var nro

    //entrada de dados
    nro = Number(prompt("Informe um numero:"))

    //chamada de função
    verifica(nro)
}

function verifica(n){

    if(n>=0){
        console.log(`O numero ${n} é positivo`)
    }
    else{
        console.log(`O numero ${n} é negativo`)
    }
}

main()