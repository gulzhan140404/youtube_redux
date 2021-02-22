import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


export function Output(props) {
    let style={
    }
    console.log(window.location.href)     
   
    if (window.location.href==="http://localhost:3000/" || window.location.href.length!==40 ) {
    style={
        display:'flex',
        marginTop:'20px',

        
    }
    } else {
        console.log("v drugom meste")
        style={
            position:'relative',
            width:'480px',
        flexWrap:'wrap',
        marginLeft:'68%',
            marginTop:'10px'
    }}      
   

    return (
        <div> 


            {
                props.youtube[0] ? 
                props.youtube[0].data.items.map((el) => {
                     {console.log(el.id.videoId)}
                    return (
                        
                    <div >
                    <Link to={'/detail/'+ el.id.videoId}>
                   
                    <div    style={style}
                    key={el.id.videoId}>
                    <img  src = {el.snippet.thumbnails.high.url}/>
                    <h2>{el.snippet.title}</h2>
                    </div>
                </Link>
                    </div>)
            })  : "Youtube"              
               
            }


           
            
        </div>
    )
}
function mapStateToProps({youtube}){
    return {youtube}
}
export default connect(mapStateToProps)(Output)   