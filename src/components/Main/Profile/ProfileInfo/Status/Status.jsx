import React from "react";
import classes from './Status.module.css'
class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            inputValue: this.props.status,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.allowsEditStatus !== prevProps.allowsEditStatus && this.props.allowsEditStatus===true) {
            this.setState({
                editMode: true,
            })
        }
    }

    activatedEditMode() {
        this.props.checkStatusOwner(this.props.id);
        if (this.props.allowsEditStatus) {
            this.setState({
                editMode: true,
            })
        }
    }
    deActivatedEditMode() {
        this.props.blockStatusOwner();
        this.setState({
            editMode: false,
        })
        if (this.state.inputValue === '') {
            this.props.setStatus(this.props.id, 'Введите статус');
        }
        else {
            this.props.setStatus(this.props.id, this.state.inputValue);
        }
    }
    onChangeInput(e) {
        this.setState({
            inputValue: e.currentTarget.value,
        })
    }


    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={classes.status} type="text" onChange={(e) => { this.onChangeInput(e) }} autoFocus={true} onBlur={this.deActivatedEditMode.bind(this)} value={this.state.inputValue} />
                    </div>
                }
            </div>
        )
    }
}
export default Status;