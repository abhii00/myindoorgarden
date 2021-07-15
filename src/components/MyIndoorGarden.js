import React from 'react';
import { Header, Stand, Plant, Factfile } from './components.js'

class MyIndoorGarden extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            factfileshown: false,
            plants: [],
            stands: []
        }

        this.consts = {
            standsize: 5
        }
    }

    renderFactfile(e){
        this.setState({
            factfileshown: true,
            factfileplant: e.currentTarget.getAttribute("plant")
        })
    }

    unrenderFactfile = () => {
        this.setState({factfileshown: false})
    }

    componentDidMount(){
            console.log("Garden Imported");  
            
            var imported_plants = [];
            Object.keys(this.props.imported_garden).forEach((key) => imported_plants.push(<Plant plant={this.props.imported_garden[key]} renderFactfile={this.renderFactfile.bind(this)}/>));
            this.setState({plants: imported_plants});
            console.log("Plants Created");
            
            var imported_stands = [];
            var stand_plants = [];
            while (imported_plants.length > 0){
                stand_plants = imported_plants.splice(0,this.consts.standsize);
                imported_stands.push(<Stand plants={stand_plants}/>)
            }
            while(imported_stands.length < 5){
                imported_stands.push(<Stand/>)
            }
            this.setState({stands: imported_stands})
            console.log("Stands Created");
    }

    render(){
        return(
            <div className="myindoorgarden-main">
                <Header/>
                {this.state.stands}
                {(this.state.factfileshown) ? <Factfile plant={this.state.factfileplant} unrenderFactfile={this.unrenderFactfile.bind(this)} /> : ''}
            </div>
        )
    }
}

export default MyIndoorGarden