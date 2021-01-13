import React, {useEffect, useState} from 'react'
import {Col, Row, List, Avatar} from 'antd';
import Axios from 'axios';
import SideVideo from './Section/SideVideo'
import Subscribe from './Section/Subscribe'
import Comment from './Section/Comment'

function VideoDetailPage(props) {

    const videoId = props.match.params.videoId
    const variable = { videoId: videoId }

    const [VideoDetail, setVideoDetail] = useState([])
    const [Comments, setComments] = useState([])

    useEffect(() => {
    
        Axios.post('/api/video/getVideoDetail', variable)
        .then(response => {
            if(response.data.success){
                setVideoDetail(response.data.videoDetail)
            }else{
                alert('비디오 정보를 가져오기 실패 하였습니다.')
            }
            
        })

        Axios.post('/api/comment/getComments', variable)
        .then(response => {
            if(response.data.success){
                setComments(response.data.comments)
            }else{
                alert('코멘트 정보를 가져오기 실패 하였습니다.')
            }
        })

    }, [])

    const refreshFunction = (newComment) => {
        setComments(Comments.concat(newComment))
    }

    if(VideoDetail.writer){
        return (
            <Row gutter={[16,16]}>
                <Col lg={18} xs={24}>
                    <div style={{width:'100%', padding:'3rem 4rem'}}>
                        <video style={{width:'100%'}} src = {`http://localhost:5000/${VideoDetail.filePath}`} controls />
                        <List.Item
                            // actions={[<Subscribe
                            //             usetTo={VideoDetail.writer._id}
                            //             userFrom={localStorage.getItem('userId')}/>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={VideoDetail.writer.image}/>}
                                title={VideoDetail.writer.name}
                                description={VideoDetail.description}
                            />

                        </List.Item>

                        {/* Comments */}
                        <Comment
                            refreshFunction={refreshFunction}
                            commentLists={Comments}
                            postId={videoId}
                            />

                    </div>
                </Col>

                <Col lg={6} xs={24}>
                    <SideVideo/>
                </Col>

            </Row>
        );
    }
    else{
        return(
            <div>Loading...</div>
        );
    }
}

export default VideoDetailPage