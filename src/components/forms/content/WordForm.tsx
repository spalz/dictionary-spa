import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";

// import { DevTool } from "@hookform/devtools";

import { Wrapper } from "@components/layout";
import {
    FormInputField,
    FormSelectField,
    BlockForm,
    ButtonForm,
    tabindex,
} from "@components/form";
import {
    yup_word,
    yup_translation,
    yup_example,
    yup_example_traslation,
    yup_word_category,
    yup_word_tags,
} from "@components/form/yup_fields";

type WordFormValues = {
    word: string;
    translation: string;
    example: string;
    example_traslation: string;
    category: { label: string; value: number };
    tags: Array<{ label: string; value: number }>;
};

const FormSchema = () =>
    Yup.object().shape({
        word: yup_word(),
        translation: yup_translation(),
        example: yup_example(),
        example_traslation: yup_example_traslation(),
        category: yup_word_category(),
        tags: yup_word_tags(),
    });

const WordForm = () => {
    const { data: session } = useSession();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<WordFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
    });

    const onSubmit = (data: WordFormValues) => {
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
                                    error={errors.word}
                                    label="Word"
                                    {...field}
                                />
                            );
                        }}
                        name="word"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.word + 2}
                                    error={errors.translation}
                                    label="Translation"
                                    {...field}
                                />
                            );
                        }}
                        name="translation"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.word + 2}
                                    error={errors.example}
                                    label="Example"
                                    {...field}
                                />
                            );
                        }}
                        name="example"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormInputField
                                    id={tabindex.word + 4}
                                    error={errors.example_traslation}
                                    label="Example traslation"
                                    {...field}
                                />
                            );
                        }}
                        name="example_traslation"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormSelectField
                                    id={tabindex.word + 5}
                                    error={errors.category}
                                    label="Category"
                                    options={[
                                        {
                                            label: "Chocolate",
                                            value: "chocolate",
                                        },
                                        {
                                            label: "Strawberry",
                                            value: "strawberry",
                                        },
                                        {
                                            label: "Vanilla",
                                            value: "vanilla",
                                        },
                                    ]}
                                    {...field}
                                />
                            );
                        }}
                        name="category"
                        control={control}
                    />
                    <Controller
                        render={({ field }) => {
                            return (
                                <FormSelectField
                                    id={tabindex.word + 6}
                                    error={errors.tags}
                                    label="Tags"
                                    isMulti
                                    options={[
                                        {
                                            label: "Chocolate",
                                            value: "chocolate",
                                        },
                                        {
                                            label: "Strawberry",
                                            value: "strawberry",
                                        },
                                        {
                                            label: "Vanilla",
                                            value: "vanilla",
                                        },
                                        {
                                            label: "Strawberry2",
                                            value: "strawberry2",
                                        },
                                        {
                                            label: "Vanilla2",
                                            value: "vanilla2",
                                        },
                                    ]}
                                    {...field}
                                />
                            );
                        }}
                        name="tags"
                        control={control}
                    />
                </div>

                <Wrapper offset={["bottom-20"]}>
                    <ButtonForm
                        tabIndex={tabindex.word + 7}
                        disabled={!isValid}
                    >
                        Add word
                    </ButtonForm>
                </Wrapper>
            </BlockForm>
        </form>
        // <DevTool control={control} />
    );
};

export default WordForm;
