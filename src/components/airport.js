import React,{Component} from 'react';
import http from "../services/http";

class Airport extends Component {
    state={

    };
    async componentDidMount() {
        try {

            await http.get("/airport").then(e => {
                const {data} = e;
                this.setState({data});
            }).catch(e => {
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }

    showRawData=()=>{
        let result = this.state.data.map(el=>{
            let dataList=[];
            for(let key in el){
                dataList.push(<p key={Math.random()}>{key +": "+ el[key]}</p>);
            }
            dataList.push(<br/>)
            return dataList;

        });
       this.setState({showData:result})
    };



    render() {
        return (
            <div class="info-content">
                <button className="btn-info btn" onClick={this.showRawData}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showRawData}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showRawData}>Show raw data</button>
                <h1>Airport</h1>
                {
                    this.state.showData && this.state.showData.map(el=><h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Airport;