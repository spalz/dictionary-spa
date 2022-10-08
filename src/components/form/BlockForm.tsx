import React from "react";

import { SuccessForm } from "@components/form";

interface BlockFormProps {
    children: React.ReactNode;
    success: boolean;
    success_icon?: React.ReactNode;
    success_title?: string;
    success_text?: string;
}

const BlockForm: React.FC<BlockFormProps> = ({
    children,
    success = false,
    success_icon,
    success_title,
    success_text,
}) => {
    return (
        <div>
            {success ? (
                <SuccessForm
                    icon={success_icon}
                    title={success_title}
                    text={success_text}
                />
            ) : (
                children
            )}
        </div>
    );
};

export default BlockForm;
