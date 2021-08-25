import { takeLatest } from 'redux-saga/effects';
import { handleGetItems } from './handlers/fetchAllHandler';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import { combosLoaded, combosError, combosRequested  } from '../../redux/actions/combosAC';
import { menuItemsLoaded, menuItemsError, menuItemsRequested} from '../../redux/actions/menu-itemsAC';

// watcher - generator function:
export function* watcherSaga() {
    //takeLatest means that in case of various requests the last one will be taken and previous will be neglected
    yield takeLatest('BEVERAGES_REQUESTED', () => handleGetItems('beverages', beveragesLoaded, beveragesError));
    yield takeLatest('COMBOS_REQUESTED', () => handleGetItems('combos', combosLoaded, combosError));
    yield takeLatest('MENU_ITEMS_REQUESTED', () => handleGetItems('menu-items', menuItemsLoaded, menuItemsError));
}