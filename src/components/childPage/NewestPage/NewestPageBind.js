import { connect } from 'react-redux';
import NewestPage from './NewestPage';

function mapState({entities, ui: {carouselData}}) {
    return {
        carouselData,
        articals: entities.articals
    }
}
function mapDispatch() {
    return {

    }
}

export default connect(mapState, mapDispatch)(NewestPage);