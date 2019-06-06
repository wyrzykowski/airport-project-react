import React,{Component} from 'react';
import http from "../services/http";

class Plane extends Component {
    state={

    };
    async componentDidMount() {
        this.getData();
    }


    async getData(url="/plane"){
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

    async showMinMax(){
        await this.getData("/plane/min-max");
        this.showData();
    }
    async showRawData(){
        await this.getData("/plane");
        this.showData();
    }
    async showNoLicense(){
        await this.getData("/plane/no-license");
        this.showData();
    }


    render() {
        return (
            <div className="info-content">
                <h1>Planes</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showMinMax.bind(this)}>Show Minimal and Maximal capacity of planes</button>
                <button className="btn-info btn" onClick={this.showNoLicense.bind(this)}>Show Planes which no one can fly </button>
                {
                    this.state.showData && this.state.showData.map(el => <h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Plane;