import React from 'react';

import styles from './index.module.css';

function MyPage() {
    return (
        <div className={`${styles['container']}`}>
            <div className={`${styles['panel-item']}`}>
                <div className={`ta-c pt2rem pb_5rem`}>
                    <a className={`${styles['custom-login-button']}`}>登录/注册</a>
                </div>
                <div className={`d-f ta-c p1rem`}>
                    <span className={`iconfont fs1_5rem f1 icon-weixin`}></span>
                    <span className={`iconfont fs1_5rem f1 icon-QQ`}></span>
                    <span className={`iconfont fs1_5rem f1 icon-weibo-copy`}></span>
                    <span className={`iconfont fs1_5rem f1 icon-taobao`}></span>
                </div>
                <div className={`d-f ta-c PY1rem`}>
                    <div className={`f1`}>
                        <span className={`iconfont fs1_5rem d-b icon-pinglun`}></span>
                        <span className={`${styles['title-item']}`}>评论</span>
                    </div>
                    <div className={`f1`}>
                        <span className={`iconfont fs1_5rem d-b icon-yunyingguanli_tieziguanli`}></span>
                        <span className={`${styles['title-item']}`}>帖子</span>
                    </div>
                    <div className={`f1`}>
                        <span className={`iconfont fs1_5rem d-b icon-xingxing`}></span>
                        <span className={`${styles['title-item']}`}>收藏</span>
                    </div>
                    <div className={`f1`}>
                        <span className={`iconfont fs1_5rem d-b icon-zuji`}></span>
                        <span className={`${styles['title-item']}`}>足迹</span>
                    </div>
                </div>
            </div>
            <div className={`${styles['panel-item']}`}>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-shangcheng mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>金币商城</span>
                    </div>
                </div>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-renwu mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>金币任务</span>
                    </div>
                </div>
            </div>
            <div className={`${styles['panel-item']}`}>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-guanzhu mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>我的关注</span>
                    </div>
                </div>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-xiaoxi mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>我的消息</span>
                    </div>
                </div>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-zichan mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>我的资产</span>
                    </div>
                </div>
            </div>
            <div className={`${styles['panel-item']}`}>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-shezhi mr2rem`}></span>
                    <div className={`d-f js-sb`}>
                        <span className={`${styles['title-item']}`}>设置</span>
                        <span></span>
                    </div>
                </div>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-bangzhu-yin mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>帮助与反馈</span>
                    </div>
                </div>
                <div className={`${styles['panel-item-item']}`}>
                    <span className={`iconfont fs1_5rem icon-guanyuwomen mr2rem`}></span>
                    <div>
                        <span className={`${styles['title-item']}`}>关于</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;