import React from "react";
import styled from "styled-components";

import { Header } from "@components/header";
import { spacings } from "@styles/vars";

interface Layout {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
    return (
        <SLayout>
            <SBlock>
                <Header />
                <SMain>{children}</SMain>
            </SBlock>
        </SLayout>
    );
};

const SLayout = styled.div``;
const SBlock = styled.div``;
const SMain = styled.main`
    min-height: 100vh;
    margin: 0 0 ${spacings?.offset_120} 0;
`;

export default Layout;
