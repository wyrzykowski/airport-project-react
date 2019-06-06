import React,{Component} from 'react';
import http from "../services/http";

class Runway extends Component {
    state={
length:0
    };
    async componentDidMount() {
        this.getData();
    }


    async getData(url="/runway"){
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

    async showRunway(evt){
        this.setState({length:evt.target.value});
        const length = this.state.length === "" ? 0 :this.state.length;
         await this.getData(`/runway/length/${length}`);

        this.showData();
        console.log(this.state.data);
    }
    async showRawData(){
        await this.getData("/runway");
        this.showData();
    }

    async showAvg(){
        await this.getData("/runway/avg");
        this.showData();
    }

    render() {
        return (
            <div className="info-content">
                <h1>Runway</h1>
                <button className="btn-info btn" onClick={this.showRawData.bind(this)}>Show raw data</button>
                <button className="btn-info btn" onClick={this.showAvg.bind(this)}>Show Avg</button>
                <input type="text" pattern="[0-9]*" onChange={this.showRunway.bind(this)} onInput={this.showRunway.bind(this)} value={this.state.length}/>
                {
                    this.state.showData && this.state.showData.map(el => <h3 key={Math.random()+{el}}>{el}</h3>)
                }
            </div>
        );
    }
}

export default Runway;