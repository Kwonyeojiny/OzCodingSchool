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
        <li>
          안녕하세요
          <p>p요소입니다</p>
        </li>
        <li>
          반갑습니다
          <section>Section요소입니다</section>
        </li>
        <li>
          SCSS
          <article>
            article요소입니다
            <h3>h3요소입니다</h3>
          </article>
        </li>
        <li>
          공부해봅시다
          <h2>h2요소입니다</h2>
        </li>
      </ul>
    </>
  )
}

export default App
