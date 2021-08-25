import { call, put } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';

export function* handleGetItems(items, loadedFunc, errorFunc, slicer=undefined) {
    try {
        const res = yield call(() => getItems(`${baseApiUrl}/${items}`)); //making a request and waiting for it to finish
        yield put(loadedFunc(res.slice(0,slicer))); // dispatching another action after getting data
    }
    catch(err) {
        console.log(err);
        yield put(errorFunc()); 
        
    }
    /* const res = yield call(() => getItems(`${baseApiUrl}/beverages`));
    if (res.length > 0) {
        yield put(beveragesLoaded(res));
    }
    else {
        yield put(beveragesError());
    } */
}