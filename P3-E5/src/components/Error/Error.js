import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const error = (props) => {
    return(
        <>
            <div className='alert alert-danger'>
                {props.children}
            </div>
        </>
    )
}
export default error;