import React from "react";
import styled from "styled-components";

import { Link } from "@components/elements";
import { PagePrivatPoliceR } from "@utils/routes";
import { colors, fonts } from "@styles/vars";

const PersonalDataForm = () => {
    return (
        <SPolice>
            By clicking on the button, I accept{" "}
            <Link href={PagePrivatPoliceR()} as={PagePrivatPoliceR()}>
                <a target="_blank">the user agreement</a>
            </Link>
        </SPolice>
    );
};

const SPolice = styled.div`
    font-size: ${fonts?.fs_16};
    color: ${colors?.typo_primary};
    a {
        text-decoration: underline;
    }
`;

export default PersonalDataForm;
