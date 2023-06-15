import client, { METHODS } from "./client";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/api/user/signin",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/api/user/signup",
        data: params,
        method: METHODS.POST,
      }),
    profile: (token) =>
      client({
        url: "/api/user/profile",
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${token}` },
      }),
  },
  product: {
    get: (data) =>
      client({
        url: "/api/product/getAllProduct",
        method: METHODS.GET,
        ...data,
      }),
    //used in useFetch
    getProductById: (id) =>
      client({
        url: `/api/product/getproductbyid/${id}`,
        method: METHODS.GET,
      }),
    getBestSeller: () =>
      client({
        url: "/api/product/getbestseller",
        method: METHODS.GET,
      }),
  },
  cart: {
    add: (params) =>
      client({
        url: "/api/product/addtocart",
        data: params,
        method: METHODS.POST,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
    remove: (params) =>
      client({
        url: `api/product/removefromcart/${params.product_id}`,
        method: METHODS.DELETE,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
    get: (data) =>
      client({
        url: `api/product/getusercart`,
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${data}` },
      }),
    update: (params) =>
      client({
        url: `/api/product/updatecart/${params.cartId}`,
        method: METHODS.PUT,
        data: params,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
  },
  order: {
    create: (params) =>
      client({
        url: "/api/product/createorder",
        method: METHODS.POST,
        headers: { Authorization: `Bearer ${params}` },
      }),
    getOrderHistory: (params) =>
      client({
        url: "/api/product/getusersorder",
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${params}` },
      }),
  },
};
