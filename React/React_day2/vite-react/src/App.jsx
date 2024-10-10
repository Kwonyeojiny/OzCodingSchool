import './App.css'

// // 클래스형 컴포넌트
//import { Component } from 'react'
// class App extends Component {
//   render(){
//     return <div>클래스형 컴포넌트</div>
//   }
// }

// // 함수형 컴포넌트
// function App() {
//   return (
//     <>
//       {/* <빵/>
//       <패티/>
//       <양상추/>
//       <토마토/>
//       <치즈/>
//       <빵/> */}

//       <대왕치즈버거/>
//     </>
//   );
// }

// function 대왕치즈버거 () {
//   return (
//     <>
//     <빵/>
//       <패티/>
//       <치즈/>
//       <패티/>
//       <치즈/>
//       <패티/>
//       <치즈/>
//       <양상추/>
//       <토마토/>
//       <패티/>
//       <치즈/>
//       <패티/>
//       <치즈/>
//       <빵/>
//     </>
//   )
// }


// function 빵 () {
//   return (
//     <div className='빵'>
//       밀가루
//       <span> 물</span>
//       <span> 계란</span>
//       <span> 이스트</span>
//     </div>
//   )
// }

// function 패티 (){
//   return (
//     <div className='패티'>
//       소고기
//       <span> 후추</span>
//       <span> 소금</span>
//     </div>
//   )
// }

// function 양상추 (){
//   return (
//     <div className='양상추'>
//       잎사귀
//       <span> 줄기</span>
//     </div>
//   )
// }

// function 토마토 (){
//   return (
//     <div className='토마토'>
//       껍질
//       <span> 과육</span>
//       <span> 씨앗</span>
//     </div>
//   )
// }

// function 치즈 (){
//   return (
//     <div className='치즈'>
//       우유
//       <span> 소금</span>
//       <span> 색소</span>
//     </div>
//   )
// }


// 선언적 프로그래밍 방식

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

function App(){
  return(
    <>
      {fruits.filter(
        (fruit)=> fruit.color === "빨강"
      ).map((fruit)=> (
        <div key={fruit.name}>
          이름 : {fruit.name},
          색깔 : {fruit.color},
          크기 : {fruit.크기}
        </div>
      ))}
    </>
  )
}

export default App
