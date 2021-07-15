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
                <div className="stand">
                    {this.state.plants}  
                </div>
                <div className="stand-shelf">&nbsp;</div>
                <div className="stand-brackets">
                    <div className="stand-brackets-end">&nbsp;</div>
                    <div className="stand-brackets-middle">&nbsp;</div>
                    <div className="stand-brackets-middle">&nbsp;</div>
                    <div className="stand-brackets-end">&nbsp;</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Stand