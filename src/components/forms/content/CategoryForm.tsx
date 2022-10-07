import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import { DevTool } from "@hookform/devtools";

import { Wrapper } from "@components/layout";
import {
    FormInputField,
    BlockForm,
    ButtonForm,
    tabindex,
} from "@components/form";
import { yup_string_required } from "@components/form/yup_fields";

type CategoryFormValues = {
    title: string;
};

const FormSchema = () =>
    Yup.object().shape({
        title: yup_string_required("Title"),
    });

const CategoryForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<CategoryFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: CategoryFormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BlockForm success={false}>
                <div>
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.word + 1}
                                    error={errors.title}
                                    label="Category name"
                                    {...field}
                                />
                            );
                        }}
                        name="title"
                        control={control}
                        defaultValue=""
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
