import React from 'react';
import water from '../assets/water.svg';
import food from '../assets/food.svg';
import mood from '../assets/mood.svg';
import pot from '../assets/pot.svg';

class Icon extends React.Component{
    render(){
        var color;
        var image;
        switch(this.props.type){
            case 'mood':
                color = 'moccasin';
                image = mood;
                break;
            case 'water':
                color = 'lightblue';
                image = water;
                break;
            case 'food':
                color = 'lightgreen';
                image = food;
                break;
            case 'pot':
                color = 'pink';
                image = pot;
                break;
            default:
                break;
        }

        var font_size;
        var top;
        if (this.props.data < 10){
            font_size = '2vw'
            top = '10%'
        }
        else if (this.props.data > 10 && this.props.data < 100){
            font_size = '1.5vw';
            top = '25%'
        }
        else if (this.props.data > 100){
            font_size = '1vw';
            top = '40%'
        }

        return(
            <div title={this.props.hover} onClick={this.props.click} type={this.props.type} className='icon'>
                <img style={{backgroundColor: color}} className='icon-image' src={image} alt=''/>
                <div style={{fontSize: font_size, top: top}} className='icon-data'>{this.props.data}</div>
            </div>
        )
    }
}

export default Icon