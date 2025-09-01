import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(16)

  const [fontSize, setFontSize] = useState(16)
  // 1.ประกาศตัวแปรเพื่อเก็บข้อความ “CSMJU” แล้วนำข้อความไปแสดงใน <h1> 
  const [name] = useState('CSMJU')
  // 2.ประกาศตัวแปรเพื่อเก็บข้อความ “สอบเสร็จแล้ว สบายใจจัง” แล้วนำข้อความไปแสดงใน <h2> 
  const [massage] = useState('สอบเสร็จแล้วสบายใจจัง')
  // 3.ประกาศตัวแปร status และนำไปตรวจสอบเพื่อกำหนด css 
  const status = true;

  return (
    <>
      <div>
        {/* 1.ประกาศตัวแปรเพื่อเก็บข้อความ “CSMJU” แล้วนำข้อความไปแสดงใน <h1> */}
        <h1 className = {status ? "green-txt" : "red-txt"} style = {{fontSize : fontSize}}>{name}</h1>

        {/* 2.ประกาศตัวแปรเพื่อเก็บข้อความ “สอบเสร็จแล้ว สบายใจจัง” แล้วนำข้อความไปแสดงใน <h2> */}
        <h2>{massage}</h2>

        <h2>234+23423-234</h2>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className='font'>Font Size {count} px</div>
        <div className='btt_box'>
          {/* 4.จากตัวอย่างปุ่ม Counter ++ ปรับการทำงานเมื่อกดปุ่มแล้ว ให้ปรับขนาดตัวอักษร <h1> เพิ่มขึ้นด้วย  */}
          <button onClick={() => {setCount((count) => count + 2)
                                setFontSize((size) => size + 2)
                                
          }}>
            count ++ 
          </button>
          {/* 5.จากข้อ 4 ทำปุ่มลบ และให้ทำการลดขนาดตัวอักษรลง  */}
          <button onClick={() => {setCount((count) => count - 2)
                                setFontSize((size) => size - 2)
                                
          }}>
            count --
          </button>
        </div>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
