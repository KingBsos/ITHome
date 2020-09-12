import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from './index.module.css';

class Navbar extends React.Component {
    render() {
        let { data, render, className, style, itemClass, customRef, ...rest } = this.props;
        let containerClass = `${className} ${cn['navbar']}`;
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
            <ul ref={customRef} className={containerClass} {...rest} style={style}>
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
    itemClass: PropTypes.string,
}
Navbar.defaultProps = {
    data: [],
    render({ url, text }) {
        return (
            <a href={url}>{text}</a>
        );
    }
}

export default forwardRef((props, ref) => {
    return (
        <Navbar {...props} customRef={ref} />
    );
});