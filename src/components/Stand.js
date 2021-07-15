import React from 'react';
import { Plant } from './components.js'

class Stand extends React.Component{
    constructor(props){
        super(props);

        this.state={
            plants: 0
        }
    }

    componentDidMount(){
        if (this.props.plants == null){
            this.setState({plants: <Plant/>})
        } 
        else{
            this.setState({plants: this.props.plants})
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="stand-main">
                    {this.state.plants}  
                </div>
                <div className="stand-shelf">&nbsp;</div>
            </React.Fragment>
        )
    }
}

export default Stand