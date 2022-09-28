import React from "react";

import BaseButton from "./BaseButton";
import { reset_button_style } from "./button_styles";

interface Button {
    onClick: () => void;
}

const Button: React.FC<Button> = ({ onClick, ...another }) => {
    return (
        <button type="button" style={reset_button_style} onClick={onClick}>
            <BaseButton {...another} />
        </button>
    );
};

export default Button;
