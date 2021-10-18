import * as colors from '../colors';
export declare const DEFAULT_SPACE = 8;
export declare const theme: {
    palette: {
        primary: string;
        secondary: string;
        error: string;
        divider: string;
        common: {
            black: string;
            white: string;
        };
        colors: typeof colors;
    };
    spacing: (x: number) => number;
    zIndex: {
        modal: number;
        tooltip: number;
    };
};
