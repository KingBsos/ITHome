import { ADD_USER, ADD_COMMENT, ADD_ARTICAL} from '../constants';

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

export { addUser, addComment, addArtical };