import { FormControl, Input } from "@mui/material";
import React, {useState, useEffect} from "react";
import  './App.css'
import db from "./components/Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Message from "./components/Message";
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  const sendMesssage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      username: username, 
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, {username: username, message: input}])
    setInput('')
  }
  // use state: variable in react
  // use effect: run code on a condition in react

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(()=>{
    setUsername(prompt('Please enter a username'))
  }, [])  
  
  return (
    <div className="App">
      <h1>Clever Programmers</h1>
      <p>attendance ongoing: {username}</p>
      <form className="app__form" >
        <FormControl className="app__formControl">
          <Input placeholder='Enter a message' value={input} onChange={(e) =>setInput(e.target.value)} className="app__input" />
          <IconButton
            disabled={!input} 
            variant='contained' 
            color='primary' 
            type="submit" 
            onClick={sendMesssage}
            className="app__iconButton"
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <div>
        <FlipMove>
          {
            messages.map(({id, message}) =>(
                <Message key={id} username={username} message={message}/>
              ))
            }
        </FlipMove>
        </div>
    </div>
  );
}

export default App;


