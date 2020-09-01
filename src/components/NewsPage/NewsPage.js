import React, { useCallback } from 'react';
import { NavLink, Redirect, Switch, Route } from 'react-router-dom';
import cn from './index.module.css';
import HeadNav from '../HeadNav';
import Navbar from '../Navbar';

let navbarClass = `${cn['navbar']} ${cn['deep']}`;
let itemClass = cn['item'];

function NewsPage({ className, match, data }) {
    className = `${className} ${cn['container']}`;
    const render = useCallback(function ({ url, text }) {
        return (
            <NavLink draggable="false" to={`${match.url}/${url}`} activeClassName={cn['active']}>
                {text}
            </NavLink>
        );
    }, [match.url]);
    return (
        <div {...{ className }}>
            <div className={cn['wrap']}>
                <HeadNav />
                <div className="po-relative">
                    <Navbar className={navbarClass} {...{ itemClass, data, render }} />
                    <span className={`iconfont icon-zhankai ${cn['custom-menu']} ${cn['deep']}`}></span>
                </div>
            </div>
            <div className="h-100">
                <Switch>
                    {
                        data.map((item, index) => {
                            return (
                                <Route key={index} path={`${match.path}/${item.url}`} {...item.route} />
                            );
                        })
                    }
                    <Redirect to={`${match.url}/newest`} />
                </Switch>
            </div>
        </div>
    );
}

export default NewsPage;