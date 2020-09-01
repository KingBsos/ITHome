import React from 'react';
import PropTypes from 'prop-types';
import cn from './index.module.css';

class Navbar extends React.Component {
    render() {
        let {data, render, className, itemClass} = this.props;
        let inner = data.map((item, index) => {
            return (
                <li key={index} className={itemClass}>
                    {
                        render(item)
                    }
                </li>
            );
        });
        return (
            <ul className={ `${cn.navbar} ${className}` }>
                {
                    inner
                }
            </ul>
        );
    }
}
Navbar.propTypes = {
    data: PropTypes.array,
    render: PropTypes.func,
    itemClass: PropTypes.string
}
Navbar.defaultProps = {
    data: [],
    render({url, text}) {
        return (
            <a href={url}>{text}</a>
        );
    }
}

export default Navbar;