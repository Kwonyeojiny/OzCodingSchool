
import { useEffect, useState } from 'react'
import './App.css'

// 생명 주기 함수
// 서버에서 데이터 받아올 때
function App () {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res))
  },[])

  return (
    <>
      <div>데이터 목록</div>
      {data.map(el => <div key={el.id}>{el.content}</div>)}
    </>
  )
}


export default App

// npm i -g json-server
// json-server --watch db.json