import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';
import cn from './index.module.css';
import { withRouter } from 'react-router';

function FooterNavbar({ className, match, data }) {
    
    let render = useCallback(({ url, text, iconClass }) => {
        return (
            <NavLink className={cn['link']} activeClassName={cn['active']} to={`${match.url}${url}`}>
                <span className={'iconfont '+iconClass+' '+cn['custom-icon']}></span><br />
                {text}
            </NavLink>
        );
    }, [match]);
    return (
        <div {...{ className }}>
            <Navbar className="d-f flex-1_" itemClass="tA-c" {...{ data, render }} />
        </div>
    );
}

export default withRouter(FooterNavbar);