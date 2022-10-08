import React from "react";
import styled from "styled-components";

import { Header } from "@components/header";
import { HEADER_TYPES } from "@components/header/Header";
import { spacings, global } from "@styles/vars";

interface Layout {
    children: React.ReactNode;
    header_type?: HEADER_TYPES;
}

const Layout: React.FC<Layout> = ({ children, header_type }) => {
    return (
        <SLayout>
            <Header header_type={header_type} />
            <SMain>{children}</SMain>
        </SLayout>
    );
};

const SLayout = styled.div`
    min-height: 100vh;
`;
const SMain = styled.main`
    padding: ${spacings?.offset_20} 0 ${spacings?.offset_120} 0;
    min-height: calc(100vh - ${global?.header_height});
`;

export default Layout;
