function main(){
    //variaveis declaradas no main
    var hr
    var min
    var segs
    var resultado

    //chamada de entradas
    hr = Number(prompt("Informe a quantidade de horas:"))
    min = Number(prompt("Informe a quantidade de minutos:"))
    segs = Number(prompt("Informe a quantidade de segundos:"))

    // executa a função
    resultado = converte(hr,min,segs)

    //mostra o resultado
    console.log(`A quantidade de segundos é: ${resultado}`)
}

function converte(h,m,s,r){

    h = h * 3600
    m = m * 60

    r = h + m + s

    return r

}

main()