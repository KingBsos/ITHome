import { ADD_CAROUSEL_ITEM } from '../../constants';

function carouselData(state = [], action) {
    switch(action.type) {
        case ADD_CAROUSEL_ITEM:
            return action.payload;
        default: return state;
    }
}

export default carouselData;