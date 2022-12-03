import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../App";

type InputPropsType = {
    addMessage:(title:string)=>void
    message:MessageType[]
    deleteMessage:(taskId:string)=>void
}

const InputMessage = (props:InputPropsType) => {

    const [text,setText] = useState('')
    // const setLocalText = (e:ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)
    const totalMessage = props.message.length
    const lastMessageId = totalMessage>0?props.message[totalMessage-1].id:''
    return (
        <div>
            <h2>Мы можем отправить 5 сообщений</h2>
            <input value={text} type='text' onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)} />
            <button onClick={()=> {
                props.addMessage(text)
                setText('')
            }//при нажатии на онклик у нас срабатывает функция addmessage в которую мы передаем текст из нашего text
            }>Add</button>
            <button onClick={()=> setText('')}>Clear</button>
            <button onClick={()=>props.deleteMessage(lastMessageId)}>Delete last message</button>
            <div>
                {props.message.map(m=>
                    <div key={m.id}>
                        <li>{m.title}</li>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputMessage;