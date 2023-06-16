// import { Product_URL } from "./consts"
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";

// export const getData = async () => {
//     const data = await fetch(Product_URL)
//     return data.json()
// }

export const isFunction = (fn) => {
  if (typeof fn === "function") {
    return true;
  }
  return false;
};

export const signupFormSchema = Yup.object({
  firstName: Yup.string().required("First name cannot be empty!"),
  lastName: Yup.string().required("Last name cannot be empty!"),
  email: Yup.string().email("Invalid Email").required("Email cannot be empty!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .required("Password cannot be empty!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password does not match!")
    .required("Confirm password cannot be empty!"),
});

export const loginFormSchema = Yup.object({
  email: Yup.string().required("Email cannot be empty!"),
  password: Yup.string().required("Password cannot be empty!"),
});

export const updateFormSchema = Yup.object({
  firstName: Yup.string().required("First name cannot be empty!"),
  lastName: Yup.string().required("Last name cannot be empty!"),
});

export const resetPasswordFormSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .required("Password cannot be empty!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password does not match!")
    .required("Confirm password cannot be empty!"),
});

export const showSuccess = (message) =>
  enqueueSnackbar(message, { variant: "success" });

export const showError = (message) =>
  enqueueSnackbar(message, { variant: "error" });
