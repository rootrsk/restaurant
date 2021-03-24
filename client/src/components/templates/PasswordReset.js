import { createMuiTheme, TextField, withStyles } from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
import axios from 'axios'
import React from 'react'
const URL = ''
const styles = theme => ({
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#00dc9e "
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `#00dc9e !important`,
        }
    },
    cssFocused:{
        borderColor:'green !important'
    }
});

function PasswordReset(props) {
    console.log(props)
    const {classes} = props 
    const ResetHandler = async()=>{
        const response = await axios({

        })
    }
    return (
        <div>
            <div>
                <h1>Password Reset</h1>
                <TextField
                    variant='outlined' 
                    placeholder='Enter Your Email'
                    label = "Email"
                    InputProps = {{
                        classes: {
                            root: classes.cssOutlinedInput,
                            notchedOutline: classes.notchedOutline,
                            focused: classes.cssFocused
                            
                        }
                    }}
                    color='primary'

                />
                <button className='p-btn'>Reset</button>
            </div>
        </div>
    )
}

export default withStyles(styles) (PasswordReset)
