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

    renderFactfile(){
        this.setState({factfileshown: true})
    }

    unrenderFactfile(){
        this.setState({factfileshown: false})
    }

    componentDidMount(){
        fetch(this.props.garden)
        .then(r => r.json())
        .then(json => {
            console.log("Garden Imported");  
            
            var imported_plants = [];
            Object.keys(json).forEach((key) => imported_plants.push(<Plant plant={json[key]} renderFactfile={this.renderFactfile.bind(this)}/>));
            this.setState({plants: imported_plants});
            console.log("Plants Created");
            
            var imported_stands = [];
            var stand_plants = [];
            while (imported_plants.length > 0){
                stand_plants = imported_plants.splice(0,this.consts.standsize);
                imported_stands.push(<Stand plants={stand_plants}/>)
            }
            this.setState({stands: imported_stands})
            console.log("Stands Created");
        })
    }

    render(){
        return(
            <div className="myindoorgarden">
                <Header/>
                {this.state.stands}
                {(this.state.factfileshown) ? <Factfile unrenderFactfile={this.unrenderFactfile.bind(this)} /> : ''}
            </div>
        )
    }
}

export default MyIndoorGarden