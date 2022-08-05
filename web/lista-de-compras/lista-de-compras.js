const listItemContainer = document.querySelector(".list-item-container")
const eraseButton = document.querySelectorAll(".erase-button")
const submitButton = document.querySelector("#submit-button")
var cont = 0
submitButton.addEventListener("click", () => {
  let inputItems = document.querySelector("#submit-items")
  if(inputItems.value != ""){
    listItemContainer.innerHTML += `<div><h1 class="list-item-title stripped" id="${cont}">${inputItems.value}<img src="x.svg" class="erase-button" id="erase-button-${cont}"></h1></div>`
    inputItems.value = ""
    cont++
  }
})

listItemContainer.addEventListener("DOMNodeInserted", () => {
  let stripped = document.querySelectorAll(".stripped")
  for(i = 0; i < stripped.length; i++){
    if(i % 2 != 0){
      stripped[i].style.backgroundColor = "#ddd"
    }
  }  
})

eraseButton.forEach(element => element.addEventListener("click", () => {
    //let xButton = document.querySelector(`#erase-button-${element.id}`)
    
    //xButton.remove()
    console.log(element.id)
  
}))
