

const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

// 화면 출력
function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachnum")
    eachNumDiv.textContent = number
    numbersDiv.append(eachNumDiv)
}

// 날짜 추가
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1 // 0~11 1월~12월 이기때문에 +1 해줘야함
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `


// 로또 번호 추첨
let lottoNumbers = []
drawButton.addEventListener("click", function(){
    // '추첨' 버튼을 누른 후, '다시' 버튼을 누르지 않은 채 '추첨' 버튼을 또 눌러도
    // 새롭게 번호가 추첨되도록 기능 수정해보자
    if(lottoNumbers !== -1){
        lottoNumbers.splice(0,6)
        numbersDiv.innerHTML = '' 
    }

    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45 ) + 1
        if(lottoNumbers.indexOf(rn) === -1){ // -1 반환 = 그 숫자가 배열에 없다
            lottoNumbers.push(rn)
            paintNumber(rn)
        }
    }
})

// 로또 번호 초기화
resetButton.addEventListener("click",function(){
    lottoNumbers.splice(0,6)
    numbersDiv.innerHTML = ''  
})