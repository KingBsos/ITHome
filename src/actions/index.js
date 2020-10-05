import {
  ADD_ARTICAL,
  ADD_ARTICAL_DETAIL,
  ADD_CAROUSEL_ITEM,
  ADD_COMMENT,
  ADD_USER,
} from '../constants';

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}
function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}
function addArtical(artical) {
    return {
        type: ADD_ARTICAL,
        artical
    }
}
function addCarousel(payload) {
    return {
        type: ADD_CAROUSEL_ITEM,
        payload
    }
}
function addArticalDetail(artical) {
    return {
        type: ADD_ARTICAL_DETAIL,
        payload: artical
    }
}

export { addArtical, addArticalDetail, addCarousel, addComment, addUser };