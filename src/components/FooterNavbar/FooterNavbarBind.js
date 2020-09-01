import { connect } from 'react-redux';
import FooterNavbar from './FooterNavbar';

function mapState(state) {
    return {
        data: state.ui.footerNavbarData
    }
}
function mapDispatch(dispatch) {
    return {

    }
}

export default connect(mapState, mapDispatch)(FooterNavbar);