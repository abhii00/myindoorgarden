import React from 'react';

class Stand extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="stand-main">
                    {this.props.plants}  
                </div>
                <div className="stand-shelf">&nbsp;</div>
            </React.Fragment>
        )
    }
}

export default Stand