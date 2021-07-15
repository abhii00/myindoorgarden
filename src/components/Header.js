import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="header-title">
                    <span className="header-title-firstletter">M</span>y&nbsp;  
                    <span className="header-title-firstletter">I</span>ndoor&nbsp; 
                    <span className="header-title-firstletter">G</span>arden&nbsp;
                </div>
                <div className="header-headingline">
                    &nbsp;
                </div>   
            </div>
        )
    }
}

export default Header