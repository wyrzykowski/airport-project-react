import React,{Component} from 'react';
import http from "../services/http";

class Pilot extends Component {
    state={

    };
    async componentDidMount() {
        this.getData();
    }


    async getData(url="/pilot"){
        try {

            await http.get(url).then(e => {
                const {data} = e;
                this.setState({data});
            }).catch(e => {
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }


    showData=()=>{
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

    async showAverageAge(){
        await this.getData("/pilot/avg-age");
        this.showData();
    }
    async showRawData(){
        await this.getData("/pilot");
        this.showData();
    }

    async showSum(){
        await this.getData("/pilot/sum");
        this.showData();
    }


    render() {
        return (
            <div className="info-content">
                <h1>Pilots</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showAverageAge.bind(this)}>Show Average pilot age</button>
                <button className="btn-info btn" onClick={this.showSum.bind(this)}>Show Sum of flight per pilot</button>
                {
                    this.state.showData && this.state.showData.map(el => <h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Pilot;