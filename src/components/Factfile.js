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
            plant: 0
        }
    }

    componentDidMount(){
        this.setState({plant: JSON.parse(this.props.plant)})
    }

    render(){
        return(
            <div className="factfile-main">
                <div className="factfile-nickname">{this.state.plant.nickname}</div>
                <div className="factfile-species">{this.state.plant.species}</div>

                <div className="factfile-icons">
                    <Icon color="moccasin" image={mood}/>
                    <Icon color="lightblue" image={water}/>
                    <Icon color="lightgreen" image={food}/>
                    <Icon color="pink" image={pot}/>
                </div>

                <picture className="factfile-pic">
                    <img className="factfile-pic-image" src={this.state.plant.url} alt=""></img>
                </picture>
                
                <a className="factfile-cross" onClick={this.props.unrenderFactfile} href="/#">X</a>
            </div>
        )
    }
}

export default Factfile