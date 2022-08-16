/*************************************************************************
*
* Author: Arthur Rodrigues
*
* O que o programa faz? 
*   O programa gera um array de objetos, com duas propriedades, 
*   um id(aleatório) e uma descrição, a descrição é inicialmente nula, mas
*   o programa substituí o valor da descrição de elementos específicos.
* Finalidade da criação do programa: 
*   Testar o novo operador '...', em relação ao método 'concat'.
*
*************************************************************************/

var users

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;//random number between 0 and 16
    if (d > 0) {//Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function isElementInArray(element, array){
  for(f = 0; f < array.length; f++){
    if(array[f].id === element.id){
      return true;
    }
  }
  return false;
}

function getDummyObjectsArray(){
  let array
  for(i = 0; i < 10; i++){
    if(array === undefined){
      array = [{id: generateUUID(), description: ""}]
    }else{
      array = [...array, {id: generateUUID(), description: ""}]
    }
  }
  return array
}
function main(){
  users = getDummyObjectsArray()
  isEditable = true
  editableIDs = [users[2], users[5], users[9]]
  
  if(isEditable){
    users.map(item => {
      if(isElementInArray(item, editableIDs)){
        item.description = "Valor alterado"
      }
    })
  }
  
  users.map(item => {
    console.log(item)
  })
}

main()