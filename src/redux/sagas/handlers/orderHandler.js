import { call, put } from "redux-saga/effects";
import { postOrder, baseApiUrl } from "../../../services/service";
import { orderError, orderSaved } from "../../actions/orderAC";

export function* handlePostOrder(action) {
    try {
        yield call(() => postOrder(`${baseApiUrl}/order`, action.payload));
        yield put(orderSaved())
        console.log(action.payload);
    }
    catch(err) {
        console.log(err);
        yield put(orderError(err))
    }   
}