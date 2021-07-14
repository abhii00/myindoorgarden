import React from 'react';

class Plant extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            plant: 0
        }
    }

    componentDidMount(){
        this.setState({plant: this.props.plant})
    }

    render(){
        return(
            <a className="plant-main" onClick={this.props.renderFactfile} href="/#" plant={JSON.stringify(this.state.plant)}>
                <p className="plant-nickname">{this.state.plant.nickname}</p>
                <p className="plant-species">{this.state.plant.species}</p>
                
                <picture className="plant-pic">
                    <img className="plant-pic-image" src={this.state.plant.url} alt=""></img>
                </picture>
            </a>
        )
    }
}

export default Plant