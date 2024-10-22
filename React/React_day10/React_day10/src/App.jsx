import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {

  return (
    <>
      <div className='test' >테스트용 div입니다</div>
      <h2>SCSS 변수 연습</h2>
      <ul>
        <li>안녕하세요</li>
        <li>반갑습니다</li>
        <li>SCSS</li>
        <li>공부해봅시다</li>
      </ul>
      <section>
        <article>SCSS문법에는</article>
        <article>변수 사용과</article>
        <article>중접 문법과</article>
        <article>믹스인 등이 있습니다</article>
      </section>
    </>
  )
}

export default App
