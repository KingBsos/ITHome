import { combineReducers } from 'redux';

import entities from './entities';
import i from './i.js';
import ui from './ui';

const state = combineReducers({
    entities, ui, i
});

export default state;