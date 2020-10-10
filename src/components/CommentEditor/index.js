import React, {
  createRef,
  useCallback,
  useEffect,
} from 'react';

import { useHistory } from 'react-router-dom';

import styles from './index.module.css';

let container = createRef();
function CommentEditor({ comment, onChange, onSubmit }) {
    let history = useHistory();
    let clickHandle = useCallback((event) => {
        if (!container.current.contains(event.target)) {
            history.goBack();
        }
    },[history]);
    let success = useCallback(() => {
        history.goBack();
    },[history]);
    useEffect(() => {
        window.addEventListener('click', clickHandle);
        return () => {
            window.removeEventListener('click', clickHandle);
        }
    }, [clickHandle]);
    return (
        <div className={styles['footer-comment-panel2']}>
            <div ref={container} className={`${styles['panel2']}`}>
                <textarea rows="5" className={styles['custom-textarea']} placeholder="发表政治、色情、喷码、引战、机型喷、水军、广告等违法违规内容将被封号"
                    value={comment} onChange={(e) => onChange(e.target.value)}></textarea>
                <div>
                    <a className={`pr1rem`} href="jkdsfj">账号管理规范</a>
                    <a href="kfdj">小黑屋</a>
                </div>
                <div className={`d-f ai-c ta-c`}>
                    <span className={`${styles['name']}`}>KingBsos</span>
                    <span className={`iconfont icon-biaoqing fs1_5rem MX2rem`}></span>
                    <button className={`BTN ${styles['custom-submit-button']}`} onClick={() => onSubmit().then(() => success()).catch(() => {})}>发布</button>
                </div>
            </div>
        </div>
    );
}

export default CommentEditor;