import React from "react";

import BaseButton, { BaseButtonProps } from "./BaseButton";
import { reset_button_style } from "./button_styles";

interface Button extends BaseButtonProps {
    onClick?: () => void;
}

const SubmitButton: React.FC<Button> = ({ onClick, ...props }) => {
    return (
        <button style={reset_button_style} type="submit" onClick={onClick}>
            <BaseButton {...props} />
        </button>
    );
};

export default SubmitButton;
