import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle = createGlobalStyle<{ theme: any }>`
   * {
       box-sizing: border-box;
   }

   html, body {
        font-family: Roboto;
        height: 100%;
    }

    .ant-picker-cell {
        .ant-picker-cell-inner {
            border-radius: 50px;
        }
    }

    .ant-picker-cell-in-view {
        &.ant-picker-cell-selected {
            .ant-picker-cell-inner {
                background: ${({ theme }) => theme.baseColors.red};
            }
        }
        &.ant-picker-cell-today {
            .ant-picker-cell-inner::before {
                border: 1px solid ${({ theme }) => theme.baseColors.red};
                border-radius: 50px;
            }
        }
    }

    .ant-picker-header-view {
        button:hover {
            color: ${({ theme }) => theme.baseColors.red};
        }
    }
`;
