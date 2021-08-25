import { call, put } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../actions/beveragesAC';
import { getNodeText } from "@testing-library/react";

export function* handleGetItems(items, loadedFunc, errorFunc) {
    try {
        const res = yield call(() => getItems(`${baseApiUrl}/${items}`)); //making a request and waiting for it to finish
        yield put(loadedFunc(res)); // dispatching another action after getting data
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