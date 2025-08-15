const tintColorLight = '#007AFF';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1a1a1a',
    background: '#f8f9fa',
    tint: tintColorLight,
    icon: '#6c757d',
    tabIconDefault: '#6c757d',
    tabIconSelected: tintColorLight,
    primary: '#007AFF',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    border: '#e9ecef',
    shadow: '#000000',
    card: '#ffffff',
    input: '#fafbfc',
    placeholder: '#999999',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#0A84FF',
    secondary: '#9BA1A6',
    success: '#30D158',
    danger: '#FF453A',
    warning: '#FFD60A',
    info: '#64D2FF',
    light: '#2C2C2E',
    dark: '#1C1C1E',
    white: '#FFFFFF',
    gray: {
      100: '#2C2C2E',
      200: '#3A3A3C',
      300: '#48484A',
      400: '#636366',
      500: '#8E8E93',
      600: '#AEAEB2',
      700: '#C7C7CC',
      800: '#D1D1D6',
      900: '#E5E5EA',
    },
    border: '#38383A',
    shadow: '#000000',
    card: '#1C1C1E',
    input: '#2C2C2E',
    placeholder: '#8E8E93',
  },
};

export const getColor = (colorName: keyof typeof Colors.light, isDark?: boolean) => {
  return isDark ? Colors.dark[colorName] : Colors.light[colorName];
};

export const Gradients = {
  primary: ['#007AFF', '#0056CC'],
  success: ['#28a745', '#1e7e34'],
  danger: ['#dc3545', '#c82333'],
  warning: ['#ffc107', '#e0a800'],
  info: ['#17a2b8', '#138496'],
};
