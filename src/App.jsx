import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [display, setDisplay] = useState("")

  return (
    <>
      <div className='container'>
        <div className="calculator">
          <form>
            <div className='display'>
          <input type="text" name="display" value={display} readOnly />
            </div>
            <div>
              <input type="button" value="AC" />
              <input type="button" value="DE" />
              <input type="button" value="." />
              <input type="button" value="/" />
            </div>
            <div>
              <input type="button" value="7" onClick={() => setDisplay(display + "7")} />
              <input type="button" value="8" />
              <input type="button" value="9" />
              <input type="button" value="*" />
            </div>
            <div>
              <input type="button" value="4" />
              <input type="button" value="5" />
              <input type="button" value="6" />
              <input type="button" value="-" />
            </div>
            <div>
              <input type="button" value="1" />
              <input type="button" value="2" />
              <input type="button" value="3" />
              <input type="button" value="+" />
            </div>
            <div>
              <input type="button" value="00" />
              <input type="button" value="0" />
              <input type="button" value="=" class="equal" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
