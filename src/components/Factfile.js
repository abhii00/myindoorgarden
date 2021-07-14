import React from 'react';

class Factfile extends React.Component{
    render(){
        return(
            <div className="factfile">
                <p>Nickname: {}</p>
                <p>Species: {}</p>
                <p>Date of Birth: {}</p>

                <p>When I was Last...</p>

                <p>Watered: {}</p>
                <p>Fed: {}</p>
                &nbsp;
                <a className="cross" onClick={this.props.unrenderFactfile} href="/#"> X </a>
            </div>
        )
    }
}

export default Factfile