function main(){

    //declaração de variaveis
    var raio
    var vol
    var resultado

    //entrada de dados
    raio = Number(prompt(`Informe um número:`))
    resultado = volume (raio, vol)
    console.log(`O volume da esfera é ${resultado}`) 

}

function volume(r, v){

    v = 4/3 * 3.14 * r**3
    return v
}

main()