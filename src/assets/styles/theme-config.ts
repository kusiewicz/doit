import {
  MOBILE_DEVICE_BREAKPOINT,
  TABLET_DEVICE_BREAKPOINT,
  DESKTOP_DEVICE_BREAKPOINT,
} from '../../constants/devices';

type FontSize = 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';

type FontWeight = 'light' | 'normal' | 'bold';

type Colors = 'lowPriority' | 'mediumPriority' | 'highPriority';

type BaseColors =
  | 'white'
  | 'black'
  | 'lightGrey'
  | 'grey'
  | 'red'
  | 'lightGreen'
  | 'blue'
  | 'purple';

type Device = 'mobile' | 'desktop' | 'tablet';

type Spacing = 'xxsmall' | 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge';

interface Theme {
  fontSize: { [key in FontSize]: string };
  fontWeight: { [key in FontWeight]: string };
  baseColors: { [key in BaseColors]: string };
  colors: { [key in Colors]: string };
  device: { [key in Device]: string };
  spacing: { [key in Spacing]: string };
}

const baseColors: { [key in BaseColors]: string } = {
  black: '#000',
  white: '#FFF',
  lightGrey: '#FAFAFA',
  grey: '#E9E9E9',
  red: '#DB4C3F',
  lightGreen: '#058236',
  blue: '#246FE0',
  purple: '#692FC2',
};

const colors: { [key in Colors]: string } = {
  lowPriority: '#246FE0',
  mediumPriority: '#EB8909',
  highPriority: '#D1493B',
};

const device: { [key in Device]: string } = {
  mobile: `${MOBILE_DEVICE_BREAKPOINT}px`,
  tablet: `${TABLET_DEVICE_BREAKPOINT}px`,
  desktop: `${DESKTOP_DEVICE_BREAKPOINT}px`,
};

const spacing: { [key in Spacing]: string } = {
  xxsmall: '3px',
  xsmall: '5px',
  small: '8px',
  normal: '10px',
  large: '15px',
  xlarge: '20px',
  xxlarge: '25px',
};

export const theme: Theme = {
  fontSize: {
    xsmall: '11px',
    small: '14px',
    normal: '16px',
    large: '18px',
    xlarge: '21px',
  },
  fontWeight: {
    light: '100',
    normal: '300',
    bold: '400',
  },
  baseColors,
  colors,
  device,
  spacing,
};
