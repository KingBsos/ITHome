import axios from 'axios';
import { normalize } from 'normalizr';
import {
  all,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  addArtical,
  addCarousel,
  addUser,
} from '../actions';
import { artical } from '../utils/entityRelation';

function articalDataNormalize(data) {
    let normalizedData = normalize(data, {
        articals: [artical]
    });
    return normalizedData;
}
function* fetchAllArtical({ payload: url }) {
    const data = yield axios(url).then(result => {
        return result.data.data;
    });
    let { entities: { users, articals } } = articalDataNormalize(data);
    yield put(addUser(users));
    yield put(addArtical(articals));
}
function* fetchCarousel({ payload: url }) {
    const data = yield axios(url).then(result => result.data);
    yield put(addCarousel(data));
}
function* fetchArticalDetailData({payload: id}) {
    const data = yield axios('/data/articaldetail/'+id).then(result => result.data.data);
    // data.id = id;
    // let {entities: {users, comments, articals}} = normalize(data, artical);
    yield put({
        type: 'addArticalDetail',
        data
    });
}
function* rootSaga() {
    let one = takeEvery('fetchAllArtical', fetchAllArtical);
    let two = takeEvery('fetchCarousel', fetchCarousel);
    let three = takeLatest('fetchArticalDetailData', fetchArticalDetailData);
    yield all([one, two, three]);
}

export default rootSaga;