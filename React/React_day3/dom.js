// 명령적 프로그래밍 방식

const fruits = [
    {name: "딸기" , color:"빨강" , 크기: 2},
    {name: "바나나", color: "노랑", 크기: 5},
    {name: "키위", color: "초록", 크기: 3},
    {name: "사과", color: "빨강", 크기: 4},
    {name: "블루베리", color: "파랑", 크기: 1},
    {name: "오렌지", color: "주황", 크기: 4},
    {name: "포도", color: "보라", 크기: 2},
    {name: "레몬", color: "노랑", 크기: 3},
    {name: "체리", color: "빨강", 크기: 2},
    {name: "수박", color: "초록" , 크기: 8}
]


const body = document.querySelector('body');

for(let fruit of fruits){
    const divElement = document.createElement('div')
    divElement.textContent = `이름 : ${fruit.name}, 색깔 : ${fruit.color}, 크기 : ${fruit.크기}`
    body.append(divElement)
}