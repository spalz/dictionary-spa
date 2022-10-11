import React from "react";
import styled from "styled-components";

import { Headline, Textline, Link, Image } from "@components/elements";
import { global } from "@styles/vars";

const MainBanner = () => {
    return (
        <SMainBanner>
            <div>
                <Headline level={1} size="huge" offset={["bottom-0"]}>
                    Lexicon life
                </Headline>
                <Textline size="huge" offset={["bottom-0"]}>
                    Your english dictionary.{" "}
                    <Link href={"/auth/login"}>
                        <a>To begin →</a>
                    </Link>
                </Textline>
                <SBannerBg />

                <SBannerBg>
                    <Image
                        avif="/bg/avif/xga-xl_1460.avif"
                        webp="/bg/webp/xga-xl_1460.webp"
                        src="/bg/png/xga-xl_1460.png"
                        alt="Your personal dictionary of words"
                        type="absolute"
                        object_fit="cover"
                        width={380}
                        sizes={{
                            xl: {
                                avif: "/bg/avif/xga-xl_1460.avif",
                                webp: "/bg/webp/xga-xl_1460.webp",
                                src: "/bg/png/xga-xl_1460.png",
                                width: 900,
                            },
                            lg: {
                                avif: "/bg/avif/lg_1200.avif",
                                webp: "/bg/webp/lg_1200.webp",
                                src: "/bg/png/lg_1200.png",
                                width: 900,
                            },
                            md: {
                                avif: "/bg/avif/md-sm_1126.avif",
                                webp: "/bg/webp/md-sm_1126.webp",
                                src: "/bg/png/md-sm_1126.png",
                                width: 992,
                            },
                        }}
                    />
                </SBannerBg>
            </div>
        </SMainBanner>
    );
};

const SMainBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${global?.header_height};
    height: 55vh;
    text-align: center;
`;

const SBannerBg = styled.div`
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45vh;
`;

export default MainBanner;
