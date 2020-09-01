function main(){

    //declaração de variaveis
    var alt;
    var peso
    var idealH
    var idealM

    //entrada de dados
    alt = Number(prompt(`Infome a sua altura:`))

    //chamada de funções
    idealH = homens(alt,peso)
    idealM = mulheres(alt,peso)

    console.log(`O peso ideal para homens é ${idealH}kg`) 
    console.log(`O peso ideal para mulheres é ${idealM}kg`) 

}

function homens(a,p){

    p = 72.7 * a -58
    p = parseFloat(p.toFixed(2))
    return p
}

function mulheres(a,p){

    p = 62.1 * a - 44.7
    p = parseFloat(p.toFixed(2))
    return p

}

main()