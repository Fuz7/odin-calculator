let operator = "/"
function operate(a,operator,b){

    switch (operator){

        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
            
    }
}


console.log(`value of add is ${operate(4,"+",4)}`)
console.log(`value of minus is ${operate(4,"-",4)}`)
console.log(`value of multiplacation is ${operate(4,"*",4)}`)
console.log(`value of divide is ${operate(4,operator,4)}`)


let numpad = document.getElementById('keyContainer')

let keys = document.getElementsByClassName("keybtn")

keys = Array.from(keys)
keys.forEach(key => {
    key.addEventListener('mouseenter',function(){
        this.classList.toggle('active')
    })
    key.addEventListener('mouseleave',function(){
        this.classList.toggle('active')
    })
});