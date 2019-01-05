import { HighContrastSelector } from "@styling/styles";
import {getGlobalClassNames} from "@styling/styles/getGlobalClassNames";
import {IOfficeOverlayStyleProps, IOfficeOverlayStyles} from "./OfficeOverlay.types";

const GlobalClassNames = {
    root: "ms-Overlay",
    rootDark: "ms-Overlay--dark"
};

export const getStyles = (props: IOfficeOverlayStyleProps): IOfficeOverlayStyles => {
    const { theme, isNone, isDark } = props;

    const { palette } = theme;

    const classNames = getGlobalClassNames(GlobalClassNames, theme);

    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: "absolute",

                selectors: {
                    [HighContrastSelector]: {
                        border: "1px solid WindowText"
                    }
                }
            },

            isNone && {
                visibility: "hidden"
            },

            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40
                }
            ]
        ]
    };
};