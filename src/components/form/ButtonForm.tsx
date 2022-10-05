import React from "react";

import { SubmitButton } from "@components/elements";
import { BaseButtonProps } from "@components/elements/button/BaseButton";

interface ButtonFormProps extends BaseButtonProps {
    tabIndex?: number;
    isSubmitting?: boolean;
    isValid?: boolean;
}

const ButtonForm: React.FC<ButtonFormProps> = ({
    tabIndex,
    isSubmitting,
    ...props
}) => {
    return (
        <SubmitButton
            style="primary"
            loading={isSubmitting}
            tabIndex={tabIndex}
            block
            size="large"
            {...props}
        />
    );
};

export default ButtonForm;
