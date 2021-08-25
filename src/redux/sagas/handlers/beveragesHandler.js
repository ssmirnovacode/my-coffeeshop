import { call, put } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../../redux/actions/beveragesAC';

export function* handleGetBeverages(items) {
    try {
        const res = yield call(() => getItems(`${baseApiUrl}/${items}`)); //making a request and waiting for it to finish
        yield put(beveragesLoaded(res)); // dispatching another action after getting data
    }
    catch(err) {
        console.log(err);
        
    }
    /* const res = yield call(() => getItems(`${baseApiUrl}/beverages`));
    if (res.length > 0) {
        yield put(beveragesLoaded(res));
    }
    else {
        yield put(beveragesError());
    } */
}