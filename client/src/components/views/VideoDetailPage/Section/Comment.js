import Axios from 'axios'
import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment' 

function Comment(props) {

    const videoId = props.postId

    const user = useSelector(state => state.user);
    const [commentValue, setcommentValue] = useState("")

    const handleClick = (e) =>{
        setcommentValue(e.target.value)
    }

    const onSubmit= (e) => {
        e.preventDefault()

        //comment 정보를 db에 전송

        const variables = {
            content: commentValue,
            writer: user.userData._id,
            postId: videoId 
        }

        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success){
                console.log(response.data.result)

                props.refreshFunction(response.data.result)
                setcommentValue("")

            }else{
                alert('코멘트를 저장하지 못하였습니다.')
            }
        })
    }

    return (
        <div>
            <br/>
            <p>Replies</p>
            <hr style = {{border:'2px solid black'}}/>

            {/* Comment List */}


            {props.commentLists && props.commentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment
                            refreshFunction={props.refreshFunction}
                            comment={comment}
                            postId={videoId}/>
                        <ReplyComment
                            refreshFunction={props.refreshFunction}
                            parentCommentId={comment._id}
                            commentLists={props.commentLists}
                            postId={videoId}/>
                        
                    </React.Fragment>
                )
            ))}

            {/* Root Comment Form */}
             
            <form
                style={{display:'flex'}}
                onSubmit={onSubmit}>

                <textarea
                    style={{width:'100%', borderRadius:'5px'}}
                    onChange={handleClick}
                    value={commentValue}
                    placeholder="댓글을 입력해주세요">

                </textarea>
                <br/>
                <button style={{width:'20%', height:'52px'}}>입력</button>
            </form>

        </div>
    )
}

export default Comment
