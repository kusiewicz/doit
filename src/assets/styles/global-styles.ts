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
                background: ${({ theme }) => theme.colors.pickerTheme};
            }
        }
        &.ant-picker-cell-today {
            .ant-picker-cell-inner::before {
                border: 1px solid ${({ theme }) => theme.colors.pickerTheme};
                border-radius: 50px;
            }
        }
    }

    .ant-picker-header-view {
        button:hover {
            color: ${({ theme }) => theme.colors.pickerTheme};
        }
    }

    .ant-select-item-option-content {
        display: flex;
        align-items: center;
        padding: 4px 10px;
    }

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background: none;
    }

    .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
    .ant-select:not(.ant-select-customize-input) .ant-select-selector,
    .ant-select-dropdown,
    .ant-select-item,
    .ant-select-selection-item {
    padding: 0;
    }
`;
