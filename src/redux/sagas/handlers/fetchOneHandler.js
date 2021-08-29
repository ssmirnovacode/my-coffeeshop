import { call, put } from "redux-saga/effects";
import { getItemById, baseApiUrl } from '../../../services/service';
import { comboDetailsRequested, menuDetailsRequested, giftsetDetailsRequested, detailsError, detailsLoaded } from '../../actions/detailsAC';

export function* handlerGetComboById(action) {
    try {
        yield call(comboDetailsRequested, action.payload);
        const res = yield call(() => getItemById(`${baseApiUrl}/combos/`, action.payload));
        yield put(detailsLoaded(res));
    }
    catch(err) {
        console.log(err);
        yield put(detailsError());
    }  
}

export function* handlerGetMenuById(action) {
    try {
        yield call(menuDetailsRequested, action.payload);
        const res = yield call(() => getItemById(`${baseApiUrl}/menu-items/`, action.payload));
        yield put(detailsLoaded(res));
    }
    catch(err) {
        console.log(err);
        yield put(detailsError());
    }  
}

export function* handlerGetGiftsetById(action) {
    try {
        yield call(giftsetDetailsRequested, action.payload);
        const res = yield call(() => getItemById(`${baseApiUrl}/giftset/`, action.payload));
        yield put(detailsLoaded(res));
    }
    catch(err) {
        console.log(err);
        yield put(detailsError());
    }  
}