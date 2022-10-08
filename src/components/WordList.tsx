import React from "react";
import styled from "styled-components";

import Word from "@components/Word";

import { WordProps } from "@interfaces";

interface WordListProps {
    words?: Array<WordProps>;
    isLoading?: boolean;
}

const WordList: React.FC<WordListProps> = ({ words, isLoading = false }) => {
    return (
        <SWordList>
            {isLoading ? (
                <div>Loading...</div>
            ) : words?.length ? (
                words.map((item: WordProps) => {
                    return (
                        <Word
                            key={item.id}
                            id={item.id}
                            attributes={item.attributes}
                        />
                    );
                })
            ) : (
                <div>Not words</div>
            )}
        </SWordList>
    );
};

const SWordList = styled.div``;

export default WordList;
