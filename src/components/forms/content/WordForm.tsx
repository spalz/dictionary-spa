import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import {
    useGetTagsQuery,
    useGetCategoriesQuery,
    useAddWordMutation,
    useUpdateWordMutation,
    useAddCategoryMutation,
    useAddTagMutation,
} from "@redux";
// import { DevTool } from "@hookform/devtools";

import { Wrapper } from "@components/layout";
import {
    FormInputField,
    FormSelectField,
    BlockForm,
    ButtonForm,
    tabindex,
    SFormRow,
} from "@components/form";
import {
    yup_id,
    yup_word,
    yup_translation,
    yup_example,
    yup_example_traslation,
    yup_word_category,
    yup_word_tags,
} from "@components/form/yup_fields";
import { TagProps, CategoryProps, WordProps } from "@interfaces";
import { colors, spacings } from "@styles/vars";

type WordFormValues = {
    id: number;
    word: string;
    translation: string;
    example: string;
    example_traslation: string;
    category: { label: string; value: number };
    tags: Array<{ label: string; value: number }>;
};

type WordFormProps = {
    defaultCategory?: string | number;
    defaultTag?: string | number;
    type: "add" | "edit";
    defaultValues?: WordProps;
};

const FormSchema = () =>
    Yup.object().shape({
        id: yup_id(),
        word: yup_word(),
        translation: yup_translation(),
        example: yup_example(),
        example_traslation: yup_example_traslation(),
        category: yup_word_category(),
        tags: yup_word_tags(),
    });

const WordForm: React.FC<WordFormProps> = ({
    defaultCategory,
    defaultTag,
    type,
    defaultValues,
}) => {
    const { data: data_tags, isLoading: isLoadingTags } = useGetTagsQuery();
    const { data: data_cats, isLoading: isLoadingCat } =
        useGetCategoriesQuery();
    const [addWord, {}] = useAddWordMutation();
    const [updateWord, {}] = useUpdateWordMutation();

    const [addCategory, {}] = useAddCategoryMutation();
    const [addTag] = useAddTagMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<WordFormValues>({
        resolver: yupResolver(FormSchema()),
        mode: "all",
        defaultValues: {
            id: defaultValues?.id || undefined,
            word: defaultValues?.attributes.word || "",
            translation: defaultValues?.attributes.translation || "",
            example: defaultValues?.attributes.example || "",
            example_traslation:
                defaultValues?.attributes.example_traslation || "",
            category: {
                label: defaultValues?.attributes.category?.data.attributes
                    .title,
                value: defaultValues?.attributes.category?.data.id,
            },
            tags: defaultValues?.attributes.tags?.data.map((tag) => {
                return {
                    label: tag.attributes.title,
                    value: tag.id,
                };
            }),
        },
    });

    const onSubmit = (data: WordFormValues) => {
        if (type === "add") {
            addWord({
                data: {
                    word: data.word,
                    translation: data.translation,
                    example: data.example,
                    example_traslation: data.example_traslation,
                    category: data.category.value,
                    tags: data.tags.map((tag) => tag.value),
                },
            }).unwrap();
        }
        if (type === "edit") {
            updateWord({
                id: data.id,
                data: {
                    data: {
                        word: data.word,
                        translation: data.translation,
                        example: data.example,
                        example_traslation: data.example_traslation,
                        category: data.category.value,
                        tags: data.tags.map((tag) => tag.value),
                    },
                },
            }).unwrap();
        }
    };

    const tags = data_tags?.data?.map((item: TagProps) => {
        return {
            label: item.attributes.title,
            value: item.id,
        };
    });

    const categories = data_cats?.data?.map((item: CategoryProps) => {
        return {
            label: item.attributes.title,
            value: item.id,
        };
    });

    const handleCreateCategory = (inputValue: string) => {
        addCategory({
            data: {
                title: inputValue,
            },
        }).unwrap();
    };

    const handleCreateTag = (inputValue: string) => {
        addTag({
            data: {
                title: inputValue,
            },
        }).unwrap();
    };

    return (
        <SWordForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <BlockForm success={false}>
                    <div>
                        <SFormRow>
                            <Controller
                                render={({ field }) => {
                                    return (
                                        <FormInputField
                                            id={tabindex.word + 1}
                                            error={errors.word}
                                            label="Word"
                                            required={true}
                                            {...field}
                                        />
                                    );
                                }}
                                name="word"
                                control={control}
                            />
                            <Controller
                                render={({ field }) => {
                                    return (
                                        <FormInputField
                                            id={tabindex.word + 2}
                                            error={errors.translation}
                                            label="Translation"
                                            required={true}
                                            {...field}
                                        />
                                    );
                                }}
                                name="translation"
                                control={control}
                            />
                        </SFormRow>
                        <SFormRow>
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
                            />
                        </SFormRow>
                        <SFormRow>
                            <Controller
                                render={({ field }) => {
                                    return (
                                        <FormSelectField
                                            {...field}
                                            id={tabindex.word + 5}
                                            error={errors.category}
                                            label="Category"
                                            options={categories}
                                            loading={isLoadingCat}
                                            noOptionsMessage="No categories"
                                            isClearable={true}
                                            required={true}
                                            onCreateOption={
                                                handleCreateCategory
                                            }
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
                                            {...field}
                                            id={tabindex.word + 6}
                                            error={errors.tags}
                                            label="Tags"
                                            isMulti={true}
                                            options={tags}
                                            loading={isLoadingTags}
                                            noOptionsMessage="No tags"
                                            isClearable={true}
                                            required={true}
                                            onCreateOption={handleCreateTag}
                                        />
                                    );
                                }}
                                name="tags"
                                control={control}
                            />
                        </SFormRow>
                    </div>

                    <Wrapper offset={["bottom-0"]}>
                        <ButtonForm
                            tabIndex={tabindex.word + 7}
                            disabled={!isValid}
                        >
                            {type === "add" ? "Add word" : "Save word"}
                        </ButtonForm>
                    </Wrapper>
                </BlockForm>
            </form>
        </SWordForm>
        // <DevTool control={control} />
    );
};

const SWordForm = styled.div`
    background-color: ${colors?.bg_light};
    padding: ${spacings?.offset_20} ${spacings?.offset_20};
    margin-bottom: ${spacings?.offset_20};
`;

export default WordForm;
