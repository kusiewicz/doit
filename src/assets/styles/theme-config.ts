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
  | 'checkbox'
  | 'logo'
  | 'authBackground'
  | 'authBorder'
  | 'socialBtn'
  | 'socialBtnHover'
  | 'dividerTextColor'
  | 'submitBtn'
  | 'submitBtnHover'
  | 'authText'
  | 'authSwitch'
  | 'error'
  | 'homeText'
  | 'homeHover'
  | 'pickerTheme'
  | 'addTaskBtn'
  | 'navbar'
  | 'loginHover'
  | 'menuBackground'
  | 'dateText'
  | 'addTaskText'
  | 'bookmarkHover'
  | 'editorBorder'
  | 'editorCancelBackground'
  | 'editorCancelText'
  | 'incomingIcon'
  | 'todayIcon'
  | 'tomorrowIcon'
  | 'emptyStateText'
  | 'navText'
  | 'buttonText'
  | 'pickerBorder';

type BaseColors =
  | 'White100'
  | 'White200'
  | 'Black100'
  | 'White300'
  | 'Grey200'
  | 'Grey300'
  | 'Grey500'
  | 'Red100'
  | 'Green100'
  | 'Blue100'
  | 'Purple100'
  | 'Orange100'
  | 'Grey400'
  | 'Orange200'
  | 'Red200'
  | 'Red300'
  | 'Grey100'
  | 'Red400'
  | 'Grey600'
  | 'Black200'
  | 'Grey700'
  | 'White400';

type Device = 'mobile' | 'desktop' | 'tablet';

type Spacing = 'xxsmall' | 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge';

interface Theme {
  fontSize: { [key in FontSize]: string };
  fontWeight: { [key in FontWeight]: string };
  baseColors: { [key in BaseColors]: string };
  colors: { [key in Colors]: string };
  deviceBreakpoint: { [key in Device]: string };
  spacing: { [key in Spacing]: string };
}

const baseColors: { [key in BaseColors]: string } = {
  Black100: '#000',
  Black200: '#1F1F1F',
  White100: '#FFF',
  White200: '#f2f6f7',
  White300: '#FAFAFA',
  White400: '#F2F2F2',
  Grey100: '#E3E7E8',
  Grey200: 'grey',
  Grey300: '#CCCCCC',
  Grey400: '#A8A5A4',
  Grey600: '#6C777A',
  Grey500: '#808080',
  Grey700: '#575757',
  Red100: '#FD891C',
  Red200: '#D1493B',
  Red300: '#E44232',
  Red400: '#E36F02',
  Orange100: '#EB8909',
  Orange200: '#AD6200',
  Green100: '#058236',
  Blue100: '#246FE0',
  Purple100: '#692FC2',
};

const colors: { [key in Colors]: string } = {
  lowPriority: baseColors.Blue100,
  mediumPriority: baseColors.Orange100,
  highPriority: baseColors.Red200,
  placeholder: baseColors.Grey400,
  buttonToday: baseColors.Green100,
  buttonTomorrow: baseColors.Orange200,
  buttonWeek: baseColors.Purple100,
  buttonAnother: baseColors.Grey500,
  hoveredPicker: baseColors.White200,
  description: baseColors.Grey400,
  taskBorder: baseColors.White200,
  checkbox: baseColors.Grey200,
  logo: baseColors.Red100,
  authBackground: baseColors.White300,
  authBorder: baseColors.Grey300,
  socialBtn: baseColors.White200,
  socialBtnHover: baseColors.Grey100,
  dividerTextColor: baseColors.Grey400,
  submitBtn: baseColors.Red100,
  submitBtnHover: baseColors.Red400,
  authText: baseColors.Grey600,
  authSwitch: baseColors.Red100,
  error: baseColors.Red100,
  homeText: baseColors.Black200,
  homeHover: baseColors.White400,
  pickerTheme: baseColors.Red100,
  addTaskBtn: baseColors.Red100,
  navbar: baseColors.Red100,
  loginHover: baseColors.Grey300,
  menuBackground: baseColors.White300,
  dateText: baseColors.Grey500,
  addTaskText: baseColors.Grey500,
  bookmarkHover: baseColors.Grey300,
  editorBorder: baseColors.Grey300,
  editorCancelBackground: baseColors.White100,
  editorCancelText: baseColors.Black100,
  incomingIcon: baseColors.Purple100,
  todayIcon: baseColors.Blue100,
  tomorrowIcon: baseColors.Green100,
  emptyStateText: baseColors.Grey500,
  navText: baseColors.White100,
  buttonText: baseColors.White100,
  pickerBorder: baseColors.Grey300,
};

const deviceBreakpoint: { [key in Device]: string } = {
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
  deviceBreakpoint,
  spacing,
};
