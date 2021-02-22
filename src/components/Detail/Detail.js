import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { API, ONE_VIDEO, YOUTUBE } from '../../config'
import Output from '../Output/Output'


export function Detail(props) {
    const [video, setVideo] = useState('')
    const [data, setData] = useState([])
    const [info,setInfo]=useState([])
    useEffect(()=>{
        setVideo(props.match.params.videoId)
        getFullInfo(props.match.params.videoId)
         findVideoByName()
    },[props.match.params.videoId])

    const getFullInfo=async(videoId) =>{
        const res = await fetch(ONE_VIDEO + videoId)
        const req = await res.json()
        setInfo(req)
        console.log(req)
        
    }
    const findVideoByName= async ()=>{
        const req = await fetch(API)
        const resp = await req.json()
        setData(resp.items)
           
    }
         
    return (
        <div>
            <iframe style={{
               
                position:'absolute',
                top:"50px"
            }} src={YOUTUBE + video+'/?autoplay=1'} width='900px' height='550' allowFullScreen/>
               <Link style={
                {
                position:'absolute',
                top:"700px"
                }
            } to='/'><button>
            Go back
          </button></Link>
            <h3 style={{
                position:'absolute',
                top:'580px'
            }}>
           
                { info.items ? 
                info.items[0].snippet.title
                :
                "owibka"
            }
            </h3> 
        
            <h3  style={{
                position:'absolute',
                top:'610px',
                left:'100px'
            }}>
            { info.items ? 
                info.items[0].statistics.commentCount
                :
                "owibka"
            }
            </h3>
            <h3  style={{
                position:'absolute',
                top:'610px',
               left:'200px'
            }}>
            { info.items ? 
                info.items[0].statistics.dislikeCount
                :
                "owibka"
            }
            </h3>
         
            <h3  style={{
                position:'absolute',
                top:'610px',
                left:'300px'
                
            }}>
            { info.items ? 
                info.items[0].statistics.viewCount
                :
                "owibka"
            }
            </h3>
            <div>
         <Output 
         videos={data}
         />
        </div>
           </div>
    )
}
function mapDispatchToProps(dispatch){
    
}

export default connect(null, mapDispatchToProps)(Detail)