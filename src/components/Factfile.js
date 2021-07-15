import React from 'react';
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
                    <picture className="factfile-icons-mood">
                        <img className="factfile-icons-mood-image" src={mood} alt=""></img>
                    </picture>
                    <picture className="factfile-icons-watering">
                        <img className="factfile-icons-watering-image" src={water} alt=""></img>
                    </picture>
                    <picture className="factfile-icons-feeding">
                        <img className="factfile-icons-feeding-image" src={food} alt=""></img>
                    </picture>
                    <picture className="factfile-icons-pot">
                        <img className="factfile-icons-pot-image" src={pot} alt=""></img>
                    </picture>
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