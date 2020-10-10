import Mock from 'mockjs';
import { combineReducers } from 'redux';

import {
  ADD_ARTICAL,
  ADD_COMMENT,
  ADD_USER,
  UNIFYUPDATE,
} from '../constants';

const initState = {
    byId: {},
    allIds: []
}
function unifyUpdate(state, { payload, cover }, key) {
    if (!payload[key]) return state;
    let byId = null;
    if (cover) {
        byId = { ...state.byId, ...payload[key] };

    } else {
        byId = { ...state.byId };
        for (let k in payload[key]) {
            if (byId[k]) byId[k] = { ...byId[k], ...payload[key][k] }
            else byId[k] = payload[key][k];
        }
    }
    return {
        byId,
        allIds: Object.keys(byId)
    }
}
function updateNormalizedData(oldData, newData, keyName) {
    let mergeData = {
        ...oldData.byId, ...newData[keyName]
    };
    function _computeAllId(arr, arr2) {
        let newArr = [...arr];
        for (let i of arr2) {
            if (!arr.includes(i)) newArr.push(i);
        }
        return newArr.sort((a, b) => {
            return mergeData[b].time - mergeData[a].time;
        });
    }
    return {
        byId: mergeData,
        allIds: _computeAllId(oldData.allIds, Object.keys(newData[keyName]))
    }
}
let custom = {
    byId: {
        'kingbsos-0': {
            id: 'kingbsos-0',
            name: 'KingBsos',
            headSculpture: Mock.Random.dataImage('50x50'),
            level: 'max',
            local: '**********'
        }
    },
    allIds: ['kingbsos-0']
};
function users(state = custom, action) {
    switch (action.type) {
        case ADD_USER: {
            return updateNormalizedData(state, action, 'user');
        }
        case UNIFYUPDATE: {
            return unifyUpdate(state, action, 'users');
        }
        default: return state;
    }
}
function comments(state = initState, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            return updateNormalizedData(state, action, 'comment');
        }
        case UNIFYUPDATE: {
            return unifyUpdate(state, action, 'comments');
        }
        case 'addComment': {
            let comment = {
                ...action.payload.comment,
                user: action.payload.comment.user,
                time: new Date().getTime(),
                floorNumber: 0,
                follow: 0,
                support: 0,
                oppose: 0
            }
            return updateNormalizedData(state, {
                comments: {
                    [action.payload.comment.id]: {
                        ...comment
                    }
                }
            }, 'comments');
        }
        default: return state;
    }
}
function articals(state = initState, action) {
    switch (action.type) {
        case ADD_ARTICAL: {
            return updateNormalizedData(state, action, 'artical');
        }
        case 'addArticalDetail': {
            let target = { ...state.byId[action.payload.id], ...action.payload };
            return {
                ...state, byId: {
                    ...state.byId, [target.id]: target
                }
            }
        }
        case 'addComment': {
            return {
                ...state, byId: {
                    ...state.byId, [action.payload.id]: {
                        ...state.byId[action.payload.id], comments: state.byId[action.payload.id].comments.concat(action.payload.comment.id)
                    }
                }
            }
        }
        case UNIFYUPDATE: {
            return unifyUpdate(state, action, 'articals');
        }
        default: return state;
    }
}

const entities = combineReducers({
    users, comments, articals
});

export default entities;