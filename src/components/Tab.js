import React from 'react';

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

export default Tab;