import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddCategoryMutation } from "@redux";
import { TagAttributesProps } from "@interfaces";

// import { DevTool } from "@hookform/devtools";

import { Wrapper } from "@components/layout";
import {
    FormInputField,
    BlockForm,
    ButtonForm,
    tabindex,
} from "@components/form";
import { yup_string_required } from "@components/form/yup_fields";

const FormSchema = () =>
    Yup.object().shape({
        title: yup_string_required("Title"),
    });

type CategoryFormValues = {
    title: string;
};

const CategoryForm = () => {
    const [addCategory, {}] = useAddCategoryMutation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<CategoryFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: CategoryFormValues) => {
        addCategory({ data: data }).unwrap();
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BlockForm success={false}>
                <div>
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.cat + 1}
                                    error={errors.title}
                                    label="Category name"
                                    required={true}
                                    {...field}
                                />
                            );
                        }}
                        name="title"
                        control={control}
                    />
                </div>

                <Wrapper offset={["bottom-20"]}>
                    <ButtonForm
                        size="small"
                        tabIndex={tabindex.login + 3}
                        disabled={!isValid}
                    >
                        Add category
                    </ButtonForm>
                </Wrapper>
            </BlockForm>
        </form>
        // <DevTool control={control} />
    );
};

export default CategoryForm;
