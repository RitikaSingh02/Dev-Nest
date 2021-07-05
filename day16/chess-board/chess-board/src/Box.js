import	React from 'react'
import "./Box.css"
function Box({color}) 
    {
        return (
            <div className="box" style ={{backgroundColor : color, border:"black"}}>
             </div>)
    }
export default Box