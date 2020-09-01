import React from 'react';
import cn from './index.module.css';

function ArticalItem({className, artical: {poster, title, time, comments}}) {
    let containerClass = `${className} ${cn['container']}`;
    return (
        <div className={containerClass}>
            <div className="flex-1 pT_5rem">
                <p className={cn['title']}>{ title }</p>
                <div className={cn['footer']+' mT_5rem'}>
                    <span className={cn['custom-span']}>{ time }</span>
                    <span className={cn['custom-span']}>{ comments.length } 评</span>
                </div>
            </div>
            <img className="mL1rem" src={poster} alt={ title }/>
        </div>
    );
}

export default ArticalItem;