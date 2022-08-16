/*************************************************************************
*
* Author: Arthur Rodrigues
*
* O que o programa faz?
* 	O programa retorna o index de um determinado número dentro de um array
*   através de um algoritmo baseado em "binary search".
*   Se o número não existir dentro do array, o programa retorna "-1".
* Finalidade da criação do programa:
*		Comparar a eficácia do método "Binary search" em relação ao 
*   método "Sequencial search". 
*
*************************************************************************/
const array = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140, 147, 154, 161, 168, 175, 182, 189, 196, 203]
const lastArrayIndex = array.length - 1
var min = 0
var max = lastArrayIndex

function getMidOfArrayIndex() {
  return Math.floor((max + min) / 2)
}

function binarySearch(element, array) {
  let found = false
  let mid
  let midCache
  let cont
  let i = 0

  if (array[lastArrayIndex] === element) {
    return lastArrayIndex
  } else if (array[0] === element) {
    return 0
  }

  while (found !== true) {
    i++
    mid = getMidOfArrayIndex()
    if (cont === 3) {
      return -1
    } else if (mid === midCache) {
      cont++
    } else {
      cont = 0
    }
    midCache = mid
    if (array[mid] > element) {
      max = mid
    } else if (array[mid] < element) {
      min = mid
    } else {
      found = true
    }
  }

  return mid
}

console.log(binarySearch(203, array))