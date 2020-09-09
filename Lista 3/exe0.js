main()

function main(){

    //criar matriz 3 x 4 

    let matriz = [] // uma matriz é um vetor 
    matriz [0] = [] // linha 0
    matriz [1] = [] // linha 1
    matriz [2] = [] // linha 2

    cadastra(matriz)
    calculaMedia(matriz)
    

}

function cadastra(mat){

    for(let i = 0; i < 3; i++){
        alert(`Informe 4 notas para o aluno ${i+1}`)
        for (let j = 0; j < 4; j++){
            mat[i][j] = Number(promt(`Nota ${j+1}`))
        }
    }

}

function calculaMedia(mat){
    //vamos usar um vetor auxiliar
    let vetor = [0,0,0]

    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 4; j++){
            vetor[i] = vetor[i] + mat[i][j]
        }
        //quando acabarem as notas
        vetor[i] = vetor [i] / 4
    }
    console.log(`As médias são ${vetor}`)
}

