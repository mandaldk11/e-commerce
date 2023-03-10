import { PRODUCT_LIST,SEARCH_PRODUCTS } from './Constants'

export const productList = () => {
    return {
        type: PRODUCT_LIST,
       
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCTS,
        query 
    }
}