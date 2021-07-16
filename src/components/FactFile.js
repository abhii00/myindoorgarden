import React from 'react';
import { Icon } from './components.js'

class FactFile extends React.Component{
    render(){
        return(
            <div className="factfile">
                <div className="factfile-nickname">{this.props.plant.individual.nickname}</div>
                <div className="factfile-species">{this.props.plant.species.species}</div>

                <div className="factfile-icons">
                    <Icon type="mood" data={this.props.icondata[0]}/>
                    <Icon hover={"Watered?"} click={this.props.iconClick} type="water" data={this.props.icondata[0]}/>
                    <Icon hover={"Fed?"} click={this.props.iconClick} type="food" data={this.props.icondata[1]}/>
                    <Icon hover={"Repotted?"} click={this.props.iconClick} type="pot" data={this.props.icondata[1]}/>
                </div>

                <picture className="factfile-pic">
                    <img className="factfile-pic-image" src={this.props.plant.individual.url} alt=""/>
                </picture>

                <div className="factfile-cross" onClick={this.props.unrenderFactfile} href="/#">X</div>
            </div>
        )
    }
}

export default FactFile