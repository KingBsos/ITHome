import { connect } from 'react-redux';
import ArticalPage from './ArticalPage';

function mapState(state, ownProps) {
    let { entities: { articals, comments, users } } = state;
    let { match } = ownProps;
    let { params: { id } } = match;
    let artical = articals.byId[id];
    if (artical === undefined) {
        ownProps.history.push('/404');
        return {};
    }
    let newComments = artical.comments.map((item) => {
        return comments.byId[item];
    });
    let newAuthor = users.byId[artical.author];
    let newEditorInCharge = users.byId[artical.editorInCharge];
    return {
        ...ownProps,
        artical: {
            ...artical,
            comments: newComments, author: newAuthor, editorInCharge: newEditorInCharge
        }
    }
}

function mapDispatch(dispatch, ownProps) {
    return {

    }
}

const ArticalPageBind = connect(mapState, mapDispatch)(ArticalPage);

export { ArticalPageBind };