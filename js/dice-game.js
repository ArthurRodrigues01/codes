/*************************************************************************
*
* Author: Arthur Rodrigues
*
* O que o programa faz?
* 	  Declara um array com 4 arrays vazios dentro.
*     ex.: [[],[],[],[]]
*     
*     A cada iteração, 1 par de números aleatórios entre 1 e 6 são
*     escolhidos como valores para os arrays internos.
*     ex.: [[2,1],[3,4],[5,2],[3,1]]
*     
*     Depois de escolhidos os valores, remove-se o array com a menor
*     soma de números, se por acaso existir mais de um array com a menor
*     soma de números, remove-se o que tiver o menor número da primeira posição
*     se tiver mais de um array com a menor soma de números, e exatamente o mesmo número
*     para a primeira posição(ou seja, exatamente os mesmos números na mesma ordem), então
*     novamente serão escolhidos os valores para esses arrays. Esse processo se repete, até que
*     sobre apenas um array.
*
* Finalidade da criação do programa:
*		Exercício.
*
*************************************************************************/
var round = 0

const getRandom = () => {
  return Math.floor(Math.random() * (6 - 1) + 1);
}

Array.prototype.fillRandom = function() {
  for(i = 0; i < this.length; i++){
    if(Array.isArray(this[i])){
      for(j = 0; j < 2; j++){
        this[i][j] = getRandom()
      }
    }
  }
}

Array.prototype.getLowestFirstItemAndIndexFrom = function(arrayOfIndexs) { 
  let menor = [7, -1]
  for( i = 0; i < arrayOfIndexs.length; i++){
    if( this[arrayOfIndexs[i]][0] < menor[0] ){
      menor = [this[arrayOfIndexs[i]][0], arrayOfIndexs[i]]
    }
  }

  return menor
}

Array.prototype.getSumOfItems = function() {
  let sumOfItems = 0
  this.map(item => {
      sumOfItems += item
  })

  return sumOfItems
}

Array.prototype.getLowestSumOfItemsAndQuantity = function() {
  let menor = [13, -1]
  for(i = 0; i < this.length; i++){
    if(this[i] !== undefined){
      if(this[i].getSumOfItems() < menor[0]){
        menor[0] = this[i].getSumOfItems()
        menor[1] = 1
      } else if (this[i].getSumOfItems() === menor[0]){
        menor[1]++
      }
    }
  }

  return menor
}

Array.prototype.isOneValidValueRemaining = function(){
  let cont = 0
  this.map(item => {
    if(item !== undefined){
      cont++
    }
  })
  if(cont === 1){
    return true
  }

  return false
}

Array.prototype.removeItemByIndex = function(index){
  this[index] = undefined
}

Array.prototype.getArrayOfIndexsThatHaveSameSumOfItems = function(sumOfItems){
  let arrayOfIndexs = []
  this.map((item, index) => {
    if(item !== undefined){
      if(item.getSumOfItems() === sumOfItems){
        arrayOfIndexs.push(index)
      }
    }
  })

  return arrayOfIndexs
}

Array.prototype.checkIfFirstValuesDifferFromEachOther = function(arrayOfIndexs) {
  let menor = this.getLowestFirstItemAndIndexFrom(arrayOfIndexs)

  let cont = 0
  for( i = 0; i < arrayOfIndexs.length; i++){
    if( this[arrayOfIndexs[i]][0] === menor[0] ){
      cont++
      if(cont > 1){
        return false
      }
    }
  }

  return true
}

Array.prototype.printArray = function() {
  round++
  let msg = `Round ${round} => `
  if(this.isOneValidValueRemaining()){
    msg = `Winner  => `
  }
  this.map((item, index) => {
    if(item !== undefined){
      msg += `p${index + 1}[${item}] `
    } else {
      msg += "        "
    }
  })

  console.log(msg)
}

Array.prototype.getIndexOfSumOfItems = function(sumOfItems) {
  for(i = 0; i < this.length; i++) {
    if(this[i] !== undefined){
      if(this[i].getSumOfItems() === sumOfItems){
        return i
      }
    }
  }
}

const main = () => {
  let array = [[],[],[],[]]
  while(!array.isOneValidValueRemaining()){
    array.fillRandom()
    array.printArray()
    let lowest = array.getLowestSumOfItemsAndQuantity()
    if(lowest[1] === 1){
      array.removeItemByIndex(array.getIndexOfSumOfItems(lowest[0]))
    }else {
      arrayOfIndexs = array.getArrayOfIndexsThatHaveSameSumOfItems(lowest[0])
      if(array.checkIfFirstValuesDifferFromEachOther(arrayOfIndexs)){
        array.removeItemByIndex(array.getLowestFirstItemAndIndexFrom(arrayOfIndexs)[1])
      }
    }
  }
  array.printArray()
}

main()