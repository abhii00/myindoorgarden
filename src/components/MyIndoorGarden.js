import React from 'react';
import { Header, Stand, Plant, Factfile } from './components.js'

class MyIndoorGarden extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            factfileshown: false,
            garden: null,
            stands: null
        }

        this.consts = {
            standsize: 6
        }
    }

    renderFactfile(e){
        this.setState({
            factfileshown: true,
            factfileplant: e.currentTarget.getAttribute("plant"),
            factfileicondata: e.currentTarget.getAttribute("icondata")
        })
    }

    unrenderFactfile = () => {
        this.setState({factfileshown: false})
    }

    calculateIconData(plant){
        var currentDay = Math.floor(Date.now()/(86400*1000));
        var icondata = [];
        icondata.push(currentDay+plant.species.water-plant.data.last_watered);
        icondata.push(currentDay+plant.species.food-plant.data.last_fed);
        return(icondata)
    }

    componentDidMount(){
            console.log("Garden Imported");  

            var imported_plants = [];
            for (var i = 0; i < this.props.imported_garden.length; i++){
                var current_plant = this.props.imported_garden[i];
                var current_icondata = this.calculateIconData(current_plant);
                imported_plants.push(<Plant plant={current_plant} icondata={current_icondata} renderFactfile={this.renderFactfile.bind(this)}/>)
            }
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
            this.setState({
                garden: this.props.imported_garden, 
                stands: imported_stands
            })
            console.log("Stands Created");
    }

    render(){
        if (this.state.stands != null){
            return(
                <div className="myindoorgarden">
                    <Header/>
                    {this.state.stands}
                    {(this.state.factfileshown) ? <Factfile plant={this.state.factfileplant} icondata={this.state.factfileicondata} unrenderFactfile={this.unrenderFactfile.bind(this)} /> : ''}
                </div>
            )
        }
        else{
            return(
                <div className="myindoorgarden"></div>
            )
        }
    }
}

export default MyIndoorGarden