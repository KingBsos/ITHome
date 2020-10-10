import React from 'react';

import styles from './index.module.css';

function Comment({ comment }) {
    return (
        <div className="d-f">
            <div className={styles['left']}>
                <img className={styles['poster']} src={comment.user ? comment.user.headSculpture : ''} alt="..." />
                <small>Lv.{comment.user ? comment.user.level : ''}</small>
            </div>
            <div className={styles['right']}>
                <div className={styles['top']}>
                    <div>
                        <p className="m0">{comment.user? comment.user.name : ''}</p>
                        <small>{comment.user? comment.user.location : ''} {new Date(comment.time).getFullYear()}</small>
                    </div>
                    <span>{comment.floorNumber}楼</span>
                </div>
                <p className={styles['body']+' m0'}>{comment.text}</p>
                <div className={styles["bottom"]+' MY1rem'}>
                    <button className="BTN">展开({comment.floorNumber})</button>
                    <div>
                        <button className="BTN">支持({comment.support})</button>
                        <button className="BTN">反对({comment.oppose})</button>
                        <button className="BTN">回复</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;