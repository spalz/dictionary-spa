export interface WordProps {
    id?: number;
    attributes: WordAttributesProps;
}

export interface WordAttributesProps {
    createdAt?: string;
    publishedAt?: string;
    word: string;
    translation: string;
    example?: string;
    example_traslation?: string;
    categories?: {
        data: Array<CategoryProps>;
    };
    tags?: {
        data: Array<TagProps>;
    };
}

export interface CategoryProps {
    id: number;
    attributes: CategoryAttributesProps;
}

export interface CategoryAttributesProps {
    title: string;
    words: {
        data: Array<WordAttributesProps>;
    };
}

export interface TagProps {
    id: number;
    attributes: TagAttributesProps;
}

export interface TagAttributesProps {
    title: string;
}
