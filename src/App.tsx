import React, {useState} from 'react';
import classes from "./App.module.css";
import InputMessage from "./components/InputMessage";
import {v1} from "uuid";

 export type MessageType = {
    id:string,
    title:string
}

function App() {
    const [message,setMessage] = useState<MessageType[]>([])

    console.log(message)
    const addMessage = (title:string) =>{
        const newMessage = {id:v1(),title}
        setMessage([...message,newMessage])
        console.log(message)
    }

    const deleteMessage =(taskId:string)=>{
        setMessage(message.filter(el=>el.id!==taskId))
    }

  return (
      <div className={classes.container}>
        <InputMessage addMessage={addMessage} message={message} deleteMessage={deleteMessage}/>
      </div>
  );
}

export default App;
