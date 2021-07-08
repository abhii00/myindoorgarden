import React from 'react';
import { Header, Stand, Plant, Factfile } from './components.js'

class MyIndoorGarden extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            factfileshown: false,
        }
    }

    renderFactfile(){
        this.setState({factfileshown: true})
    }

    unrenderFactfile(){
        this.setState({factfileshown: false})
    }

    render(){
        var plants = Array(5).fill(
            <Plant renderFactfile={this.renderFactfile.bind(this)} name="Kentia" pic="https://cdn.shopify.com/s/files/1/1706/1307/products/Howea-forsteriana-Kentia-Palm-Raw-Cody-Tall-Plant-Vase-Running-Rust_61b38fd3-218c-4669-9042-d4c6b040a36b_1600x.jpg?v=1617186033"/>
        )

        return(
            <div className="myindoorgarden">
                <Header/>
                <Stand plants={plants}/>
                <Stand plants={plants}/>
                <Stand plants={plants}/>
                {(this.state.factfileshown) ? <Factfile unrenderFactfile={this.unrenderFactfile.bind(this)} /> : ''}
            </div>
        )
    }
}

export default MyIndoorGarden