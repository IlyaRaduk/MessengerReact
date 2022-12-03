import classes from './Messages.module.css';
import React from 'react';


function Messages(props){
    const createMessages = (data)=>{
        return data.map((e,index)=>{
            return <div key={index}>{e}</div>
        })
    }
    let newMessageElement = React.createRef();

    let onAddMessage = ()=>{
      props.addMessage();
    }
    let onChangeLetters = ()=>{
      let text = newMessageElement.current.value;
      props.changeLetters(text);
      
    }
    return(
        <>
            <textarea onChange={onChangeLetters} ref={newMessageElement} value={props.value} ></textarea>
            <button onClick={onAddMessage}>send</button>
            <div className={classes.messages}>
                Диалог с {props.id}
                {createMessages(props.messages)}
            </div>
        </>
    )
}
export default Messages