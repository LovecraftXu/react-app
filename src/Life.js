import React from 'react';

class Life extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            random : Math.random()*100,
            arr : [1,2,3,4]
        }
        console.log("-constrcuctor-")
    }

    //ajax阶段
    componentWillMount(){
        console.log("-componentWillMount初始化操作-")
        setInterval(() =>{
            this.setState({
                random : Math.random()*100,
                arr : [...this.state.arr,Math.random()]
            })
        },1000);
    }

    render(){
        console.log("-render-")
        let {random} = this.state;
        let {arr} = this.state;
        return(
            <div>
                <div>{random}</div>
                <ul>{arr.map((item,index) =><li key={index}>{item}}</li>)}</ul>
            </div>
        );
    }
}

export default Life;