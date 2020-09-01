import React from 'react';
import cn from './index.module.css';

function formatDate(time) {
    let date = new Date(time);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;
    return `${hour}:${minutes}`;
}
function ArticalItem({ className, artical: { poster, title, time, comments } }) {
    let containerClass = `${className} ${cn['container']}`;
    return (
        <div className={containerClass}>
            <div className="flex-1">
                <p className={cn['title']}>{title}</p>
                <div className={cn['footer'] + ' mT_25rem'}>
                    <span className={cn['custom-span']}>{formatDate(time)}</span>
                    <span className={cn['custom-span']}>{comments.length} 评</span>
                </div>
            </div>
            <div className="vA-m_">
                <img className={cn['poster']} src={poster} alt={title} />
            </div>
        </div>
    );
}

export default ArticalItem;