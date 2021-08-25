import { call, put } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../../redux/actions/beveragesAC';

export function* handleGetBeverages(action) {
    try {
        console.log('handler run');
        const res = yield call(() => getItems(`${baseApiUrl}/beverages`)); //making a request and waiting for it to finish
        
        yield put(beveragesLoaded(res)); // dispatching another action after getting data
    }
    catch(err) {
        console.log(err);
    }
}