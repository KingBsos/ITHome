import React from 'react';
import { NewsPageBind } from '../../components/NewsPage';
import SpicyPage from '../../components/SpicyPage';
import CirclePage from '../../components/CirclePage';
import FindPage from '../../components/FindPage';
import MyPage from '../../components/MyPage';

let initState = [
    {
        text: '资讯',
        iconClass: 'icon-zixun',
        url: 'news',
        route: {
            render(routeProps) {
                return <NewsPageBind className="h-100" {...routeProps} />
            }
        }
    },
    {
        text: '辣品',
        iconClass: 'icon-lajiaochilis',
        url: 'spicy',
        route: {
            component: SpicyPage
        }
    },
    {
        text: '圈子',
        iconClass: 'icon-daohanglan-02',
        url: 'circle',
        route: {
            component: CirclePage
        }
    },
    {
        text: '发现',
        iconClass: 'icon-discover',
        url: 'find',
        route: {
            component: FindPage
        }
    },
    {
        text: '我',
        iconClass: 'icon-wodedangxuan',
        url: 'my',
        route: {
            component: MyPage
        }
    }
];
function footerNavbarData(state = initState, action) {
    switch (action.type) {
        default: return state;
    }
}

export default footerNavbarData;