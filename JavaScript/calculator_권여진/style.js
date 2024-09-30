const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

let currentInput = '0'
display.textContent = currentInput

// 4-1단계 1번
let firstOperand = '' // 첫 번째 피연산자 저장변수
let secondOperand = ''
let operator = '' // 연산자 저장 변수
let operatorClicked = false // 연산자 클릭 여부

buttons.forEach((btn) => {
    btn.addEventListener('click',(e)=>{

        // 3-1단계 Btn 콘솔 출력하기
        const action = e.target.textContent
        
        // 3-2단계 숫자를 디스플레이에 표시하기
        if(e.target.classList.contains('number')) {addDisplayNum(action)}

        // 3단계 추가 과제 (C 누르면 화면 초기화, . 소숫점 화면 출력 한 번만 가능하게)
        clearAll(action)
        addNumPoint(action)
        
        // 4-1단계 2번 3번
        if(e.target.classList.contains('operator')) {checkOperator(action)} 

        // 4-2단계 '=' 계산 수행
        if (action === '=') { 
            secondOperand = currentInput // secondOperand를 currentInput 값으로 설정
            currentInput = calculate(firstOperand, operator, secondOperand)
            firstOperand = ''
            secondOperand = ''
            operator = ''
            operatorClicked = false
        }

        changePlMi(action)
        changePercentage(action)

        display.textContent = currentInput
    })
})

const addDisplayNum = ((action) => {
    if(currentInput === '0' || operatorClicked) {
        currentInput = action
        operatorClicked = false
    }
    else {currentInput += action}
})

const clearAll = ((action) => {
    if(action === 'C') {
        currentInput = '0'
        firstOperand = ''
        secondOperand = ''
        operator = ''
        operatorClicked = false
    }
})

const addNumPoint = ((action) => {
    if(action === '.') {
        if(!currentInput.includes('.')) {currentInput+=action}
    }
})

const checkOperator = ((action) => {
    firstOperand = currentInput
    operator = action
    operatorClicked = true
    console.log('firstOperand: ' + firstOperand, ' operator: ',operator)
})

const calculate = ((firstOperand, operator, secondOperand) => {

    let result = 0
    
    switch(operator){
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand)
            break
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand)
            break
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand)
            break
        case '/':
            if(secondOperand === '0') {result = 'ERROR😳'}
            else {result = parseFloat(firstOperand) / parseFloat(secondOperand)}
            break
        default:
            return
    }

    console.log(firstOperand + ' ' +operator + ' '+secondOperand + ' = ' + result)
    
    return result.toString() // 화면 표시
})

const changePlMi = (action) => {
    if(action === '±' && currentInput !== '0'){
        currentInput *= -1
    }
}

const changePercentage = (action) => {
    if(action === '%' && currentInput !== '0'){
        currentInput *= 0.01
    }
}
