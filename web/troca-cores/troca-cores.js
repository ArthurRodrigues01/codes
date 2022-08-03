const body = document.body;
const highlightedWord = document.querySelector(".highlighted-word")
const yellowButton = document.querySelector(".yellow")
const redButton = document.querySelector(".red")
const blueButton = document.querySelector(".blue")
const greenButton = document.querySelector(".green")
const buttons = [yellowButton, redButton, blueButton, greenButton]

var disabled = document.body;

function disable(e){
    e.style.opacity = "0.5"
    disabled = e
}

function enable(e){
    e.style.opacity = "1"
}

buttons.forEach(e => e.addEventListener("click", () => {
    switch(e){
        case(yellowButton):
            color = "rgb(133,0,133)"
            break
        case(redButton):
            color = "red"
            break
        case(blueButton):
            color = "blue"
            break
        case(greenButton):
            color = "green"
    }
    body.style.backgroundColor = color
    highlightedWord.style.color = color 
    enable(disabled)
    disable(e)
}))
