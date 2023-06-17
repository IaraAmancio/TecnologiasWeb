/* 1 - Escreva uma função JavaScript para verificar se uma `entrada` é um
array ou não.*/

function is_array(entrada){
    if (Array.isArray(entrada))
    {
        return true
    }
    else{
        return false
    }
}

/* 2 - Escreva uma função JavaScript para clonar um array.*/
function clonar_array(array1){
    var array2 = array1.slice()
    return array2
}

/* 3 - Escreva uma função JavaScript para obter o primeiro elemento de um
array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
array.*/
function n_primeiros_elementos(array, n=1){
    return array.slice(0, n)
}

/* 4 - Escreva uma função JavaScript para obter o último elemento de um
array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
array. */
function n_ultimos_elementos(array, n=1){
    return array.slice(-n)
}

/* 5 - Escreva um programa JavaScript simples para unir todos os elementos
de um array em uma string.*/ 
function unir_elementos(array){
    let juncao = ''
    for (var i = 0; i < array.length; i++){
        juncao += array[i]
    }
    return juncao
}

/* 6 - Escreva um programa JavaScript que aceite um número como entrada
e insira traços (-) entre cada dois números pares. Por exemplo, se você
aceitar 025468, a saída deve ser 0-254-6-*/
function par(n){
    if (n % 2 === 0){
        return true
    }
    else{
        return false
    }
}
function separacao_pares(number){
    var string = number.toString()

    for (i = 0; i < string.length-1; i++){
        if (par(string[i]) === true && par(string[i+1]) === true )
        {
            string = string.replace(string[i], string[i]+'-')
            
        }
    }
    return string
}

/* 7 - Escreva um programa JavaScript para localizar o item mais frequente
de um array.*/

function item_mais_frequente(array){
    let contador = {}
    for (i=0; i < array.length; i++){
        var item = array[i]
        if (contador[item]){
            contador[item]++
        }else{
            contador[item] = 1
        }
    }
    let maior = 0
    for (let i in contador){
        if (contador[i] > maior){
            maior = contador[i]
        }      
    }
    return maior
}

/* 8 - Escreva um programa JavaScript para remover itens duplicados de um
array (ignore a diferenciação entre maiúsculas e minúsculas). */

function itens_duplicados(array){
    var new_array = []
    var aux = {}
    for (i=0; i<array.length; i++){
        item = String(array[i]).toLowerCase()
        if(!aux[item]){
            new_array.push(array[i])
            aux[item] = true
        }
    }
    return new_array
}

/* 9 - Existem dois arrays com valores individuais, escreva um programa
JavaScript para calcular a soma de cada valor de índice individual dos
arrays fornecidos.*/

function soma_de_valores(array1, array2){
    var resultado = []
    tamanho = Math.max(array1.length, array2.length)

    for(var i=0; i<tamanho; i++){
        var item1 = array1[i] || 0
        var item2 = array2[i] || 0
        resultado.push(item1+item2)
    }
    return resultado
}

/* 10 - Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente,
o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você
deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao
vetor pilha e mostrá-los no console.*/

function adicionar_pilha (){
    var vetorPilha = [1,2,3,4,5]
    var vetorAdiciona = [6,7,8,9,10]
     return vetorPilha.concat(vetorAdiciona)
}



console.log(is_array([2,5]))
console.log(clonar_array([5,4,3]))
console.log(n_primeiros_elementos([9,3,4,3,2,1]))
console.log(n_primeiros_elementos([9,3,4,3,2,1], 3))
console.log(n_ultimos_elementos([1,2,3,1,5,6]))
console.log(n_ultimos_elementos([1,2,3,1,5,6], 4))
console.log(unir_elementos(['joao',5,'maria','04']))
console.log(separacao_pares(10233445689))
console.log(item_mais_frequente([1,2,2,3,3,3]))
console.log(itens_duplicados([2,2,'a','A','a',4,4,'Teste','teste','teste','sushi']))
console.log(soma_de_valores([1,2,3], [4,5,6,10]))
console.log(adicionar_pilha())
