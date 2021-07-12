import React from 'react';

class Plant extends React.Component{
    render(){
        return(
            <a className="plant" onClick={this.props.renderFactfile} href="/#">
                <p>{this.props.type}</p>
                <picture>
                    <img className="plantPic" src={this.props.url} alt=""></img>
                </picture>
            </a>
        )
    }
}

export default Plant