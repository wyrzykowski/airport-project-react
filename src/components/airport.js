import React,{Component} from 'react';
import http from "../services/http";

class Airport extends Component {
    state={

    };
    async componentDidMount() {
       this.getData();
    }


   async getData(url="/airport"){
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

    async showPlaneAirport(){
       await this.getData("/airport/plane");
        this.showData();
    }
    async showRawData(){
        await this.getData("/airport");
        this.showData();
    }
    async showArrival(){
        await this.getData("/airport/arrival");
        this.showData();
    }

    async showDeparture(){
        await this.getData("/airport/departure");
        this.showData();
    }
    async showPlaneCount(){
        await this.getData("/airport/count-plane");
        this.showData();
    }


    render() {
        return (
            <div class="info-content">
                <h1>Airport</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showPlaneAirport.bind(this)}>Show Plane with hangar place</button>
                <button className="btn-info btn" onClick={this.showArrival.bind(this)}>Arrival</button>
                <button className="btn-info btn" onClick={this.showDeparture.bind(this)}>Departure</button>
                <button className="btn-info btn" onClick={this.showPlaneCount.bind(this)}>Plane Count</button>

                {
                    this.state.showData && this.state.showData.map(el=><h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Airport;