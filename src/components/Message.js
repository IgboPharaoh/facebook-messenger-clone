import React from 'react'

const Message = ({text, username}) => {
   
  return (
    <div>
        <h2><span style={{color: 'green'}}>{username}</span>: {text}</h2>
    </div>
  )
}

export default Message