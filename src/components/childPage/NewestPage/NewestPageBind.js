import { connect } from 'react-redux';
import NewestPage from './NewestPage';

function mapState({entities}) {
    return {
        articals: entities.articals
    }
}
function mapDispatch() {
    return {

    }
}

export default connect(mapState, mapDispatch)(NewestPage);