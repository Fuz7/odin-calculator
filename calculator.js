function operate(a,operator,b){

    if (operator === '/' && Number(b) === 0){
       return "bruh"
    }

    switch (operator){

        case "+":
            return Number(a) + Number(b)
        case "-":
            return Number(a) - Number(b)
        case "*":
            return Math.round((Number(a) * Number(b)) * 10000000000) / 10000000000
        case "/":
            // to round to the 10th decimal place
            return Math.round((Number(a) / Number(b)) * 10000000000) / 10000000000
            
    }
}





let numpad = document.getElementById('keyContainer')



let output = ''

function updateDisplay(){
    let display = document.getElementById('display')
    

    if (output){
        display.textContent = output
    }
    else if(output === 0){
        display.textContent = output
    }

    if (output === 'bruh'){
        output = ''
    }
}

function clearDisplay(){
    display.textContent = ''
}


function periodCheck(string){
    if (string.includes('.')) return true
    return false
}

function deleteNum(string){
    string = string.slice(0,string.length - 1)
    return string
}

updateDisplay()

function updateOperatorDisplay(){
    let operatorDisplay = document.getElementById('operationDisplay')
    if (output === 'bruh'){
        operatorDisplay.textContent = output
        output = ''
        operator = ''
    }else{
        operatorDisplay.textContent = output + ' ' + operator + ' ' + operand
    }
}

function clearOperatorDisplay(){
    let operatorDisplay = document.getElementById('operationDisplay')
    operatorDisplay.textContent = '';
}


let keys = document.getElementsByClassName("keybtn")
keys = Array.from(keys)

let operator = ''
let operand = ''
let usedOperation = '';


keys.forEach(key => {
    key.addEventListener('click',function(){
        let number = Number(this.value)
        if (!(operator)){

            if(number >= 1 && number <= 9 && operator === '' && output.length < 15){
                output += this.value
                updateDisplay()
            }
            else if(number === 0 && output != '' && output.length < 15){
                output += this.value
                updateDisplay()
            }
            else if(this.value === '.' && periodCheck(output) === false){
                output += this.value
                updateDisplay()
            }
            else if(this.value === 'clear'){
                output = ''
                usedOperation = ''
                clearDisplay()
            }
            else if(usedOperation != 1 && this.value === 'delete'){
                output = deleteNum(output)
                updateDisplay()
            }
            else if(!(output === '' || output === '.') && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/')){
                clearDisplay()
                operator = this.value
                updateOperatorDisplay()
            }
        }else if(operator){
            if(number >= 1 && number <= 9 && operand.length < 15){
                operand += this.value
                updateOperatorDisplay()
            }
            else if(number === 0 && operand.length < 15){
                operand += this.value
                updateOperatorDisplay()
            }
            else if(this.value === '.' && periodCheck(operand) === false){
                operand += this.value
                updateOperatorDisplay()
            }
            else if(this.value === 'clear'){
                output = ''
                operator = ''
                operand = ''
                usedOperation = ''
                clearDisplay()
                updateOperatorDisplay()
            }
            else if((operand === '') && (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/')){
                operator = this.value
                updateOperatorDisplay()
            }
            else if(this.value === 'delete'){
                operand = deleteNum(operand)
                updateOperatorDisplay()
            }
            else if((!(operand === '')) && this.value === '='){
                output = operate(output,operator,operand)
                operator = ''
                operand = ''
                usedOperation = 1;
                clearOperatorDisplay()
                updateDisplay()
            }
            else if(!(operand === '') && this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/'){
                output = operate(output,operator,operand)
                operator = this.value
                operand = ''
                usedOperation = 1;
                updateOperatorDisplay()
            }
        }
        

    })

})

window.addEventListener('keydown', function(event){
    let button = document.querySelector(`button[data-key="${event.key}"]`)
    if (button) button.click()
})