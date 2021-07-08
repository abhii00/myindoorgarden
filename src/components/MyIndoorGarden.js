import React from 'react';
import { Header, Stand, Plant, Factfile } from './components.js'

class MyIndoorGarden extends React.Component{
    render(){
        var plants = Array(8).fill(
            <Plant name="Kentia" pic="https://cdn.shopify.com/s/files/1/1706/1307/products/Howea-forsteriana-Kentia-Palm-Raw-Cody-Tall-Plant-Vase-Running-Rust_61b38fd3-218c-4669-9042-d4c6b040a36b_1600x.jpg?v=1617186033"/>
        )

        return(
            <div>
                <Header/>
                <Stand plants={plants}/>
                <Stand plants={plants}/>
                <Stand plants={plants}/>
                <Factfile/>
            </div>
        )
    }
}

export default MyIndoorGarden