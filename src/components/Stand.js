import React from 'react';

class Stand extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="stand">
                    {this.props.plants}  
                </div>
                <div className="shelf">&nbsp;</div>
            </React.Fragment>
            
        )
    }
}

export default Stand