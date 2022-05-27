import React from 'react'

export default function Alert(props) {

    const capitalise = (word) => {      //function is to capitalise the 1st letter of the msg
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }


    return (
        <div className="container" style={{height: '50px'}}>
            {/* if the value of alert is null, then don't execute the further div, else execute it */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>

    )
}
