import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from './index.module.css';
import {FooterNavbarBind} from '../FooterNavbar';

function MainPage({ state, match }) {
    return (
        <div className={cn['container']}>
            <div className={cn['content-body']}>
                <Switch>
                    {
                        state.ui.footerNavbarData.map((item, index) => {
                            return (
                                <Route key="index" path={`${match.path}${item.url}`} {...item.route} />
                            );
                        })
                    }
                    <Redirect to="/news" />
                </Switch>
            </div>
            <div className={cn['footer-navbar']}>
                <FooterNavbarBind />
            </div>
        </div>
    );
}

export default connect(state => ({state}))(withRouter(MainPage));