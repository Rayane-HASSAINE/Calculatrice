import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [display, setDisplay] = useState("")

  return (
    <>
      <div className='container'>
        <div className="calculator">
          <form>
            <div className='display'>
          <input className="input" type="text" name="display" value={display} readOnly />
            </div>
            <div>
              <input  type="button" value="AC" className="operator" onClick={() => setDisplay("")}/>
              <input  type="button" value="DE" className="operator" onClick={() => setDisplay(display.slice(0, -1))} />
              <input className="operator" type="button" value="." onClick={() => setDisplay(display + ".")}/>
              <input className="operator" type="button" value="/" onClick={() => setDisplay(display + "/")} />
            </div>
            <div>
              <input type="button" value="7" onClick={() => setDisplay(display + "7")} />
              <input type="button" value="8" onClick={() => setDisplay(display + "8")}/>
              <input type="button" value="9" onClick={() => setDisplay(display + "9")}/>
              <input className="operator" type="button" value="*" onClick={() => setDisplay(display + "*")}/>
            </div>
            <div>
              <input type="button" value="4" onClick={() => setDisplay(display + "4")}/>
              <input type="button" value="5" onClick={() => setDisplay(display + "5")}/>
              <input type="button" value="6" onClick={() => setDisplay(display + "6")}/>
              <input className="operator" type="button" value="-" onClick={() => setDisplay(display + "-")}/>
            </div>
            <div>
              <input type="button" value="1" onClick={() => setDisplay(display + "1")}/>
              <input type="button" value="2" onClick={() => setDisplay(display + "2")}/>
              <input type="button" value="3" onClick={() => setDisplay(display + "3")}/>
              <input className="operator" type="button" value="+" onClick={() => setDisplay(display + "+")}/>
            </div>
            <div>
              <input type="button" value="00" onClick={() => setDisplay(display + "00")}/>
              <input type="button" value="0" onClick={() => setDisplay(display + "0")}/>
              <input className="operator" type="button" value="=" class="equal" onClick={() => eval(display)} />
              <input type="button" value="=" className="operator" onClick={() => setDisplay(String(eval(display)))}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
