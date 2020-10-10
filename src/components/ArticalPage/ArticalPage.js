import React, { useState } from 'react';

import {
  Link,
  Route,
} from 'react-router-dom';

import Comment from '../Comment';
import CommentEditor from '../CommentEditor';
import cn from './index.module.css';

function sorter(a, b) {
    return b.time - a.time;
}
function sorterReverse(a, b) {
    return a.time - b.time;
}
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
function ArticalPage({ artical, history, fetchArticalDetailData, match, addComment, myId }) {
    let [sortDerection, setSortDerection] = useState(false);
    let [comment, setComment] = useState('');
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
                    <h2 className={cn['menu-title']}>相关文章</h2>
                    {
                        artical.relatedArticle ? artical.relatedArticle.map(item => {
                            return (
                                <div className="d-f" key={item.id}>
                                    <div className={cn['relative-artical-left']}>
                                        <h3>{item.title}</h3>
                                        <small>{new Date(item.time).getFullYear() + '.' + new Date(item.time).getMonth() + '.' + new Date(item.time).getDay()}</small>
                                    </div>
                                    <div className={cn['relative-artical-right'] + ' VA-M'}>
                                        <img className={cn['relative-artical-poster']} src={item.poster} alt="..." />
                                    </div>
                                </div>
                            );
                        }) : ''
                    }
                </div>
                <div className={`MY_5rem`}>
                    <h2 className={cn['menu-title']}>热门评论</h2>
                    <div>
                        {
                            artical.comments.length > 0 ? artical.comments.sort((a, b) => b.support - a.support).slice(0, 3).map(item => (
                                <Comment key={item.id} comment={item}></Comment>
                            )) : ''
                        }
                    </div>
                </div>
                <div>
                    <div className="d-f jc-sb MY_5rem">
                        <h2 className={cn['menu-title']}>最新评论</h2>
                        <button className="BTN" onClick={() => setSortDerection(bool => !bool)}>
                            <span className={`iconfont icon-sort_icon m_5rem`}></span>倒序</button>
                    </div>
                    <div>
                        {
                            artical.comments ? artical.comments.sort(sortDerection ? sorter : sorterReverse).map(item => (
                                <Comment key={item.id} comment={item}></Comment>
                            )) : ''
                        }
                    </div>
                </div>
            </div>
            <Route path={`${match.path}/commentedit`}>
                {
                    ({ match: match2 }) => {
                        if (match2) {
                            return (
                                <CommentEditor comment={comment} onChange={setComment} onSubmit={() => addComment(artical.id, comment, myId)}/>
                            );
                        } else {
                            return (
                                <div className={cn['footer-comment-panel']}>
                                    <div className="d-f ai-c">
                                        <div className={`f1 ta-c`}>
                                            <Link to={`${match.url}/commentedit`}>
                                                <span className={`${cn['custom-input-icon']} iconfont icon-comment`}></span>写评论
                                            </Link>
                                        </div>
                                        <button className={"BTN VA-M m_5rem " + cn['active']}>
                                            <span className={cn['custom-icon'] + " iconfont icon-xinxi"}></span>
                                            <span className="fs1_5rem"> {artical.comments ? artical.comments.length : ''}</span>
                                        </button>
                                        <button className="BTN m_5rem">
                                            <span className={cn['custom-icon'] + " iconfont icon-xingxing"}></span>
                                        </button>
                                        <button className="BTN m_5rem">
                                            <span className={cn['custom-icon'] + ' ' + cn['active'] + " iconfont icon-fenxiang"}></span>
                                        </button>
                                        <button className="BTN m_5rem">
                                            <span className={cn['custom-icon'] + " iconfont icon-caidan"}></span>
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    }
                }
            </Route>
        </div>
    );
}

export default ArticalPage;