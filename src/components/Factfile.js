import React from 'react';
import water from '../assets/water.svg'
import food from '../assets/food.svg'

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
                    <picture className="factfile-icons-watering">
                        <img src={water} alt=""></img>
                    </picture>
                    <picture className="factfile-icons-feeding">
                        <img src={food} alt=""></img>
                    </picture>
                </div>
                
                <a className="factfile-cross" onClick={this.props.unrenderFactfile} href="/#">X</a>
            </div>
        )
    }
}

export default Factfile