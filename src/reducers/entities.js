import { combineReducers } from 'redux';

import {
  ADD_ARTICAL,
  ADD_COMMENT,
  ADD_USER,
} from '../constants';

const initState = {
    byId: {},
    allIds: []
}
function updateNormalizedData(oldData, newData, keyName) {
    let mergeData = {
        ...oldData.byId, ...newData[keyName]
    };
    function _computeAllId(arr, arr2) {
        let newArr = [...arr];
        for(let i of arr2) {
            if(!arr.includes(i)) newArr.push(i);
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
function users(state = initState, action) {
    switch (action.type) {
        case ADD_USER: {
            return updateNormalizedData(state, action, 'user');
        }
        default: return state;
    }
}
function comments(state = initState, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            return updateNormalizedData(state, action, 'comment');
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
            let target = {...state.byId[action.payload.id], ...action.payload};
            return {
                ...state, byId: {
                    ...state.byId, [target.id]: target
                }
            }
        }
        default: return state;
    }
}

const entities = combineReducers({
    users, comments, articals
});

export default entities;