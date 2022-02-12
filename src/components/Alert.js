import React from 'react'

export default function Alert(props) {
    
    return (
        // \/\/\/\/\/\/\/ this is a special type of formate in which alert only be called
    //     when its value is not null because we have used AND(&&) operator here.
       props.alerts && <div class={`alert alert-${props.alerts.type}`} role="alert">
        {props.alerts.message}
      </div>
   
    )
}
