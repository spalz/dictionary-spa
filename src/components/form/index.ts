// fields
export { default as FormCheckboxField } from "./fields/FormCheckboxField";
export { default as FormPasswordField } from "./fields/FormPasswordField";
export { default as FormTextariaField } from "./fields/FormTextariaField";
export { default as FormInputField } from "./fields/FormInputField";
export { default as FormSelectField } from "./fields/FormSelectField";
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
export * from "./fields/fields_style";

export const tabindex = {
    login: 50,
    register: 60,
    forgot_password: 70,
    reset_password: 80,
    //
    word: 90,
    tag: 100,
    cat: 120,
};
