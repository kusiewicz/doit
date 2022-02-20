import {
  MOBILE_DEVICE_BREAKPOINT,
  TABLET_DEVICE_BREAKPOINT,
  DESKTOP_DEVICE_BREAKPOINT,
} from '../../constants/devices';

type FontSize = 'xsmall' | 'xxsmall' | 'small' | 'normal' | 'large' | 'xlarge';

type FontWeight = 'light' | 'normal' | 'bold';

type Colors =
  | 'lowPriority'
  | 'mediumPriority'
  | 'highPriority'
  | 'placeholder'
  | 'buttonToday'
  | 'buttonTomorrow'
  | 'buttonWeek'
  | 'buttonAnother'
  | 'hoveredPicker'
  | 'description'
  | 'taskBorder'
  | 'checkbox';

type BaseColors =
  | 'white'
  | 'offWhite'
  | 'black'
  | 'lightGrey'
  | 'basicGrey'
  | 'grey'
  | 'darkGrey'
  | 'red'
  | 'lightGreen'
  | 'blue'
  | 'purple'
  | 'orange'
  | 'ashGrey'
  | 'rust'
  | 'priorityRed';

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
  offWhite: '#F0F0F0',
  lightGrey: '#FAFAFA',
  basicGrey: 'grey',
  orange: '#EB8909',
  rust: '#AD6200',
  grey: '#CCCCCC',
  ashGrey: '#A8A5A4',
  darkGrey: '#808080',
  red: '#DB4C3F',
  priorityRed: '#D1493B',
  lightGreen: '#058236',
  blue: '#246FE0',
  purple: '#692FC2',
};

const colors: { [key in Colors]: string } = {
  lowPriority: baseColors.blue,
  mediumPriority: baseColors.orange,
  highPriority: baseColors.priorityRed,
  placeholder: baseColors.ashGrey,
  buttonToday: baseColors.lightGreen,
  buttonTomorrow: baseColors.rust,
  buttonWeek: baseColors.purple,
  buttonAnother: baseColors.darkGrey,
  hoveredPicker: baseColors.offWhite,
  description: baseColors.ashGrey,
  taskBorder: baseColors.offWhite,
  checkbox: baseColors.basicGrey,
};

const device: { [key in Device]: string } = {
  mobile: `${MOBILE_DEVICE_BREAKPOINT}px`,
  tablet: `${TABLET_DEVICE_BREAKPOINT}px`,
  desktop: `${DESKTOP_DEVICE_BREAKPOINT}px`,
};

const spacing: { [key in Spacing]: string } = {
  xxsmall: '3px',
  xsmall: '5px',
  small: '7px',
  normal: '10px',
  large: '15px',
  xlarge: '20px',
  xxlarge: '25px',
};

export const theme: Theme = {
  fontSize: {
    xxsmall: '11px',
    xsmall: '13px',
    small: '14px',
    normal: '16px',
    large: '18px',
    xlarge: '21px',
  },
  fontWeight: {
    light: '100',
    normal: '400',
    bold: '600',
  },
  baseColors,
  colors,
  device,
  spacing,
};
