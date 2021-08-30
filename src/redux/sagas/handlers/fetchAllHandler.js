import { call, put } from "redux-saga/effects";
import { getItems, baseApiUrl } from '../../../services/service';

export function* handleGetItems(items, requestFunc, loadedFunc, errorFunc, slicer=undefined) {
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