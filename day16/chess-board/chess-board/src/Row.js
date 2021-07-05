import	React from 'react'
import "./Row.css"
import  Box from "./Box"
function Row({color1 , color2})  
    {
        return (
            <div className= "row">
            <Box color = {color1}/>
            <Box color = {color2}/>
            <Box color = {color1}/>
            <Box color = {color2}/>            
            <Box color = {color1}/>
            <Box color = {color2}/>            
            <Box color = {color1}/>
            <Box color = {color2}/>
             </div>)
    }
export default Row  