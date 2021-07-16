import React from 'react';
import { Icon } from './components.js'


class Factfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            plant: null
        }
    }

    componentDidMount(){
        this.setState({
            plant: JSON.parse(this.props.plant),
            icondata: JSON.parse(this.props.icondata)
        })
    }

    render(){
        if (this.state.plant != null){
            return(
                <div className="factfile">
                    <div className="factfile-nickname">{this.state.plant.individual.nickname}</div>
                    <div className="factfile-species">{this.state.plant.species.species}</div>

                    <div className="factfile-icons">
                        <Icon type="water" data={this.state.icondata[0]}/>
                        <Icon type="food" data={this.state.icondata[1]}/>
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