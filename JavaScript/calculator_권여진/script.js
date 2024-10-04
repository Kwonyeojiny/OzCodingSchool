// const buttons = document.querySelectorAll('.button')
// const display = document.querySelector('.display')

// let state = {
//     firstOperand: 0,
//     operator: null,
//     secondOperand: null,
//     reset: false,
//     displayNumber: null,
// }

// buttons.forEach((btn) => {
//     btn.addEventListener('click',(e)=>{
//         const {number, currentvalue, btnType} = ''
//     })
// })

// const calculate = (first, second, op) => {
//     switch (op) {
//         case '+':
//             return first + second;
//         case '-':
//             return first - second;
//         case '*':
//             return first * second;
//         case '/':
//             return (second !== 0) ? (first / second) : NaN;
//     }
// }

// const btnClickfunction = (state,action) => {
//     switch(action){
//         case 'C' :
//             return {
//                 ...state,
//                 firstOperand : 0
//             }
//         case '+/-' :
//             return {
//                 ...state,
//                 firstOperand : -state.firstOperand
//             }
//         case '%' :
//             return {
//                 ...state,
//                 firstOperand : (Number(state.firstOperand) * 0.01)
//             }
//     }
// }

const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

let currentInput = '0'
display.textContent = currentInput

// 4-1단계 1번
let firstOperand = '' // 첫 번째 피연산자 저장변수
let secondOperand = ''
let operator = '' // 연산자 저장 변수
let operatorClicked = false // 연산자 클릭 여부
let result = '' // 연속적 계산처리를 위한 전역변수 선언

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
        checkEqual(action)

        changePlMi(action)
        changePercentage(action)

        display.textContent = currentInput

        // if(currentInput.length > 19)
    })
})

const addDisplayNum = ((action) => {
    if(currentInput === '0' || operatorClicked || result !== '') {
        currentInput = action
        operatorClicked = false
        result = ''
    } else {currentInput += action}
})

const clearAll = ((action) => {
    if(action === 'C') {
        currentInput = '0'
        firstOperand = ''
        secondOperand = ''
        operator = ''
        operatorClicked = false
        result = ''
    }
})

const addNumPoint = ((action) => {
    if(action === '.') {
        if(!currentInput.includes('.')) {currentInput+=action}
    }
})

const checkOperator = ((action) => {
    // 4단계 추가과제 (= 누르지 않아도 부등호 누르면 계산되는 조건)
    if(result !== ''){
        firstOperand = result
        result = ''
    } else if(operator && firstOperand && !operatorClicked){
        secondOperand = currentInput;
        currentInput = calculate(firstOperand, secondOperand, operator);
        firstOperand = currentInput;
    }
    else {firstOperand = currentInput}

    operator = action
    operatorClicked = true

    //console.log('firstOperand: ' + firstOperand, ' operator: ',operator)
})

const checkEqual = ((action) => {
    if (action === '=') { 
        // @@ 값이 나온상태 이거나 아무것도 없는 상태에서 =을 누르면 화면이 빈값이 된다 조건 추가
        if(operator === '' || !firstOperand){return}
        if (!secondOperand){
            secondOperand = currentInput
        }
        currentInput = calculate(firstOperand, secondOperand, operator)
        firstOperand = currentInput
        operatorClicked = true    
    }
})

const calculate = ((firstOperand, secondOperand, operator) => {

    parseFloat(result)
    
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
            (secondOperand === '0') ? (result = 'ERROR') :
                (result = parseFloat(firstOperand) / parseFloat(secondOperand))
            break
        default:
            return
    }

    console.log(firstOperand + ' ' +operator + ' '+secondOperand + ' = ' + result)
    
    return result.toString() // 화면 표시
})

const changePlMi = (action) => {
    if(action === '+/-' && currentInput !== '0'){
        currentInput *= -1
    }
}

const changePercentage = (action) => {
    if(action === '%' && currentInput !== '0'){
        currentInput *= 0.01
    }
}
