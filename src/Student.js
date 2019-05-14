import React from 'react';
import Clock from './Clock';
import $ from 'jquery';

class Student extends React.Component {
    //局部状态的改变    state
    constructor(props){
        super(props);
        this.state = {
            stus:[],
            form:{
                username:'tr',
                realname:'突然'
            }
        }
        
    }

    changeHandler = (event) =>{
        let tagName = event.target.name;
        let tagVal = event.target.value;
        this.setState((state) =>({
            form:{...this.state.form,...{[tagName]:tagVal}}
        }))
    }

    deleteStudentHandler(id){
        alert('del'+id);
        this.deleteStudentById(id,)
    }

    deleteStudentById(id,handler){
        let url ="?id="+id;
        $.get(url,function(result){

        })
        
    }


    loadStudent(){
        let url = "http://127.0.0.1:8888/user/findAllStudent";
        $.get(url,({status,data})=>{
            if(status === 200){
                this.setState({
                  stus:data   
                })
            } else {
                alert('接口异常');
            }
        });
    }

    render(){
        let name = "学生管理页面";
        let {stus,form} =this.state;
        // setInterval(() =>
        // },1000);
        return (
            <div className='student'>
                <h2>{name}</h2>
                <Clock />
                --{JSON.stringify(form)}
                <form>
                  用户名  <input type='text' name='username' value={form.username} onChange={this.changeHandler}></input>
                  姓名  <input type='text' name='realname' value={form.realname} onChange={this.changeHandler}></input>
                </form>
                <table className='tbl'>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>用户名</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           stus.map((item) => {
                               return (
                                <tr>
                                <td><input type='checkbox'>{item.id}</input></td>
                                <td>{item.username}</td>
                                <td>{item.realname}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <span onClick= {this.deleteStudentHandler.bind(this,item.id)}>删除</span>
                                    <span>修改</span>
                                </td>
                            </tr>
                               )
                           } )
                       }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student;