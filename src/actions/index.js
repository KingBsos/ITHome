import { ADD_USER, ADD_COMMENT, ADD_ARTICAL } from '../constants';
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
function articalDataNormalize(data) {
    let user = new schema.Entity('users');
    let comment = new schema.Entity('comments', {
        user
    });
    let artical = new schema.Entity('articals', {
        author: user,
        comments: [comment]
    });
    let normalizedData = normalize(data, {
        articals: [artical]
    });
    return normalizedData;
}
function fetchAllArtical(url) {
    return function (dispatch, getState) {
        return axios('/allArtical').then(result => {
            return result.data;
        }).then(({ data }) => {
            let { entities: { users, comments, articals }} = articalDataNormalize(data);
            dispatch(addUser(users));
            dispatch(addComment(comments));
            dispatch(addArtical(articals));
        });
    }
}
export { addUser, addComment, addArtical };
export { fetchAllArtical };