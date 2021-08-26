import { call, put } from "redux-saga/effects";
import { getItemById, baseApiUrl } from '../../../services/service';
import { detailsLoaded, detailsError } from "../../actions/detailsAC";

export function* handlerGetItemById(id, loadedFunc, errorFunc) {
    try {
        const res = yield call(() => getItemById(`${baseApiUrl}/${id}`));
        yield put(detailsLoaded(res));
    }
    catch(err) {
        console.log(err);
        yield put(detailsError);
    }
    
}