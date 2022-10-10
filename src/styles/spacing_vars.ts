import { createGlobalStyle } from "styled-components";

import { down, up } from "@config/breakpoints_vars";

export const spacings = {
    offset_wrapper: "var(--offset-wrapper)",
    offset_wrapper_minus: "var(--offset-wrapper-minus)",
    offset_120: "var(--offset-120)",
    offset_80: "var(--offset-80)",
    offset_40: "var(--offset-40)",
    offset_20: "var(--offset-20)",
    offset_10: "var(--offset-10)",
    offset_5: "var(--offset-5)",

    spacing_card_large: "var(--spacing-card-large)",
    spacing_card_large_minus: "var(--spacing-card-large-minus)",
    spacing_card_small: "var(--spacing-card-small)",
    spacing_card_small_minus: "var(--spacing-card-small-minus)",
    spacing_card_tiny: "var(--spacing-card-tiny)",
    spacing_card_tiny_minus: "var(--spacing-card-tiny-minus)",
};

const SpacingVarsStyle = createGlobalStyle`
    :root {
        --offset-wrapper: 60px;
        --offset-wrapper-minus: -60px;
        ${up("xl")} {
            --offset-120: 150px;
            --offset-80: 80px;
            --offset-40: 50px;
            --offset-20: 25px;
            --offset-10: 15px;
            --offset-5: 10px;
        }
        ${down("xl")} {
            --offset-120: 120px;
            --offset-80: 60px;
            --offset-40: 40px;
            --offset-20: 20px;
            --offset-10: 15px;
            --offset-5: 10px;
        }
        ${down("lg")} {
        }
        ${down("sm")} {
            --offset-wrapper: 8.76vw;
            --offset-wrapper-minus: -8.76vw;
            --offset-120: 17.5vw;
            --offset-80: 8.76vw;
            --offset-40: 6.76vw;
            --offset-20: 5.76vw;
            --offset-10: 4.1vw;
            --offset-5: 3.1vw;
        }
        ${down("es")} {
            --offset-wrapper: 4.76vw;
            --offset-wrapper-minus: -4.76vw;
        }

        --spacing-card-large: 40px;
        --spacing-card-small: 20px;
        --spacing-card-tiny: 10px;
        --spacing-card-large-minus: -40px;
        --spacing-card-small-minus: -20px;
        --spacing-card-tiny-minus: -10px;
        ${down("sm")} {
            --spacing-card-large: 20px;
        }
    }
`;

export default SpacingVarsStyle;
