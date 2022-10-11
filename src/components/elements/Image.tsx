import React from "react";
import { position } from "polished";
import styled from "styled-components";

import { grid, BREAKPOINT } from "@config/breakpoints_vars";

type Sizes = {
    [key in BREAKPOINT]?: {
        avif?: string;
        webp?: string;
        src: string;
        width: number;
    };
};

interface ImageProps {
    type?: "absolute" | "block";
    object_fit?: "cover" | "contain";
    avif?: string;
    webp?: string;
    src: string;
    width: number;
    alt?: string;
    sizes?: Sizes;
}

export const Source = (
    image: string,
    size?: number,
    type?: "jpeg" | "webp" | "gif" | "jpeg" | "avif"
): any => {
    const file_type = image?.split("?")[0].split(".").pop();
    return image ? (
        <source
            media={size ? `(max-width: ${size}px)` : undefined}
            srcSet={image}
            type={`image/${type ? type : file_type}`}
        />
    ) : null;
};

const Image: React.FC<ImageProps> = ({
    src,
    webp,
    avif,
    alt,
    type = "absolute",
    sizes, // xl - sm
    object_fit = "cover",
}: ImageProps) => {
    const GLOBAL_SRCSET = sizes
        ? `
        ${sizes?.sm && `${sizes.sm.src} ${sizes.sm.width}w,`}
        ${sizes?.md && `${sizes.md.src} ${sizes.md.width}w,`}
        ${sizes?.lg && `${sizes.lg.src} ${sizes.lg.width}w,`}
        ${sizes?.xl && `${sizes.xl.src} ${sizes.xl.width}w,`}
        ${sizes?.xga && `${sizes.xga.src} ${sizes.xga.width}w`}`
        : undefined;
    const GLOBAL_SIZES = sizes
        ? `
        ${sizes?.sm && `(max-width:${grid.sm}px) ${grid.sm}px,`}
        ${sizes?.md && `(max-width:${grid.md}px) ${grid.md}px,`}
        ${sizes?.lg && `(max-width:${grid.lg}px) ${grid.lg}px,`}
        ${sizes?.xl && `(max-width:${grid.xl}px) ${grid.xl}px,`}
        ${sizes?.xga && `(max-width:${grid.xga}px) ${grid.xga}px`}`
        : undefined;
    return (
        <SPicture className={`${type} ${object_fit}`}>
            {/* avif */}
            {Source(sizes?.sm?.avif as string, grid.sm, "avif")}
            {Source(sizes?.md?.avif as string, grid.md, "avif")}
            {Source(sizes?.lg?.avif as string, grid.lg, "avif")}
            {Source(sizes?.xl?.avif as string, grid.xl, "avif")}
            {Source(sizes?.xga?.avif as string, grid.xga, "avif")}
            {Source(avif as string, undefined, "avif")}
            {/* webp */}
            {Source(sizes?.sm?.webp as string, grid.sm, "webp")}
            {Source(sizes?.md?.webp as string, grid.md, "webp")}
            {Source(sizes?.lg?.webp as string, grid.lg, "webp")}
            {Source(sizes?.xl?.webp as string, grid.xl, "webp")}
            {Source(sizes?.xga?.webp as string, grid.xga, "webp")}
            {Source(webp as string, undefined, "webp")}
            {/* img */}
            {Source(sizes?.sm?.src as string, grid.sm)}
            {Source(sizes?.md?.src as string, grid.md)}
            {Source(sizes?.lg?.src as string, grid.lg)}
            {Source(sizes?.xl?.src as string, grid.xl)}
            {Source(sizes?.xga?.src as string, grid.xga)}
            {Source(src, undefined)}
            <SImg
                srcSet={GLOBAL_SRCSET ? GLOBAL_SRCSET : undefined}
                sizes={GLOBAL_SIZES ? GLOBAL_SIZES : undefined}
                src={src}
                alt={alt}
            />
        </SPicture>
    );
};

const SPicture = styled.picture`
    transition: all 0.3s;
    &.absolute {
        ${position("absolute", "0", null, null, "0")};
        width: 100%;
        height: 100%;
        img,
        source {
            ${position("absolute", "0", null, null, "0")};
            width: 100%;
            height: 100%;
        }
    }
    &.cover {
        img,
        source {
            object-fit: cover;
            object-position: top center;
        }
    }
    &.contain {
        img {
            object-fit: contain;
        }
    }
    &.block {
        display: block;
        img,
        source {
            display: block;
        }
    }
`;

const SImg = styled.img``;

export default Image;
