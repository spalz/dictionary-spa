import React from "react";
import PT from "prop-types";
import styled from "styled-components";

import { spacings } from "@styles/vars";
import { up, container } from "@config/breakpoints_vars";

interface Container {
    children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
    return <SContainer>{children}</SContainer>;
};

Container.propTypes = {
    children: PT.any.isRequired,
};

const SContainer = styled.div`
    width: 100%;
    padding-right: ${spacings?.offset_wrapper};
    padding-left: ${spacings?.offset_wrapper};
    margin-right: auto;
    margin-left: auto;
    ${up("sm")} {
        max-width: ${container?.sm}px;
    }
    ${up("md")} {
        max-width: ${container?.md}px;
    }
    ${up("lg")} {
        max-width: ${container?.lg}px;
    }
    ${up("xl")} {
        max-width: ${container?.xl}px;
    }
    ${up("xga")} {
        max-width: ${container?.xga}px;
    }
`;

export default Container;
