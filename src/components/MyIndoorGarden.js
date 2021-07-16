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
        icondata.push(plant.data.last_watered+plant.species.water-currentDay);
        icondata.push(plant.data.last_fed+plant.species.food-currentDay);
        return(icondata)
    }

    componentDidMount(){
            console.log("Garden Imported");  

            var imported_plants = [];
            var watering_plants = [];
            var feeding_plants = [];
            for (var i = 0; i < this.props.imported_garden.length; i++){
                var current_plant = this.props.imported_garden[i];
                var current_icondata = this.calculateIconData(current_plant);
                if (current_icondata[0] <= 0){
                    watering_plants.push(current_plant.individual.nickname);
                }
                if (current_icondata[1] <= 0){
                    feeding_plants.push(current_plant.individual.nickname);
                }
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
                stands: imported_stands,
                headericondata: [watering_plants, feeding_plants]
            })
            
            console.log("Stands Created");
    }

    render(){
        if (this.state.stands != null){
            return(
                <div className="myindoorgarden">
                    <Header icondata={this.state.headericondata}/>
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