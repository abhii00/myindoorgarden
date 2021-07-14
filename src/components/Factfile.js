import React from 'react';

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
            <div className="factfile">
                <p>Nickname: {this.state.plant.nickname}</p>
                <p>Species: {this.state.plant.species}</p>

                <p>When I was Last...</p>

                <p>Watered: {}</p>
                <p>Fed: {}</p>
                &nbsp;
                <a className="cross" onClick={this.props.unrenderFactfile} href="/#"> X </a>
            </div>
        )
    }
}

export default Factfile