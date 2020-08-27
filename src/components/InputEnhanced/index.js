import React from 'react';
import CN from './index.module.css';

class InputEnhanced extends React.Component {
    render() {
        let { props: { className, type, value, onChange, children } } = this;
        let initClassName = CN['container'] + '' + className;
        return (
            <div className={CN['container']}>
                <input className={CN['input']} type={type} value={value} onChange={onChange} />
                <div className={CN['enhance-panel']}>
                    {children}
                </div>
            </div>
        );
    }
}

InputEnhanced.defaultProps = {
    type: 'text',
    className: ''
}

export default InputEnhanced;