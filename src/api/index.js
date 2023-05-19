import client, { METHODS } from "./client";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/api/customer/signin",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/api/customer/signup",
        data: params,
        method: METHODS.POST,
      }),
    profile: (user) =>
      client({
        url: "/api/customer/profile",
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${user}` },
      }),
  },
  product: {
    get: (data) =>
      client({
        url: "/api/product/get_all_product",
        method: METHODS.GET,
        ...data,
      }),
    getProductById: (id) =>
      client({
        url: `/api/product/getproductbyid/${id}`,
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
        url: `api/product/removefromcart/${params.user_id}/${params.product_id}`,
        method: METHODS.DELETE,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
    get: (data) =>
      client({
        url: `api/product/getcartproduct/${data.userId}`,
        method: METHODS.GET,
        headers: { Authorization: `Bearer ${data.token}` },
      }),
    update: (params) =>
      client({
        url: `/api/product/updatecart/${params.cartId}`,
        method: METHODS.PUT,
        data: params,
        headers: { Authorization: `Bearer ${params.token}` },
      }),
  },
};
