const listItemContainer = document.querySelector(".list-item-container")
const submitButton = document.querySelector("#submit-button")

submitButton.addEventListener("click", () => {
  let inputItems = document.querySelector("#submit-items")
  if(inputItems.value != ""){
    listItemContainer.innerHTML += `<div><img><h1 class="list-item-title stripped">${inputItems.value}</h1></div>`
    inputItems.value = ""
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
