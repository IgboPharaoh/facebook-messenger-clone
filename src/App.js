import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, {useState, useEffect} from "react";
import  './App.css'
import db from "./components/Firebase";
import Message from "./components/Message";

function App() {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  const sendMesssage = (e) => {
    e.preventDefault()
    setMessages([...messages, {username: username, message: input}])
    setInput('')
  }
  // use state: variable in react
  // use effect: run code on a condition in react

  useEffect(()=>{
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map((doc) => (doc.data())))
    })
  }, [])

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
              <Message key={message.message} username={username} message={message}/>
            ))
          }
        </div>
    </div>
  );
}

export default App;


