import React from 'react'
import  { Link } from 'react-router-dom'

function NotFound() {
    return (
       
            <div className="mainbox">
                <div className="404">
                    <div className="err">4</div>
                        <i className="far fa-question-circle fa-spin" />
                    <div className="err2">4</div>
                </div>
        
             <div className="msg">Looks like you entered a wrong URL buddy, Please check it again<p>Let's go to the <Link to="/">home page</Link>  and try from there </p></div>
            </div>
    
    )
}

export default NotFound
