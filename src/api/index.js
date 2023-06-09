import client, { METHODS } from "./client";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/api/user/signin",
        //New API
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/api/user/signup",
        //Done
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
        //New API
        method: METHODS.GET,
        ...data,
      }),
    getProductById: (id) =>
      client({
        url: `/api/product/getproductbyid/${id}`,
        //New API used by useFetch
        method: METHODS.GET,
      }),
  },
  cart: {
    add: (params) =>
      client({
        url: "/api/product/addtocart",
        //New API
        data: params,
        method: METHODS.POST,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
    remove: (params) =>
      client({
        url: `api/product/removefromcart/${params.product_id}`,
        //New API
        method: METHODS.DELETE,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
    get: (data) =>
      client({
        url: `api/product/getusercart`,
        //New API
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${data}` },
      }),
    update: (params) =>
      client({
        url: `/api/product/updatecart/${params.cartId}`,
        //New API
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
