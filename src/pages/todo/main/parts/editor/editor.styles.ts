import styled, { css } from 'styled-components';
import { Button as ButtonBase } from '@parts/button/button';
import { Select as SelectBase } from 'antd';
import { ReactComponent as PriorityIconBase } from '@assets/icons/priority-flag.svg';
import { ReactComponent as CheckmarkBase } from '@assets/icons/checkmark.svg';

const Textbox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.baseColors.grey};
  padding: ${({ theme }) => theme.spacing.normal};
  position: relative;
  box-sizing: content-box;

  :focus-within {
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

const Header = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Title = styled.textarea`
  height: 21px;
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  overflow: hidden;
  letter-spacing: 0.5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

const Description = styled(Title)`
  height: 35px;
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const Add = styled(ButtonBase)<{ disabled: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: ${({ theme }) => theme.spacing.normal};
  margin-top: ${({ theme }) => theme.spacing.normal};

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Cancel = styled(ButtonBase)`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.baseColors.black};
  background-color: ${({ theme }) => theme.baseColors.white};
  border: 1px solid ${({ theme }) => theme.baseColors.grey};
  text-align: center;
  width: 65px;
  margin-top: ${({ theme }) => theme.spacing.normal};
`;

const Select = styled(SelectBase)`
  .ant-select-arrow {
    display: none;
  }
  position: absolute;
  bottom: 0;
  right: 0;
  margin: ${({ theme }) => theme.spacing.normal};
`;

const Option = styled(Select.Option)``;

const PriorityIcon = styled(PriorityIconBase)<{ color: string }>`
  ${({ color }) =>
    color &&
    css`
      --color: ${({ theme }) => theme.colors[color]};
    `};
  vertical-align: middle;
  display: inline-block;
`;

const Priority = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  vertical-align: middle;
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.large};
`;

const Checkmark = styled(CheckmarkBase)``;

export default {
  Textbox,
  Title,
  Description,
  Add,
  Checkmark,
  Cancel,
  Select,
  Option,
  PriorityIcon,
  Priority,
  Header,
};
