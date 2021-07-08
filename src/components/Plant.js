import React from 'react';

class Plant extends React.Component{
    render(){
        return(
            <div className="plant">
                <picture>
                    <img className="plantPic" src={this.props.pic} alt=""></img>
                </picture>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Plant