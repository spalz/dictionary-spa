import * as Yup from "yup";

export const yup_username = () =>
    Yup.string()
        .required("Username is requred")
        .min(2, "Enter at least two characters")
        .max(20, "Enter no more than 20 characters");

export const yup_email = () =>
    Yup.string()
        .email("Enter the correct email address")
        .required("Enter email address");

export const yup_password = () =>
    Yup.string()
        .min(6, "At least six characters")
        .max(32, "Maximum of 32 characters")
        .required("Enter your password");

export const yup_new_password = () =>
    Yup.string()
        .min(6, "At least six characters")
        .max(32, "Maximum of 32 characters")
        .required("Enter a new password");

export const yup_current_password = () =>
    Yup.string()
        .min(6, "At least six characters")
        .max(32, "Maximum of 32 characters")
        .required("Enter the current password");
