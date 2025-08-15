import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.text,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
    lineHeight: 28,
  },
  bodyText: {
    fontSize: 16,
    color: Colors.light.gray[700],
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    color: Colors.light.gray[600],
    lineHeight: 20,
  },
  smallText: {
    fontSize: 12,
    color: Colors.light.gray[500],
    lineHeight: 16,
  },
  
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardLarge: {
    backgroundColor: Colors.light.card,
    borderRadius: 20,
    padding: 24,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonPrimary: {
    backgroundColor: Colors.light.primary,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonSecondary: {
    backgroundColor: Colors.light.gray[100],
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.white,
  },
  buttonTextSecondary: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.gray[700],
  },
  
  input: {
    borderWidth: 2,
    borderColor: Colors.light.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: Colors.light.input,
    color: Colors.light.text,
  },
  inputFocused: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.white,
  },
  
  header: {
    backgroundColor: Colors.light.white,
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  padding: {
    padding: 20,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  margin: {
    margin: 20,
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
  marginVertical: {
    marginVertical: 20,
  },
  
  shadowSmall: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMedium: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  shadowLarge: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  
  border: {
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  borderRadius: {
    borderRadius: 12,
  },
  borderRadiusLarge: {
    borderRadius: 16,
  },
  borderRadiusXLarge: {
    borderRadius: 20,
  },
});

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  display: 32,
};

export const FontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};
