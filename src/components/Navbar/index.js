import React from 'react';
import style from './index.module.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className={ style.navbar }>
                { this.props.children }
            </ul>
        );
    }
}

export default Navbar;