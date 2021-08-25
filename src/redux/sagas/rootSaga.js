import { takeLatest } from 'redux-saga/effects';
import { handleGetBeverages } from './handlers/beveragesHandler';

// watcher - generator function:
export function* watcherSaga() {
    //takeLatest means that in case of various requests the last one will be taken and previous will be neglected
    console.log('watcher run');
    yield takeLatest('BEVERAGES_REQUESTED', handleGetBeverages);
}