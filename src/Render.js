import React from 'react';
// import UserInfo from './UserInfo';
import Student from './Student';
import Left from './Life';

function Render(){
    let msg = "hello"
    let arr = ["黑","黄","蓝"]
    let user = {name:"王豆豆"}
    return (
        <div>
            {/* <Left /> */}
            {/* <UserInfo user={user}></UserInfo> */}
            {/* {基本渲染} */}
            <h2>{msg}</h2>
            {/* {列表渲染} */}
            <ul>
                {
                    arr.map((item,index) => <li key={index}>{item}</li>)
                }
            </ul>
             <Student />
        </div> 
    )
}

export default Render;