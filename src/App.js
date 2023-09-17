import React,{useState} from 'react'
import './App.css';

const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <h2 className='title'>Calculator</h2>
        <div className='calc-board'>
        <input className="input"type="text" value={input} name="input" onChange={handler} />
        <br />
        <button className="result-btn"onClick={() => setResult(eval(input))}>Result</button>
        <h4 className='result'>Result is : {result}</h4>

        <button className="keys" onClick={() => setInput(input+'1')}>1</button>
        <button className="keys" onClick={() => setInput(input+'2')}>2</button>
        <button className="keys" onClick={() => setInput(input+'3')}>3</button>
        <button className="keys" onClick={() => setInput(input+'4')}>4</button>
        <button className="keys" onClick={() => setInput(input+'5')}>5</button><br />
        
        <button className="keys" onClick={() => setInput(input+'6')}>6</button>
        <button className="keys" onClick={() => setInput(input+'7')}>7</button>
        <button className="keys" onClick={() => setInput(input+'8')}>8</button>
        <button className="keys"onClick={() => setInput(input+'9')}>9</button>
        <button className="keys" onClick={() => setInput(input+'0')}>0</button><br />

        <button className="keys" onClick={() => setInput(input+'+')}>+</button>
        <button className="keys" onClick={() => setInput(input+'-')}>-</button>
        <button className="keys" onClick={() => setInput(input+'*')}>*</button>
        <button className="keys" onClick={() => setInput(input+'/')}>/</button>
        <button className="keys"onClick={() => {setInput('');setResult(0)}}>clr</button><br /> 
        </div>
      </center>
    </div>
  )
}

export default App