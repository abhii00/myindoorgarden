import React from 'react';

class Stand extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="stand">
                    {this.props.plants}  
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