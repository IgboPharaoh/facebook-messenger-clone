import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, {useState, useEffect} from "react";
import  './App.css'
import Message from "./components/Message";

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {username: 'sunny', text: 'whats up'}, 
    {username: 'merchant', text: 'how many tap-ins have you scored'}
  ])

  const [username, setUsername] = useState('')

  const sendMesssage = (e) => {
    e.preventDefault()
    setMessages([...messages, {username: username, text: input} ])
    setInput('')
  }

  useEffect(()=>{
    setUsername(prompt('Please enter a username'))
  }, []) 
  
  return (
    <div className="App">
      <h1>Clever Programmers</h1>
      <p>attendance ongoing: {username}</p>
      <form >
        <FormControl>
          <InputLabel >Send Message... </InputLabel>
          <Input value={input} onChange={(e) =>setInput(e.target.value)}  />
        <Button disabled={!input} variant='contained' color='primary' type="submit" onClick={sendMesssage}>Send Message</Button>
        </FormControl>
      </form>
      <div>
        {
          messages.map((message) =>(
              <Message key={message.text} username ={message.username} text={message.text}/>
            ))
          }
        </div>
    </div>
  );
}

export default App;


