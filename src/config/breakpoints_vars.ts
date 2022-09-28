interface arrayProps {
    [index: string]: number;
}

export const grid: arrayProps = {
    xs: 0,
    es: 362,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xga: 1460,
};

export const grid_down: arrayProps = {
    xs: grid.es - 0.02,
    es: grid.sm - 0.02,
    sm: grid.md - 0.02,
    md: grid.lg - 0.02,
    lg: grid.xl - 0.02,
    xl: grid.xga - 0.02,
};

export const container: arrayProps = {
    xs: 352,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xga: 1380,
};

export const up = (min: string) => `@media (min-width: ${grid[min]}px)`;
export const down = (max: string) => `@media (max-width: ${grid_down[max]}px)`;
export const only = (val: string) =>
    `@media (max-width: ${grid_down[val]}px) and (min-width: ${grid[val]}px)`;
