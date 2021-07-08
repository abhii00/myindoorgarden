import React from 'react';
import { Header, Stand, Plant, Factfile } from './components.js'

class MyIndoorGarden extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            factfileshown: false,
            plants: Array(null)
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
            var garden = json;
            console.log("Garden Imported");  
            
            var imported_plants = Array(null);

            Object.keys(garden).forEach(function(key) {
                var plant_data = garden[key];
                var plant = <Plant nickname={key} name={plant_data.type} url={plant_data.image_url}/>
                console.log(plant_data)
                imported_plants.push(plant)
            });
            this.setState({plants: imported_plants});
            console.log("Plants Created");    
        })
    }

    render(){
        return(
            <div className="myindoorgarden">
                <Header/>
                <Stand plants={this.state.plants}/>
                {(this.state.factfileshown) ? <Factfile unrenderFactfile={this.unrenderFactfile.bind(this)} /> : ''}
            </div>
        )
    }
}

export default MyIndoorGarden