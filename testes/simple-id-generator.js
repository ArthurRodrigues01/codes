


function generateNewId(){
    var Id = ""
    var letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    for(i=0; i<4; i++){
        for(j=0;j<4;j++){
            digit = Math.random() * (62)
            digit = Math.trunc(digit)
            if(digit > 9){
                digit -= 10
                digit = letters[digit]
            }
            digit.toString()
            Id += digit
        }
        if(i!=3){
            Id += "-"
        }
    }
    return Id
}

console.log(generateNewId())