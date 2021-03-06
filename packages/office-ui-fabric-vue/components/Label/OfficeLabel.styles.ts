/*
Taken from https://github.com/OfficeDev/office-ui-fabric-react and slightly modified

License:
    Office UI Fabric React
    Copyright (c) Microsoft Corporation
    All rights reserved.
    MIT License
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ""Software""), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    Note: Usage of the fonts and icons referenced in Office UI Fabric is subject to the terms listed at http://aka.ms/fabric-assets-license
 */

import {IOfficeLabelStyleProps, IOfficeLabelStyles} from "./OfficeLabel.types";
import {HighContrastSelector} from "@styling/styles";

export const getStyles = (props: IOfficeLabelStyleProps): IOfficeLabelStyles => {
  const { theme, className, disabled, required } = props;

  return {
    root: [
      "ms-Label",
      theme.fonts.medium,
      {
        color: theme.semanticColors.bodyText,
        boxSizing: "border-box",
        boxShadow: "none",
        margin: 0,
        display: "block",
        padding: "5px 0",
        wordWrap: "break-word",
        overflowWrap: "break-word"
      },
      disabled && {
        color: theme.semanticColors.disabledBodyText,
        selectors: {
          [HighContrastSelector]: {
            color: "GrayText"
          }
        }
      },
      required && {
        selectors: {
          "::after": {
            content: `' *'`,
            color: theme.semanticColors.errorText,
            paddingRight: 12
          }
        }
      },
      className
    ]
  };
};
