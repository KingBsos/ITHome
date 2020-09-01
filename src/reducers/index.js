import { combineReducers } from 'redux';
import entities from './entities';
import ui from './ui';

const state = combineReducers({
    entities, ui
});

export default state;