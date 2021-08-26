import { call, put } from "redux-saga/effects";
import { getItemById, baseApiUrl } from '../../../services/service';
import { detailsRequested, detailsLoaded, detailsError } from '../../actions/detailsAC';

export function* handlerGetItemById(action) {
    try {
        yield call(detailsRequested, action.payload);
        const res = yield call(() => getItemById(`${baseApiUrl}/combos/`, action.payload));
        yield put(detailsLoaded(res));
    }
    catch(err) {
        console.log(err);
        yield put(detailsError);
    }
    
}