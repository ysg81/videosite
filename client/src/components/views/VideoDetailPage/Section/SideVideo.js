import React,{useEffect, useState} from 'react'
import Axios from 'axios';

function SideVideo() {

    const [sideVideos, setsideVideos] = useState([])

    useEffect(() => {

        Axios.get('/api/video/getVideos')
        .then(response => {
            if(response.data.success){
                console.log(response.data)
                setsideVideos(response.data.videos)
            }else{
                alert('비디오 가져오기를 실패 하였습니다.')
            }
        })

    }, [])

    const renderSideVideo = sideVideos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor((video.duration - minutes * 60));

        return <div key={index} style={{display:'flex', marginBottom:'1rem', padding:'0 2rem'}}>


            <div style={{width:'60%', marginBottom:'1rem', marginRight:'1rem'}}>
                <a href>
                    <img style={{width:'100%'}} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail"/>
                </a>
            </div>
            
            <a/>
            <div style={{width:'50%'}}>
                <a href style={{color:'gray'}}>
                    <span style={{fontWeight:'bold', fontSize:'1rem', color:'black'}}>{video.title}</span><br/>
                    <span>{video.writer.name}</span><br/>
                    <span>{video.views} veiws</span><br/>
                    <span>{minutes} : {seconds} </span> <br/>
                </a>
            </div>

        </div>

    })

    return (

        <React.Fragment>
            {renderSideVideo}
        </React.Fragment>
    )
}

export default SideVideo
