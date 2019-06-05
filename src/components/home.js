import React,{Component} from 'react';
import http from './../services/http';
class Home extends Component {
    state={

    };
   async componentDidMount() {
       await http.get('/info').then(e=>{
            const {data} = e;
           this.setState({info:data})
       }).catch(e=>{
           console.log("ERROR")
       });
    }
showInfo(){
       let info=[];
       for(let key in this.state.info){
           info.push(this.state.info[key]);
       }
       return info;
}
    render() {
       console.log(this.state.info);
        return (
            <div>
                <h1>Home</h1>
                {
                    this.state.info && this.showInfo().map(el=><h3 key={el}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Home;