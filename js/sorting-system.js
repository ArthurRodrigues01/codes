/*************************************************************************
*
* Author: Arthur Rodrigues
*
* O que o programa faz?
* 	O programa ordena strings com base na tabela ASCII.
* Finalidade da criação do programa:
*		Aprendizado.
*
*************************************************************************/


var words = ["João", "Paulo", "Pedro", "Gabriela", "Davi", "Teresinha", "Matteus", "Matheus", "Arthur", "Abraão", "Zack", "Cold"]
var orderedWords = []

function getSmallest(word1, word2) {
	if (word1.length < word2.length) {
		return word1
	}
	return word2
}

function getFirstInOrder(word1, word2) {
	let smallestWord = getSmallest(word1, word2)
	let word1Lowered = word1.toLowerCase()
	let word2Lowered = word2.toLowerCase()
	let boolString1 = 0
	let boolString2 = 0
	for (f = 0; f < smallestWord.length; f++) {
		if (word1Lowered[f] < word2Lowered[f] || word1Lowered[f] == word2Lowered[f]) {
			boolString1++
		} else {
			break
		}
	}
	for (f = 0; f < smallestWord.length; f++) {
		if (word2Lowered[f] < word1Lowered[f] || word2Lowered[f] == word1Lowered[f]) {
			boolString2++
		} else {
			break
		}
	}

	if (boolString1 > boolString2) {
		return word1
	} else if (boolString2 > boolString1) {
		return word2
	}
	return smallestWord
}

function main() {
	let string1
	let string2
	while (words.length != 1) {
		for (i = 0; i < words.length; i++) {
			if (i == 0) {
				string1 = words[0]
				string2 = words[1]
				string1 = getFirstInOrder(string1, string2)
			} else {
				string2 = words[i]
				string1 = getFirstInOrder(string1, string2)
			}
		}
		words.splice(words.indexOf(string1), 1)
		orderedWords.push(string1)
	}
	i = 0
	orderedWords.push(words[0])
	orderedWords.map(item => {
		i++
		console.log(`${i} - ${item}`)
	})
}

main()