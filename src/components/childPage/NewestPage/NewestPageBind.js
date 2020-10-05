import { connect } from 'react-redux';

import NewestPage from './NewestPage';

function mapState({entities, ui: {carouselData}}) {
    return {
        carouselData,
        articals: entities.articals
    }
}
function mapDispatch(dispatch) {
    return {
        fetchArtical() {
            dispatch({type: 'fetchAllArtical', payload: '/data/artical/newest'});
        },
        fetchCarousel() {
            dispatch({type: 'fetchCarousel', payload: '/data/carousel'});
        }
    }
}

export default connect(mapState, mapDispatch)(NewestPage);