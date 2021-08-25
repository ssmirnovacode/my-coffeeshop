import { takeLatest } from 'redux-saga/effects';
import { handleGetItems } from './handlers/fetchAllHandler';
import { beveragesLoaded, beveragesError, /* beveragesRequested  */} from '../../redux/actions/beveragesAC';
import { combosLoaded, combosError, /* combosRequested */  } from '../../redux/actions/combosAC';
import { menuItemsLoaded, menuItemsError, /* menuItemsRequested, menuItemsRequestedMore */ } from '../../redux/actions/menu-itemsAC';
import { giftsetLoaded, giftsetError, /* giftsetTabClick, giftsetRequested */ } from '../../redux/actions/giftset';

// watcher - generator function:
export function* watcherSaga() {
    //takeLatest means that in case of various requests the last one will be taken and previous will be neglected
    yield takeLatest('BEVERAGES_REQUESTED', () => handleGetItems('beverages', beveragesLoaded, beveragesError));
    yield takeLatest('COMBOS_REQUESTED', () => handleGetItems('combos', combosLoaded, combosError));
    yield takeLatest('GIFTSET_REQUESTED', () => handleGetItems('giftset', giftsetLoaded, giftsetError));
    yield takeLatest('MENU_ITEMS_REQUESTED', () => handleGetItems('menu-items', menuItemsLoaded, menuItemsError, 4));
    yield takeLatest('MENU_ITEMS_REQUESTED_MORE', () => handleGetItems('menu-items', menuItemsLoaded, menuItemsError));
}