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
                <p>{this.state.plant.nickname}</p>
                <picture>
                    <img className="plant-plantPic" src={this.state.plant.url} alt=""></img>
                </picture>
            </a>
        )
    }
}

export default Plant