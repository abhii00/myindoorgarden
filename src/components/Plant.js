import React from 'react';

class Plant extends React.Component{
    render(){
        return(
            <a className="plant" onClick={this.props.renderFactfile} href="/#">
                <p>{this.props.name}</p>
                <picture>
                    <img className="plantPic" src={this.props.pic} alt=""></img>
                </picture>
            </a>
        )
    }
}

export default Plant