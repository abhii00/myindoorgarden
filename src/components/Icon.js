import React from 'react'

class Icon extends React.Component{
    render(){
        return(
            <picture>
                <img style={{backgroundColor: this.props.color}} className="icon" src={this.props.image} alt=""></img>
            </picture>
        )
    }
}

export default Icon