// import { Product_URL } from "./consts"

// export const getData = async () => {
//     const data = await fetch(Product_URL)
//     return data.json()
// }

export const isFunction = (fn) => {
    if (typeof fn === 'function') {
        return true;
    }
    return false;
};