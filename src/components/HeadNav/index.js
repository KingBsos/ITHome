import React, { useState, useCallback } from 'react';
import logoPicUrl from '../../assets/pic/logo.png';
import InputEnhanced from '../InputEnhanced';
import cn from './index.module.css';

function HeadNav({ className }) {
    className = `${className} d-f jC-sB aI-c`;
    let [value, setValue] = useState('');
    const onChange = useCallback(function (event) {
        setValue(event.target.value);
    }, []);
    return (
        <div {...{className}}>
            <img className={cn['logo']} src={ logoPicUrl } alt="kingbsos"/>
            <InputEnhanced {...{value, onChange}} className={cn['input']}>
                <span className="pL1rem fS_75rem iconfont icon-sousuo"></span>
            </InputEnhanced>
            <button className="btn">
                <span className="iconfont icon-jiahao p1rem fS1_5rem"></span>
            </button>
        </div>
    );
}

export default HeadNav;