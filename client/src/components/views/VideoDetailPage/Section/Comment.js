import Axios from 'axios'
import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import SingleComment from './SingleComment'

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
            <hr/>

            {/* Comment List */}


            {props.commentLists && props.commentLists.map((comment, index) => (
                (!Comment.responseTo &&
                    <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={videoId}/>
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
