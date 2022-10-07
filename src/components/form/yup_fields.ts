import * as Yup from "yup";

export const yup_string_required = (t: string) =>
    Yup.string().required(`${t} is requred`);
export const yup_test = () => Yup.string();
export const yup_test_r = () => Yup.string().required("requred");

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

//add word
export const yup_word = () => Yup.string().required("Word is requred");
export const yup_translation = () => Yup.string();
export const yup_example = () => Yup.string();
export const yup_example_traslation = () => Yup.string();

export const yup_word_category = () => Yup.object().required("Select category");
export const yup_word_tags = () =>
    Yup.array()
        .required("Select tags")
        .min(1, "Min 1 tag")
        .max(3, "Max 3 tags");
