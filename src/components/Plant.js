import React from 'react';

class Plant extends React.Component{
    render(){
        if (this.props.plant != null){
            return(
                <div className='plant' onClick={this.props.renderFactfile} href='/#' plant={JSON.stringify(this.props.plant)} index={JSON.stringify(this.props.index)} icondata={JSON.stringify(this.props.icondata)}>
                    <div className='plant-nickname'>{this.props.plant.individual.nickname}</div>
                    <div className='plant-species'>{this.props.plant.species.species}</div>
                    
                    <picture className='plant-pic'>
                        <img className='plant-pic-image' src={this.props.plant.individual.url} alt=''/>
                    </picture>
                </div>
            )
        }
        else{
            return(
                <div className='plant'>
                     <div className='plant-blank'>&nbsp;</div>
                </div>
            )
        }
    }
}

export default Plant