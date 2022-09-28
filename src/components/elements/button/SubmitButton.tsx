import React from "react";

import BaseButton from "./BaseButton";
import { reset_button_style } from "./button_styles";

interface Button {
    onClick: () => void;
}

const SubmitButton: React.FC<Button> = ({ onClick, ...another }) => {
    return (
        <button style={reset_button_style} type="submit" onClick={onClick}>
            <BaseButton {...another} />
        </button>
    );
};

export default SubmitButton;
