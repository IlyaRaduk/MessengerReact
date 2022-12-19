import classes from './Messages.module.css';
import React from 'react';


function Messages(props) {

    const createMessages = (data) => {
        return data.map((e, index) => {
            return <div key={index}>{e}</div>
        })
    }

    let onAddMessage = () => {
        props.addMessage();
    }
    let onChangeLetters = (e) => {
        props.changeLetters(e.currentTarget.value);

    }
    return (
        <>
            <textarea onChange={(e) => { onChangeLetters(e) }} value={props.value} ></textarea>
            <button onClick={onAddMessage}>send</button>
            <div className={classes.messages}>
                Диалог с {props.id}
                {createMessages(props.messages)}
            </div>
        </>
    )
}
export default Messages;