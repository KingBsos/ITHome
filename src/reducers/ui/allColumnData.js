import { NewestPageBind } from '../../components/childPage/NewestPage';
import React from 'react';

let initState = [
    {
        text: '关注', url: 'follow', route: {
            component: NewestPageBind
        }
    },
    {
        text: '最新', url: 'newest', route: {
            render(rp) {
                return (
                    <NewestPageBind {...rp} className="h-100 o-a"/>
                );
            }
        }
    },
    {
        text: '最新', url: 'newest2', route: {
            component: NewestPageBind
        }
    },
    {
        text: '最新', url: 'newest2', route: {
            component: NewestPageBind
        }
    },
    {
        text: '最新', url: 'newest2', route: {
            component: NewestPageBind
        }
    },
    {
        text: '最新', url: 'newest2', route: {
            component: NewestPageBind
        }
    },
    {
        text: '最新', url: 'newest2', route: {
            component: NewestPageBind
        }
    }
];
function allColumnData(state = initState, action) {
    switch (action.type) {
        default: return state;
    }
}

export default allColumnData;