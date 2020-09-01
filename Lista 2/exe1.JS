main()

function main(){

    var vendedor = []
    var vendas = []

    do{
        var opcao
        opcao = Number(prompt(`[1] - Cadastrar vendedor \n[2] - Cadastrar venda \n[0] - Sair`))

        switch(opcao){
            case 1: cadastraVendedor(vendedor) // escopo global
                    break
            
            case 2: cadastraVendas(vendas, vendedor) // é necessário utilizar ambos os vetores
            case 3:
            default:
        }

    }while(opcao != 3)
}

function cadastraVendedor(vendor){ //escopo local - vend faz referencia para vendedores
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome`)

    for(var i = 0; i<vendor.length; i++){
        if(vendor[i].codigo == objeto.codigo){
            console.log(`Codigo já existente`)
            console.log(objeto)
            return 0 // sai da função
        }
    }
    //insere no vetor
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso!`)
}

function cadastraVendas(vend, vendor){
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda:`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor:`))
    objeto.mes = Number(prompt(`Informe o mês da venda:`))
    objeto.valor = Number(prompt(`Informe o valor da venda:`))

    for(var i = 0; i < vendor.length; i++){
        if(vendor[i].codigo == objeto.vendedor){ // vendedor existe
            for(var j = 0; j < vend.length; j++){// verifica se vendedor já tem venda no mês
                if((vend[j].vendedor == objeto.vendedor) && (vend[j].mes == objeto.mes)){
                    console.log(`O vendedor já realizou venda neste mês`)
                    return 0 // sai da função
                }
            }
            //insere a venda no vetor
            vend.push(objeto)
            console.log(`Venda inserida com sucesso.`)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe`)
   
}