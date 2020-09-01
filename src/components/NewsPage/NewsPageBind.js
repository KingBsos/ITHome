import { connect } from 'react-redux';
import NewsPage from './index.js';
function mapState({ ui: {allColumnData} }, allProps) {
    return {
        ...allProps,
        data: allColumnData
    }
}
function mapDispatch(dispatch) {
    return {

    }
}
const NewsPageBind = connect(mapState, mapDispatch)(NewsPage);

export default NewsPageBind;