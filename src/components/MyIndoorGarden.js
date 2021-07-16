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

    renderFactfile = (e) => {
        this.setState({
            factfileshown: true,
            factfileplant: JSON.parse(e.currentTarget.getAttribute("plant")),
            factfileindex: e.currentTarget.getAttribute("index"),
            factfileicondata: e.currentTarget.getAttribute("icondata"),
        })
    }

    unrenderFactfile = () => {
        this.setState({factfileshown: false})
    }

    iconClick = (e) => {
        var modified_garden = this.state.garden;
        var modified_plant = modified_garden[this.state.factfileindex]

        var currentDay = Math.floor(Date.now()/(86400*1000));

        var modification_type = e.currentTarget.getAttribute("type");
        switch(modification_type){
            case "water":
                modified_plant.data.last_watered = currentDay; 
                break;
            case "food":
                modified_plant.data.last_fed = currentDay;
                break;
            default:
                break;
        }
        modified_garden[this.state.factfile] = modified_plant;
        this.setState({
            garden: modified_garden,
            factfileplant: modified_plant
        });
    }

    calculateIconData(plant){
        var currentDay = Math.floor(Date.now()/(86400*1000));
        var icondata = [];
        icondata.push(plant.data.last_watered+plant.species.water-currentDay);
        icondata.push(plant.data.last_fed+plant.species.food-currentDay);
        return(icondata)
    }

    componentDidMount(){
        var garden_to_use = this.props.imported_garden;
        console.log("Garden Imported");

        var imported_plants = [];
        var watering_plants = [];
        var feeding_plants = [];
        for (var i = 0; i < garden_to_use.length; i++){
            var current_plant = garden_to_use[i];
            var current_icondata = this.calculateIconData(current_plant);
            if (current_icondata[0] <= 0){
                watering_plants.push(current_plant.individual.nickname);
            }
            if (current_icondata[1] <= 0){
                feeding_plants.push(current_plant.individual.nickname);
            }
            imported_plants.push(<Plant key={i} plant={current_plant} index={i} icondata={current_icondata} renderFactfile={this.renderFactfile}/>)
        }
        console.log("Plants Created");
        
        var imported_stands = [];
        var stand_plants = [];
        while (imported_plants.length > 0){
            stand_plants = imported_plants.splice(0,this.consts.standsize);
            imported_stands.push(<Stand key={i} plants={stand_plants}/>)
        }
        while(imported_stands.length < 5){
            imported_stands.push(<Stand/>)
        }
        this.setState({
            garden: garden_to_use, 
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
                    {(this.state.factfileshown) ? <Factfile plant={JSON.stringify(this.state.factfileplant)} icondata={this.state.factfileicondata} iconClick={this.iconClick} unrenderFactfile={this.unrenderFactfile} /> : ''}
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