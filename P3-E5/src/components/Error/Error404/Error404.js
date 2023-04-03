import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import imgError404 from '../../../asset/images/error404.png'
const error404 = (props) => {
    return(
        <>
            <div>
                <div className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
                    <img src={imgError404} alt='error404' style={{width:'50%'}}/>
                </div>
                <div className="d-flex align-items-center justify-content-center">La page demandée n'existe pas!</div>
            </div>
        </>
    )
}
export default error404;