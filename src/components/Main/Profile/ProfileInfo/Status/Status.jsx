import React from "react";
import { useEffect, useState } from "react";
import classes from './Status.module.css'


const Status = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [inputValue, setInputValue] = useState(props.status)

    useEffect(() => {
        if (props.allowsEditStatus === true) {
            setEditMode(true);
        }
    }, [props.allowsEditStatus])

    const activatedEditMode = () => {
        props.checkStatusOwner(props.id);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        if (inputValue === '') {
            props.setStatus(props.id, 'Введите статус');
        }
        else {
            props.setStatus(props.id, inputValue);
        }
    }
    const onChangeInput = (e) => {
        setInputValue(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => { activatedEditMode() }}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input className={classes.status} type="text" onChange={(e) => { onChangeInput(e) }} autoFocus={true} onBlur={() => { deActivatedEditMode() }} value={inputValue} />
                </div>
            }
        </div>
    )
}

export default Status;