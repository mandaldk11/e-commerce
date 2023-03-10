import { ADD_TO_CART, REMOVE_TO_CART } from "./Constants"
export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_TO_CART:
            data.length = data.length ? data.length - 1 : []

            const remainingItems = data.filter((item) =>
                item.id !== action.data
            )
            return [...remainingItems]
        default:
            return data

    }
}