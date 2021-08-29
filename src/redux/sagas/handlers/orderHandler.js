import { call, put } from "redux-saga/effects";
import { postOrder, baseApiUrl } from "../../../services/service";
import { orderSubmitted, orderError } from "../../actions/orderAC";

export function* handlePostOrder(action) {
    try {
        console.log('handler ran');
        const res = yield call(() => postOrder(`${baseApiUrl}/order`, action.payload));
        yield put(orderSubmitted(res));
        console.log(res);
    }
    catch(err) {
        console.log(err);
        yield put(orderError())
    }   
}