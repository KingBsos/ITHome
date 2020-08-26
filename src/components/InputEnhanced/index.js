import React from 'react';
import className from './index.module.css';

class InputEnhanced extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let initClassName = className.container + '' + this.props.className;
        return (
            <div className={ initClassName }>
                <input className={ className.input } type={ this.props.type }/>
                { this.props.children }
            </div>
        );
    }
}