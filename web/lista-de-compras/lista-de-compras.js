const listItemContainer = document.querySelector(".list-item-container")

const submitButton = document.querySelector("#submit-button")

submitButton.addEventListener("click", () => {
  let inputItems = document.querySelector("#submit-items")
  if(inputItems.value != ""){
    listItemContainer.innerHTML += `<div><h3>${inputItems.value}</h3></div>`
    inputItems.value = ""
  }
})
