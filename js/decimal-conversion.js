const hexadecimalTable = ['A', 'B', 'C', 'D', 'E', 'F']

String.prototype.reverse = function () {
  let string = this
  let stringReversed = ""
  for (i = string.length - 1; i > -1; i--) {
    stringReversed += string[i]
  }

  return stringReversed
}

const convertToBinary = decimalNum => {
  let iterator = decimalNum
  let binaryNum = ""
  while (iterator != 0) {
    binaryNum += iterator % 2
    iterator = Math.floor(iterator / 2)
  }
  
  return binaryNum.reverse()
}

const convertToOctal = decimalNum => {
  let iterator = decimalNum
  let octalNum = ""
  while (iterator != 0) {
    octalNum += iterator % 8
    iterator = Math.floor(iterator / 8)
  }
  
  return octalNum.reverse()
}

const convertToHexadecimal = decimalNum => {
  let iterator = decimalNum
  let hexadecimalNum = ""
  while (iterator != 0) {
    if (iterator % 16 > 9) {
      hexadecimalNum += hexadecimalTable[iterator % 16 - 10]
    } else {
      hexadecimalNum += iterator % 16
    }
    iterator = Math.floor(iterator / 16)
  }

  return hexadecimalNum.reverse()
}

const convertToDecimalFromBinary = binaryNum => {
  let char
  let powered2
  let charValue
  let string = binaryNum
  let decimalNum = 0
  for( i = 0; i < string.length; i++){
    char = string[i]
    charValue = parseInt(char) 
    if(charValue > 1){
      return null
    }
    powered2 = 2 ** (string.length - 1 - i)
    decimalNum += charValue * powered2
  }
  
  return decimalNum
}

const convertToDecimalFromOctal = octalNum => {
  let char
  let powered8
  let charValue
  let string = octalNum
  let decimalNum = 0
  for( i = 0; i < string.length; i++){
    char = string[i]
    charValue = parseInt(char) 
    if(charValue > 7){
      return null
    }
    powered8 = 8 ** (string.length - 1 - i)
    decimalNum += charValue * powered8
  }
  
  return decimalNum
}

const convertToDecimalFromHexadecimal = hexadecimalNum => {
  let char
  let powered16
  let charValue
  let string = hexadecimalNum
  let decimalNum = 0
  for( i = 0; i < string.length; i++){
    char = string[i]
    powered16 = 16 ** (string.length - 1 - i)
    if(isNaN(parseInt(char))){
      charValue = hexadecimalTable.indexOf(char.toUpperCase()) + 10     
    }
    else{
      charValue = parseInt(char) 
    }
    decimalNum += charValue * powered16
  }
  
  return decimalNum
}