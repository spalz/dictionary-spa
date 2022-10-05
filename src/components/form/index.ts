// fields
export { default as FormCheckboxField } from "./fields/FormCheckboxField";
export { default as FormPasswordField } from "./fields/FormPasswordField";
export { default as FormTextariaField } from "./fields/FormTextariaField";
export { default as FormInputField } from "./fields/FormInputField";
export { default as FormSelectField } from "./fields/FormSelectField";
export { default as FormRadioField } from "./fields/FormRadioField";
//
export { default as ErrorFormField } from "./ErrorFormField";
export { default as FieldWrap } from "./FieldWrap";
export { default as AuthBottomLink } from "./AuthBottomLink";
//global
export { default as BaseFormField } from "./BaseFormField";
export { default as BlockForm } from "./BlockForm";
export { default as InfoForm } from "./InfoForm";
export { default as SuccessForm } from "./SuccessForm";
export { default as PersonalDataForm } from "./PersonalDataForm";
export { default as ProvidersList } from "./ProvidersList";
export { default as ButtonForm } from "./ButtonForm";

export const tabindex = {
    login: 50,
    register: 100,
    recovery_password: 150,
    new_password: 200,
    change_password: 250,
    personal_data: 300,
    profile_settings: 350,
    feedback: 400,
    author: 450,
    payment: 500,
    lesson_reviews: 550,
    course_reviews: 650,
};
