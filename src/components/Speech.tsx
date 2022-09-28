import styled from "styled-components";
import { IconVolumeHigh } from "@icons";

import { colors } from "@styles/vars";

interface SpeechProps {
    text: string;
}

function getRandomNum(min: number, max: number) {
    const items = Array(1, 2, 3, 4, 5);
    return items[Math.floor(Math.random() * items.length)];
}

const Speech: React.FC<SpeechProps> = ({ text }) => {
    const msg = new SpeechSynthesisUtterance();

    const speechHandler = () => {
        const voices = window.speechSynthesis.getVoices();

        for (let i = 0; i < voices.length; i++) {
            console.log(voices[i]);
        }

        msg.text = text;
        msg.voice = voices[getRandomNum(1, 50)];
        window.speechSynthesis.speak(msg);
        console.log(getRandomNum(1, 50).toFixed(0));
    };

    return (
        <SSpeech onClick={() => speechHandler()}>
            <IconVolumeHigh />
        </SSpeech>
    );
};

const SSpeech = styled.button`
    background: 0;
    border: 0;
    padding: 0;
    width: 1.5em;
    height: 1.5em;
    color: ${colors?.typo_primary};
    cursor: pointer;
    &:hover {
        color: ${colors?.typo_link};
    }
    svg {
        width: 100%;
    }
`;

export default Speech;
