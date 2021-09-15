import React from 'react';
import { Header, Stand, Plant, FactFile } from './components.js';
import server from "../config/server.json";

class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            factfileshown: false,
            factfileplant: null,
            factfileindex: 0,
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
            factfileindex: JSON.parse(e.currentTarget.getAttribute("index")),
            factfileicondata: JSON.parse(e.currentTarget.getAttribute("icondata")),
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
        modified_garden[this.state.factfileindex] = modified_plant;
        this.setState({
            garden: modified_garden,
            factfileplant: modified_plant,
            factfileicondata: this.calculateIconData(modified_plant)
        });
        this.updateGarden();
    }

    calculateIconData(plant){
        var currentDay = Math.floor(Date.now()/(86400*1000));
        var icondata = [];
        icondata.push(plant.data.last_watered+plant.species.water-currentDay);
        icondata.push(plant.data.last_fed+plant.species.food-currentDay);
        return icondata
    }

    importGarden(){
        if (this.state.garden != null){
            this.updatePlants(this.state.garden);
        }
        else{
            fetch(server['api'] + 'myindoorgarden/test')
            .then(r => r.json())
            .then(json => this.updateGarden(json))
        }
    }

    /*
    exportGarden(){

    }
    */

    updateGarden = (garden_to_use) => {
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
        
        var imported_stands = [];
        var stand_plants = [];
        i = 0;
        while (imported_plants.length > 0){
            stand_plants = imported_plants.splice(0,this.consts.standsize);
            imported_stands.push(<Stand key={i} plants={stand_plants}/>)
            i++;
        }
        while(imported_stands.length < 5){
            imported_stands.push(<Stand key={i} plants={<Plant/>}/>)
            i++;
        }
        this.setState({
            garden: garden_to_use, 
            stands: imported_stands,
            headericondata: [watering_plants, feeding_plants]
        })
    }

    componentDidMount(){
        this.importGarden();
    }

    render(){
        if (this.state.stands != null){
            return(
                <div className="myindoorgarden">
                    <Header icondata={this.state.headericondata}/>
                    {this.state.stands}
                    {(this.state.factfileshown) ? <FactFile plant={this.state.factfileplant} icondata={this.state.factfileicondata} iconClick={this.iconClick} unrenderFactfile={this.unrenderFactfile} /> : ''}
                </div>
            )
        }
        else{
            return(
                <div className="myindoorgarden"/>
            )
        }
    }
}

export default App