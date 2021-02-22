import React, {useState} from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {getVideoByName} from '../../action/index'
import { useHistory } from 'react-router-dom'
import "./Search.css"



export function Search(props) {
    

    const [val, setVal] = useState('')
    const history = useHistory()
    const searchVideo = event =>{
        event.preventDefault()
        history.push('/' + val)
        props.getVideoByName(val)
        setVal('')
    }
    return (
        <div style={{width:'100%'}} className='Search'>
            <form
                style={{
                    textAlign:'center',
                    paddingTop:"10px",
                    marginBottom:'3%',
                    borderColor:'wheat',
                }} 
                onSubmit={searchVideo}>
            <input className='search_input'
                onChange={event=>setVal(event.target.value)} 
                value={val}
                placeholder='Введите запрос'
            />
            <button className='search_btn'>SEARCH</button>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getVideoByName},dispatch)
}

export default connect(null, mapDispatchToProps)(Search)