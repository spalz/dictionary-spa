import React from "react";
import styled from "styled-components";

import { Header } from "@components/header";
import { spacings, global } from "@styles/vars";

interface Layout {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
    return (
        <SLayout>
            <Header />
            <SMain>{children}</SMain>
        </SLayout>
    );
};

const SLayout = styled.div`
    min-height: 100vh;
`;
const SMain = styled.main`
    margin: 0 0 ${spacings?.offset_120} 0;
    min-height: calc(100vh - ${global?.header_height});
`;

export default Layout;
