import React, { Children, memo } from "react";
import PT from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLink {
    activeClassName?: string;
    children: any;
    href: string;
    as?: string;
}

let ActiveLink: React.FC<ActiveLink> = ({
    children,
    activeClassName = "active",
    ...props
}) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || "";

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link href={props.href}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
