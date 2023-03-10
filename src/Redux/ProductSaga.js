import { takeEvery, put } from 'redux-saga/effects'
import { SET_PRODUCT_LIST, PRODUCT_LIST, SEARCH_PRODUCTS } from './Constants'

function* getProducts() {
    let data = yield fetch('http://localhost:5000/product');
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* findProducts(data) {
    let result = yield fetch(`http://localhost:5000/product?q=${data.query}&pageSize=9`);
    result = yield result.json()
    yield put({ type: SET_PRODUCT_LIST, data: result })
}
function* ProductSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCTS, findProducts)
}
export default ProductSaga