import { all, takeLatest } from 'redux-saga/effects';
import { loadDataWorkerSaga, getMoreItemsworkerSaga } from './handlers/fetchAllHandler';
import { handlerGetComboById, handlerGetGiftsetById, handlerGetMenuById } from './handlers/fetchOneHandler';
import { handlePostOrder } from './handlers/orderHandler';


export function* watcherSaga() {
    yield all([
        loadHomePageSaga(),
        loadDetailsSaga(),
        postOrderSaga()
    ])
}

function* loadHomePageSaga() {
    yield takeLatest('FETCH_ALL_DATA', loadDataWorkerSaga);
    yield takeLatest('MENU_ITEMS_REQUESTED_MORE', getMoreItemsworkerSaga);
}

function* loadDetailsSaga() {
    yield takeLatest('COMBO_DETAILS_REQUESTED', handlerGetComboById);
    yield takeLatest('MENU_DETAILS_REQUESTED', handlerGetMenuById);
    yield takeLatest('GIFTSET_DETAILS_REQUESTED', handlerGetGiftsetById);
}

function* postOrderSaga() {
    yield takeLatest('ORDER_SUBMITTED', handlePostOrder);
}