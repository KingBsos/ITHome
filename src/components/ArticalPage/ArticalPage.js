import React from 'react';

import Comment from '../Comment';
import cn from './index.module.css';

function timeFormat(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    function _(num) {
        if (num < 10) return '0' + num;
        else return num;
    }
    return `${year}-${_(month)}-${_(day)} ${_(hours)}:${_(minutes)}`;
}
function ArticalPage({ artical, history, fetchArticalDetailData }) {
    if (!artical.body) {
        fetchArticalDetailData(artical.id);
        return null;
    }
    return (
        <div className={cn['container']}>
            <div className={cn['header']}>
                <button className="BTN" onClick={() => history.goBack()}>
                    <span className="iconfont icon-zuojiantou"></span>
                </button>
            </div>
            <h2 className={cn['title']}>
                {artical.title}
            </h2>
            <div className="PX1rem">
                <small className={cn['author']}>{timeFormat(artical.time)} {artical.author.name}</small>
                <div>{artical.body}</div>
                <div className="d-f jc-sb ai-c fs_6rem PY_5rem">
                    <div className="cv1">责任编辑: {artical.editorInCharge ? artical.editorInCharge.name : ''}</div>
                    <button className={cn['button-sm']}>我要纠错</button>
                </div>
                <div className="ta-c p1rem">
                    <p className="fs_6rem cv1">打分后显示文章质量得分，当前{}人打分</p>
                    <button className={`${cn['button-bg']}`}>有价值</button>
                    <button className={`${cn['button-bg']}`}>无价值</button>
                </div>
                <div>
                    <h2 class={cn['menu-title']}>相关文章</h2>
                    {
                        artical.relatedArticle ? artical.relatedArticle.map(item => {
                            return (
                                <div className="d-f" key={item.id}>
                                    <div className={cn['relative-artical-left']}>
                                        <h3>{item.title}</h3>
                                        <small>{new Date(item.time).getFullYear() + '.' + new Date(item.time).getMonth() + '.' + new Date(item.time).getDay()}</small>
                                    </div>
                                    <div className={cn['relative-artical-right'] + ' VA-M'}>
                                        <img className={cn['relative-artical-poster']} src={item.poster} />
                                    </div>
                                </div>
                            );
                        }) : ''
                    }
                </div>
                <div>
                    <h2 class={cn['menu-title']}>热门评论</h2>
                    <div>
                        {
                            artical.comments ? artical.comments.sort((a, b) => b.support - a.support).slice(0, 3).map(item => (
                                <Comment key="item.id" comment={item}></Comment>
                            )) : ''
                        }
                    </div>
                </div>
                <div>
                    <h2 class={cn['menu-title']}>最新评论</h2>
                    <div>
                        {
                            artical.comments ? artical.comments.sort((a, b) => b.time-a.time).map(item => (
                                <Comment key="item.id" comment={item}></Comment>
                            )) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticalPage;