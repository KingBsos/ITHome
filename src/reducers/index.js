import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import entities from './entities';
import ui from './ui';

// const state = combineReducers({
//     entities, ui
// });

export default (history) => {
    return combineReducers({
        router: connectRouter(history),
        entities, ui
    });
}

// export default state;