import { SET_PRODUCT_LIST } from "./Constants"
export const productData = (data = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     return [action.data, ...data]
        case SET_PRODUCT_LIST:
            return [...action.data]

        default:
            return data
    }
}