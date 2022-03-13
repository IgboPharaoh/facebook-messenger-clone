import { Button } from "@mui/material";
import React, {useState} from "react";
import  './App.css'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['hello', 'world'])

  console.log(input);
  console.log(messages);

  const sendMesssage = (e) => {
    e.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }
  
  return (
    <div className="App">
      <h1>Clever Programmers</h1>
      <form >
        <input value={input} onChange={(e) =>setInput(e.target.value)}/>
        <Button variant='contained' color='primary' type="submit" onClick={sendMesssage}>Send Message</Button>
      </form>
      {
        messages.map((message) =>(
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;


