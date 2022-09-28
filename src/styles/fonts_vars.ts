import { createGlobalStyle } from "styled-components";

const FontsVarsStyle = createGlobalStyle`
    :root {
        --ff-base: "Stratos", sans-serif;
        --ff-serif: "SourceSerif4", serif;
        --ff-mono: "CocoSharp", monospace;
        /* ------------------ */
        --fw-bold: 700;
        --fw-medium: 500;
        --fw-regular: 400;
        --fw-light: 200;
        /* ------------------ */
        --fs-14: 0.875em;
        --fs-16: 1em;
        --fs-18: 1.125em;
        --fs-20: 1.250em;
        --fs-22: 1.375em;
        --fs-24: 24px;
        --fs-28: 1.500em;
        --fs-30: 1.875em;
        --fs-32: 2.000em;
        --fs-44-tiny: 2.750em;
        --fs-48: 3.000em;
        --fs-64: 4.000em;
    }
`;

export const fonts = {
    ff_base: "var(--ff-base)",
    ff_serif: "var(--ff-serif)",
    ff_mono: "var(--ff-mono)",
    /* ------------------ */
    fw_light: "var(--fw-light)",
    fw_regular: "var(--fw-regular)",
    fw_medium: "var(--fw-medium)",
    fw_bold: "var(--fw-bold)",
    /* ------------------ */
    fs_14: "var(--fs-14)",
    fs_16: "var(--fs-16)",
    fs_18: "var(--fs-18)",
    fs_20: "var(--fs-20)",
    fs_22: "var(--fs-22)",
    fs_24: "var(--fs-24)",
    fs_28: "var(--fs-28)",
    fs_30: "var(--fs-30)",
    fs_32: "var(--fs-32)",
    fs_48_tiny: "var(--fs-44-tiny)",
    fs_48: "var(--fs-48)",
    fs_64: "var(--fs-64)",
};

export default FontsVarsStyle;
