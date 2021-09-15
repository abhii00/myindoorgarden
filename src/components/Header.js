import React from 'react';
import { Icon } from './components.js';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="header-titlebar">
                    <div className="header-titlebar-title">
                        <span className="header-titlebar-title-firstletter">M</span>y&nbsp;  
                        <span className="header-titlebar-title-firstletter">I</span>ndoor&nbsp; 
                        <span className="header-titlebar-title-firstletter">G</span>arden&nbsp;
                    </div>
                    <div className="header-titlebar-icons">
                        <Icon hover={this.props.icondata[0].join(", ")} type="mood" data={this.props.icondata[0].length}/>
                        <Icon hover={this.props.icondata[0].join(", ")} type="water" data={this.props.icondata[0].length}/>
                        <Icon hover={this.props.icondata[1].join(", ")} type="food" data={this.props.icondata[1].length}/>
                        <Icon hover={this.props.icondata[1].join(",")} type="pot" data={this.props.icondata[1].length}/>
                    </div>
                </div>
                <div className="header-headingline">
                    &nbsp;
                </div>   
            </div>
        )
    }
}

export default Header