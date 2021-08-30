import { call, put, fork } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../../redux/actions/beveragesAC';
import { combosLoaded, combosError, combosRequested  } from '../../../redux/actions/combosAC';
import { menuItemsLoaded, menuItemsError, menuItemsRequested, menuItemsRequestedMore } from '../../../redux/actions/menu-itemsAC';
import { giftsetLoaded, giftsetError, giftsetRequested } from '../../../redux/actions/giftset';

export function* loadDataWorkerSaga() {
    //console.log('loadData worker saga ran')
    yield fork(handleGetBevegares);
    yield fork(handleGetCombos);
    yield fork(handleGetMenuItems);
    //yield fork(handleGetMenuItemsMore); // separate
    yield fork(handleGetGiftset);
}

export function* getMoreItemsworkerSaga() {
    return yield handleGetItems('menu-items', menuItemsRequestedMore, menuItemsLoaded, menuItemsError)
}

function handleGetBevegares() {
    return /* () =>  */handleGetItems('beverages', beveragesRequested, beveragesLoaded, beveragesError)
}

function handleGetCombos() {
    return /* () => */ handleGetItems('combos', combosRequested, combosLoaded, combosError)
}

function handleGetMenuItems() {
    return /* () => */ handleGetItems('menu-items', menuItemsRequested, menuItemsLoaded, menuItemsError, 4)
}



function handleGetGiftset() {
    return /* () => */ handleGetItems('giftset', giftsetRequested, giftsetLoaded, giftsetError)
}


function* handleGetItems(items, requestFunc, loadedFunc, errorFunc, slicer=undefined) {
    try {
        yield call(requestFunc);
        const res = yield call(() => getItems(`${baseApiUrl}/${items}`)); 
        yield put(loadedFunc(res.slice(0,slicer))); 
    }
    catch(err) {
        console.log(err);
        yield put(errorFunc()); 
        
    }
}