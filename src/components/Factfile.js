import React from 'react';

class Factfile extends React.Component{
    render(){
        return(
            <div className="factfile">
                &nbsp;
                <a className="cross" onClick={this.props.unrenderFactfile} href="/#"> X </a>
            </div>
        )
    }
}

export default Factfile