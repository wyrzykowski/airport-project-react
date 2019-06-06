import React,{Component} from 'react';
import http from "../services/http";

class Passenger extends Component {
    state={

    };
    async componentDidMount() {
        this.getData();
    }


    async getData(url="/passenger"){
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

    async showNameAge(){
        await this.getData("/passenger/name-age");
        this.showData();
    }
    async showRawData(){
        await this.getData("/passenger");
        this.showData();
    }
    async showAdult(){
        await this.getData("/passenger/adult");
        this.showData();
    }


    render() {
        return (
            <div className="info-content">
                <h1>Passengers</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showNameAge.bind(this)}>Show passenger under 18 starts from A</button>
                <button className="btn-info btn" onClick={this.showAdult.bind(this)}>Show Adult passengers</button>
                {
                    this.state.showData && this.state.showData.map(el => <h3 key={Math.random()}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Passenger;