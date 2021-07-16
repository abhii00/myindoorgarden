import React from 'react';
import { Plant } from './components.js'

class Stand extends React.Component{
    render(){
        var plants = [];
        if (this.props.plants == null){
            plants = <Plant/>
        } 
        else{
            plants = this.props.plants
        }

        return(
            <React.Fragment>
                <div className="stand">
                    {plants}  
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