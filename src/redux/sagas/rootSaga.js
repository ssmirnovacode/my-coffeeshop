import { all, takeLatest } from 'redux-saga/effects';
import { loadDataWorkerSaga, getMoreItemsworkerSaga } from './handlers/fetchAllHandler';
import { handlerGetComboById, handlerGetGiftsetById, handlerGetMenuById } from './handlers/fetchOneHandler';
/* import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import { combosLoaded, combosError, combosRequested  } from '../../redux/actions/combosAC';
import { menuItemsLoaded, menuItemsError, menuItemsRequested, menuItemsRequestedMore } from '../../redux/actions/menu-itemsAC';
import { giftsetLoaded, giftsetError, giftsetRequested } from '../../redux/actions/giftset'; */
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
    /* yield takeLatest('BEVERAGES_REQUESTED', () => handleGetItems('beverages', beveragesRequested, beveragesLoaded, beveragesError));
    yield takeLatest('COMBOS_REQUESTED', () => handleGetItems('combos', combosRequested, combosLoaded, combosError));
    yield takeLatest('GIFTSET_REQUESTED', () => handleGetItems('giftset', giftsetRequested, giftsetLoaded, giftsetError));
    yield takeLatest('MENU_ITEMS_REQUESTED', () => handleGetItems('menu-items', menuItemsRequested, menuItemsLoaded, menuItemsError, 4)); */
    
}

function* loadDetailsSaga() {
    yield takeLatest('COMBO_DETAILS_REQUESTED', handlerGetComboById);
    yield takeLatest('MENU_DETAILS_REQUESTED', handlerGetMenuById);
    yield takeLatest('GIFTSET_DETAILS_REQUESTED', handlerGetGiftsetById);
}

function* postOrderSaga() {
    yield takeLatest('ORDER_SUBMITTED', handlePostOrder);
}