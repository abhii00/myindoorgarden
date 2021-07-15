import React from 'react';
import water_icon from '../assets/water.png'
import food_icon from '../assets/food.png'

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
                <p className="factfile-nickname">{this.state.plant.nickname}</p>
                <p className="factfile-species">{this.state.plant.species}</p>

                <picture className="factfile-pic">
                    <img className="factfile-pic-image" src={this.state.plant.url} alt=""></img>
                </picture>

                <div className="factfile-icons">
                    <picture>
                        <img className="factfile-icons-watering" src={water_icon} alt=""></img>
                    </picture>
                    <picture>
                        <img className="factfile-icons-feeding" src={food_icon} alt=""></img>
                    </picture>
                </div>
                
                <a className="factfile-cross" onClick={this.props.unrenderFactfile} href="/#">X</a>
            </div>
        )
    }
}

export default Factfile