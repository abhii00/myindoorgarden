import React from 'react'

class Icon extends React.Component{
    render(){
        var font_size;
        var top;
        if (this.props.data < 10){
            font_size = "2vw"
            top = "10%"
        }
        else if (this.props.data > 10 && this.props.data < 100){
            font_size = "1.5vw";
            top = "25%"
        }
        else if (this.props.data > 100){
            font_size = "1vw";
            top = "40%"
        }
        return(
            <div className="icon">
                <img style={{backgroundColor: this.props.color}} className="icon-image" src={this.props.image} alt=""/>
                <div style={{fontSize: font_size, top: top}} className="icon-data">{this.props.data}</div>
            </div>
        )
    }
}

export default Icon