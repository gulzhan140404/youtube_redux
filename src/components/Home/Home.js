import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { API } from '../../config'
import Output from '../Output/Output'



export  function Home(props) {

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    let val = props.match.params.value
    findVideoByName(val ? val :'')
  },[props.match.params.value])

  const findVideoByName= async (name)=>{
    const req = await fetch(API + name)
    const resp = await req.json()
    setVideos(resp.items)
    console.log(resp)
  }

  return (
    <div>
  <Output videos={videos}/>
    </div>
  )
}
function mapDispatchToProps(dispatch){ 
  
}

export default connect(null, mapDispatchToProps)(Home)
