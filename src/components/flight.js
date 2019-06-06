import React,{Component} from 'react';
import http from "../services/http";

class Flight extends Component {
    state={

    };
    async componentDidMount() {
        this.getData();
    }


    async getData(url="/flight"){
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

    async showFlightInfo(){
        await this.getData("/flight/info");
        this.showData();
    }
    async showRawData(){
        await this.getData("/flight");
        this.showData();
    }


    render() {
        return (
            <div className="info-content">
                <h1>Flights</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showFlightInfo.bind(this)}>Show flight information</button>
                {
                    this.state.showData && this.state.showData.map(el => <h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Flight;