import { denormalize } from 'normalizr';
import { connect } from 'react-redux';

import { enhanceGuid } from '../../utils';
import { artical } from '../../utils/entityRelation';
import ArticalPage from './ArticalPage';

function mapState(state, ownProps) {
    let { entities } = state;
    let { match: {
        params: { id }
    } } = ownProps;
    let newEntities = {};
    Object.keys(entities).forEach(key => {
        newEntities[key] = {
            ...entities[key].byId
        }
    });
    if (!entities.articals.allIds.includes(id)) {
        ownProps.history.push('/404');
        return {};
    }
    let articalCompleted = denormalize(id, artical, newEntities);
    return {
        ...ownProps,
        artical: articalCompleted,
        myId: state.i
    }
}

function mapDispatch(dispatch) {
    return {
        fetchArticalDetailData(id) {
            dispatch({
                type: 'fetchArticalDetailData',
                payload: id
            });
        },
        addComment(id, comment, userId) {
            if(!comment) return Promise.reject();
            let guid = enhanceGuid();
            dispatch({
                type: 'addComment',
                payload: {
                    id, comment: {
                        id: guid,
                        text: comment,
                        user: userId
                    }
                }
            });
            return Promise.resolve();
        }
    }
}

const ArticalPageBind = connect(mapState, mapDispatch)(ArticalPage);

export { ArticalPageBind };