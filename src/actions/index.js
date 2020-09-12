import { ADD_USER, ADD_COMMENT, ADD_ARTICAL, ADD_CAROUSEL_ITEM } from '../constants';
import axios from 'axios';
import { normalize, schema } from 'normalizr';

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
function articalDataNormalize(data) {
    let user = new schema.Entity('users');
    let comment = new schema.Entity('comments', {
        user
    });
    let artical = new schema.Entity('articals', {
        author: user,
        editorInCharge: user,
        comments: [comment]
    });
    let normalizedData = normalize(data, {
        articals: [artical]
    });
    return normalizedData;
}
function fetchAllArtical(url) {
    return function (dispatch, getState) {
        return axios(url).then(result => {
            return result.data;
        }).then(({ data }) => {
            let { entities: { users, comments, articals }} = articalDataNormalize(data);
            dispatch(addUser(users));
            dispatch(addComment(comments));
            dispatch(addArtical(articals));
        });
    }
}
function fetchCarouselData(url) {
    return function(dispatch, getState) {
        return axios(url).then(result => result.data).then(data => {
            dispatch(addCarousel(data));
        });
    }
}
export { addUser, addComment, addArtical };
export { fetchAllArtical, fetchCarouselData };