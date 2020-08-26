import { combineReducers } from 'redux';
import { ADD_USER, ADD_COMMENT, ADD_ARTICAL} from '../constants';

const initState = {
    byId: {},
    allIds: []
}
function updateNormalizedData(oldData, newData, keyName) {
    function _computeAllId(arr, arr2) {
        let newArr = [...arr];
        for(let i in arr2) {
            if(!arr.includes(i)) newArr.push(i);
        }
        return newArr;
    }
    return {
        byId: {
            ...oldData.byId,
            ...newData[keyName]
        },
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
        default: return state;
    }
}

const entities = combineReducers({
    users, comments, articals
});

export default entities;