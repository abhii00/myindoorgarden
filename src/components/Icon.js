import React from 'react'

class Icon extends React.Component{
    render(){
        return(
            <div className="icon">
                <img style={{backgroundColor: this.props.color}} className="icon-image" src={this.props.image} alt=""/>
                <div className="icon-data">1</div>
            </div>
        )
    }
}

export default Icon