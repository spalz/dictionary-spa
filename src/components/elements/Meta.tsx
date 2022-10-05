import React from "react";
import Head from "next/head";

interface MetaProps {
    title: string;
    og_image?: string;
    og_url?: string;
    name?: string;
    description?: string;
    part?: string;
    published_time?: string;
    modified_time?: string;
    author?: string;
}

const Meta: React.FC<MetaProps> = ({
    title,
    og_url,
    description,
    published_time,
    modified_time,
    part = " - Lexicon life",
    name = "Lexicon life",
    og_image = `${process.env.NEXT_PUBLIC_API_URL}/images/meta_global.jpg`,
    author = "Yuriy Repin",
}) => {
    return (
        <Head>
            <title>{`${title ? title : "Загрузка"} ${part}`}</title>
            <meta
                name="viewport"
                content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no"
            />
            <meta property="og:type" content="website" />
            <meta property="og:type" content={"website"} />
            <meta property="og:site_name" content={name} />
            <meta property="og:title" content={title} />
            {description ? (
                <meta property="og:description" content={description} />
            ) : null}
            {og_image ? <meta property="og:image" content={og_image} /> : null}
            {og_image ? (
                <meta property="og:image:secure_url" content={og_image} />
            ) : null}
            {og_image ? (
                <meta property="og:image:width" content={"1200px"} />
            ) : null}
            {og_image ? (
                <meta property="og:image:height" content={"630px"} />
            ) : null}

            {published_time ? (
                <meta
                    property="article:published_time"
                    content={published_time}
                />
            ) : null}
            {modified_time ? (
                <meta
                    property="article:modified_time"
                    content={modified_time}
                />
            ) : null}
            {modified_time ? (
                <meta property="og:updated_time" content={modified_time} />
            ) : null}
            {modified_time ? (
                <meta property="og:updated_time" content={modified_time} />
            ) : null}
            <meta name="author" content={author} />
            {og_url ? <meta property="og:url" content={og_url} /> : null}
            {og_url ? <link rel="canonical" href={og_url} /> : null}
            {description ? (
                <meta name="description" content={description} />
            ) : null}
            <meta name="twitter:site" content={"@aarlevian"} />
            <meta name="twitter:title" content={title} />
            {description ? (
                <meta name="twitter:description" content={description} />
            ) : null}
            <meta name="twitter:card" content={"summary_large_image"} />
            <meta name="twitter:image" content={`${og_image}`} />
            <meta name="telegram:channel" content={"@ideaca"} />
        </Head>
    );
};

export default Meta;
