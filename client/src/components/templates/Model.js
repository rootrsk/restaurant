import { Fade, Modal } from '@material-ui/core'
import React from 'react'
const open = true
function Model(props) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                    <div>
                        <Fade in={true}>
                            
                            <div>
                                <h1>This is America</h1>
                            </div>
                        </Fade>
                        
                    </div>
                
            </Modal>
        </div>
    )
}

export default Model
