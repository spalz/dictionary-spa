import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddTagMutation } from "@redux";
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

type TagFormValues = {
    title: string;
};

const TagForm = () => {
    const [addTag, {}] = useAddTagMutation();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<TagFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: TagFormValues) => {
        // console.log(data);
        addTag({ data: data }).unwrap();
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
                                    id={tabindex.word + 1}
                                    error={errors.title}
                                    label="Tag name"
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
                        Add tag
                    </ButtonForm>
                </Wrapper>
            </BlockForm>
        </form>
        // <DevTool control={control} />
    );
};

export default TagForm;
