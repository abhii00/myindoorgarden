import React from 'react';
import { Icon } from './components.js'
import water from '../assets/water.svg'
import food from '../assets/food.svg'
import mood from '../assets/mood.svg'
import pot from '../assets/pot.svg'

class Factfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            plant: null
        }
    }

    componentDidMount(){
        this.setState({plant: JSON.parse(this.props.plant)})
    }

    render(){
        if (this.state.plant != null){
            return(
                <div className="factfile">
                    <div className="factfile-nickname">{this.state.plant.individual.nickname}</div>
                    <div className="factfile-species">{this.state.plant.species.species}</div>

                    <div className="factfile-icons">
                        <Icon color="moccasin" image={mood}/>
                        <Icon color="lightblue" image={water}/>
                        <Icon color="lightgreen" image={food}/>
                        <Icon color="pink" image={pot}/>
                    </div>

                    <picture className="factfile-pic">
                        <img className="factfile-pic-image" src={this.state.plant.individual.url} alt=""/>
                    </picture>

                    <div className="factfile-cross" onClick={this.props.unrenderFactfile} href="/#">X</div>
                </div>
            )
        }
        else{
            return(
                <div className="factfile"></div>
            )
        }
    }
}

export default Factfile