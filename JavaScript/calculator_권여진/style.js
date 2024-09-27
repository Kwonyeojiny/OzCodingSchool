const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

let currentInput = '0'
display.textContent = currentInput

buttons.forEach((btn) => {
    btn.addEventListener('click',(e)=>{

        // 3-1단계 Btn 콘솔 출력하기
        const action = e.target.textContent
        console.log(action)
        
        // 3-2단계 숫자를 디스플레이에 표시하기
        if(e.target.classList.contains('number')){
            if(currentInput === '0') {currentInput = action}
            else {currentInput += action}
        }
        if(action === 'C') {currentInput = '0'}
        if(action === '.') {
            if(!currentInput.includes('.'))
                currentInput+=action
        }

        display.textContent = currentInput
    })
})
