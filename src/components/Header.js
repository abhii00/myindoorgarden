import React from 'react';
import { Icon } from './components.js'

class Header extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            icondata: null
        }
    }

    componentDidMount(){
        this.setState({icondata: this.props.icondata})
    }

    render(){
        if (this.state.icondata != null){
            return(
                <div className="header">
                    <div className="header-titlebar">
                        <div className="header-titlebar-title">
                            <span className="header-titlebar-title-firstletter">M</span>y&nbsp;  
                            <span className="header-titlebar-title-firstletter">I</span>ndoor&nbsp; 
                            <span className="header-titlebar-title-firstletter">G</span>arden&nbsp;
                        </div>
                        <div className="header-titlebar-icons">
                            <Icon hover={this.state.icondata[0].join(", ")} type="mood" data={this.state.icondata[0].length}/>
                            <Icon hover={this.state.icondata[0].join(", ")} type="water" data={this.state.icondata[0].length}/>
                            <Icon hover={this.state.icondata[1].join(", ")} type="food" data={this.state.icondata[1].length}/>
                            <Icon hover={this.state.icondata[1].join(",")} type="pot" data={this.state.icondata[1].length}/>
                        </div>
                    </div>
                    <div className="header-headingline">
                        &nbsp;
                    </div>   
                </div>
            )
        }
        else{
            return(
                <div className="header"></div>
            )
        }
    }
}

export default Header