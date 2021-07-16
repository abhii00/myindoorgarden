import React from 'react';

class Plant extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            plant: null,
            blank: false
        }
    }

    componentDidMount(){
        if (this.props.plant == null){
            this.setState({blank: true})
        } 
        else{
            this.setState({plant: this.props.plant})
        }
    }

    render(){
        if (!this.state.blank && this.state.plant != null){
            return(
                <div className="plant" onClick={this.props.renderFactfile} href="/#" plant={JSON.stringify(this.state.plant)}>
                    <div className="plant-nickname">{this.state.plant.individual.nickname}</div>
                    <div className="plant-species">{this.state.plant.species.species}</div>
                    
                    <picture className="plant-pic">
                        <img className="plant-pic-image" src={this.state.plant.individual.url} alt=""/>
                    </picture>
                </div>
            )
        }
        else{
            return(
                <div className="plant">
                     <div className="plant-blank">&nbsp;</div>
                </div>
            )
        }
    }
}

export default Plant