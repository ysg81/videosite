// import React, {useEffect, useState} from 'react'
// import Axios from 'axios'

// function Subscribe(props) {

//     const [SubscribeNumber, setSubscribeNumber] = useState(0)
//     const [Subscribed, setSubscribed] = useState(false)

//     useEffect(() => {

//         let variable = {userTo: props.userTo}

//         Axios.post('/api/subscribe/subscribeNumber', )
//             .then( response=>{
//                 if(response.data.success){
//                     setSubscribeNumber(response.data.subscribeNumber)
//                 }else{
//                     alert('구독자 수 정보를 받아오지 못했습니다.')
//                 }
//             })

//         let subscribeVariable = {userTo:props.userTo, userFrom: localStorage.getItem('userId')}

//         Axios.post('/api/subscribe/subscribed', subscribeVariable)
//             .then( response=>{
//                 if(response.data.success){
//                     setSubscribed(response.data.subscribed)
//                 }else{
//                     alert('정보를 받아오지 못했습니다.')
//                 }
//             })

//     }, [])

//     const onSubscribe = () =>{

//         let subscribeVariable = {

//             userTo: props.userTo,
//             userFrom: props.userFrom
//         }

//         //이미 구독 중이라면
//         if(Subscribed){

//             Axios.post('/api/subscribe/unSubscribe', subscribeVariable)
//                 .then(response => {
//                     if(response.data.success){
//                         setSubscribeNumber(setSubscribeNumber - 1)
//                         setSubscribed(!setSubscribed)
//                     }else{
//                         alert('구독 취소를 실패하였습니다.')
//                     }
//                 })
//         }
//         //구독중이 아니라면
//         else{
//             Axios.post('/api/subscribe/subscribe', subscribeVariable)
//                 .then(response => {
//                     if(response.data.success){
//                         setSubscribeNumber(setSubscribeNumber + 1)
//                         setSubscribed(!setSubscribed)
//                     }else{
//                         alert('구독을 실패하였습니다.')
//                     }
//                 })
//         }
//     }

//     return (
//         <div>
//             <button
//                 style={{backgroundColor: `${Subscribe ? '#CC0000' : '#AAAAAA'}`, border:'4px', color:'white', padding:'10px 16px', fontWeight:'500', fontSize:'1rem', textTransform:'uppercase'
//                 }}
//                 onClick
//             >
//                 {SubscribeNumber} {Subscribed ? 'Subscribed' : 'Subscribe'}
//             </button>
//         </div>
//     )
// }

// export default Subscribe