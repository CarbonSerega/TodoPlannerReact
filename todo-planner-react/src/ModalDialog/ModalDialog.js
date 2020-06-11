import React from "react"
import './ModalDialog.css'

export default class ModalDialog extends React.Component{
    state = {
        open: false
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({open: true})}>Open modal dialog</button>

                {
                    this.state.open && (
                    <div className='modal-dialog'>
                        <div className='modal-dialog-body'>
                            <h2>Modal dialog title</h2>
                            <p>This is a modal dialog.</p>
                            <button onClick={() => this.setState({open: false})}>Close</button>
                        </div>
                    </div>
                    )
                }
            </React.Fragment>
        )
    }
}