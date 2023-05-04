import { Product_URL } from "./consts"

export const getData = async () => {
    const data = await fetch(Product_URL)
    return data.json()
}