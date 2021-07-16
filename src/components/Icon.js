import React from 'react'
import water from '../assets/water.svg'
import food from '../assets/food.svg'
import mood from '../assets/mood.svg'
import pot from '../assets/pot.svg'

class Icon extends React.Component{
    constructor(props){
        super(props);

        this.state={
            type: null,
            color: null,
            image: null,
            font_size: 0,
            top: 0
        }
    }

    componentDidMount(){
        var color;
        var image;
        switch(this.props.type){
            case "mood":
                color = "moccasin";
                image = mood;
                break;
            case "water":
                color = "lightblue";
                image = water;
                break;
            case "food":
                color = "lightgreen";
                image = food;
                break;
            case "pot":
                color = "pink";
                image = pot;
                break;
            default:
                break;
        }

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

        this.setState({
            type: this.props.type,
            color: color,
            image: image,
            font_size: font_size,
            top: top
        })
    }

    render(){
        if (this.state.type != null){
            return(
                <div title={this.props.hover} className="icon">
                    <img style={{backgroundColor: this.state.color}} className="icon-image" src={this.state.image} alt=""/>
                    <div style={{fontSize: this.state.font_size, top: this.state.top}} className="icon-data">{this.props.data}</div>
                </div>
            )
        }
        else {
            return(
                <div className="icon"></div>
            )
        }
    }
}

export default Icon