import React from "react";
import Link from "next/link";

import BaseButton from "./BaseButton";

interface LinkButton {
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
