import React, {useState} from 'react'
import {Typography, Button, Form, message, Input, Icon} from 'antd';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

const {Title} = Typography;
const {TextArea} = Input;

const PrivateOptions=[
    {value:0, label:"Private"},
    {value:1, label:"Public"}
]

const CategoryOptions=[
    {value:0, label:"Film & Animation"},
    {value:1, label:"Auto & Vehicles"},
    {value:2, label:"Music"},
    {value:3, label:"Pets & Animals"},
]

function VideoUploadPage() {
    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")


    const onTitleChange = (e) =>{
        setVideoTitle(e.target.value)
    }
    const onDescriptionChange = (e) =>{
        setDescription(e.target.value)
    }
    const onPrivateChange = (e) =>{
        setPrivate(e.target.value)
    }
    const onCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    // const onDrop = (files) => {
    //     let formData = new FormData;
    //     const config = {
    //         header : {'content-type': 'multipart/form-data'}
    //     }
    //     formData.append("file", files[0])
    //     Axios.post('/api/video/uploadfiles/', formData, config)
    //     .then(response=>{
            
    //         if(response.data.success){
    //             let variable={
    //                 url:response.data.url,
    //                 fileName:response.data.fileName
    //             }
                
    //             Axios.post('api/video/thumbnail', variable)
    //             .then(response => {
    //                 if(response.data.success){
                        
    //                 }else{
    //                     alert('썸네일 생성에 실패하였습니다.')
    //                 }
    //             })
    //         }else{
    //             alert('비디오 업로드를 실패했습니다.')
    //         }
    //     })
    // }
    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Video</Title>
            </div>
            <Form onSubmit>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    {/* Drop Zone */}

                    <Dropzone
                        onDrop
                        // ={onDrop}
                        multiple={false}
                        maxSize={1000000}>
                        {({getRootProps, getInputProps}) => (
                            <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display:'flex',alignItems:'center', justifyContent:'center'}} {...getRootProps()}>
                                <input {...getInputProps()}></input>
                                <Icon type="plus" style={{fontSize:'3rem'}}></Icon>
                            </div>
                        )}
                        
                    </Dropzone>



                    <div>
                        <img src alt />
                    </div>
                </div>

                <br/><br/>

                <label>Title</label>
                <Input 
                    onChange={onTitleChange}
                    value={VideoTitle}
                />

                <br/><br/>

                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={Description}
                />

                <br/><br/>

                <select onChange={onPrivateChange}>
                    {PrivateOptions.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>    
                    ))}

                </select>

                <br/><br/>

                <select onChange={onCategoryChange}>
                    {CategoryOptions.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>    
                    ))}
                </select>

                <br/><br/>

                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage