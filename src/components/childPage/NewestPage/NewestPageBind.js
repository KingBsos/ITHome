import { connect } from 'react-redux';
import NewestPage from './NewestPage';
import  { fetchAllArtical } from '../../../actions';
function mapState({entities, ui: {carouselData}}) {
    return {
        carouselData,
        articals: entities.articals
    }
}
function mapDispatch(dispatch) {
    return {
        fetchArtical() {
            dispatch(fetchAllArtical('/data/artical/newest'));
        }
    }
}

export default connect(mapState, mapDispatch)(NewestPage);