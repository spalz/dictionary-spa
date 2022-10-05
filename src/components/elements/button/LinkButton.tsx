import React from "react";
import Link from "next/link";

import BaseButton, { BaseButtonProps } from "./BaseButton";

interface LinkButton extends BaseButtonProps {
    href: string;
    as?: string;
}

const LinkButton: React.FC<LinkButton> = ({ href, as, ...another }) => {
    return (
        <Link type="submit" href={href} as={as}>
            <a>
                <BaseButton {...another} />
            </a>
        </Link>
    );
};

export default LinkButton;
