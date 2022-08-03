const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

var hours = 23
var minutes = 59
var seconds = 59

function setHours(){
    if(hours > -1){
        hour.textContent = `${hours}`
    }
}

function setMinutes(){
    if(minutes > -1){
        minute.textContent = `${minutes}`
    }else{
        minutes = 59
        hours -= 1
        setHours(hours)
    }
}

function setSeconds(){
    if(seconds > -1){
        second.textContent = `${seconds}` 
    }else{
        seconds = 60
        minutes -= 1
        setMinutes(minutes)
    }
}

function loopTime(delay, callback){
    var loop = () => {
        seconds -= 1
        callback()
        setTimeout(loop, delay)
    }

    loop()  
}

loopTime(1000, () => setSeconds())
