import React from "react";

import { SuccessForm } from "@components/form";
import { Wrapper } from "@components/layout";

interface BlockFormProps {
    children: React.ReactNode;
    success: boolean;
    success_icon: React.ReactNode;
    success_title: string;
    success_text: string;
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
                <Wrapper offset={["top-20"]}>
                    <SuccessForm
                        icon={success_icon}
                        title={success_title}
                        text={success_text}
                    />
                </Wrapper>
            ) : (
                <Wrapper offset={["top-10"]}>{children}</Wrapper>
            )}
        </div>
    );
};

export default BlockForm;
