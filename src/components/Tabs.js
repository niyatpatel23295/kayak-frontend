import React, {Component} from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <nav>
                <ul>
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === tab.id)}
                            />
                        );
                    }.bind(this))}
                </ul>
            </nav>
        );
    }
});

export default Tabs;