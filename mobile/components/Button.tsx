import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
  testID?: string;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
  testID,
}: ButtonProps) {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: any[] = [styles.button, styles[size]];
    
    if (variant === 'primary') {
      baseStyle.push(styles.primary);
    } else if (variant === 'secondary') {
      baseStyle.push(styles.secondary);
    } else if (variant === 'danger') {
      baseStyle.push(styles.danger);
    } else if (variant === 'success') {
      baseStyle.push(styles.success);
    }
    
    if (disabled || loading) {
      baseStyle.push(styles.disabled);
    }
    
    if (fullWidth) {
      baseStyle.push(styles.fullWidth);
    }
    
    return baseStyle as unknown as ViewStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: any[] = [styles.text, styles[`${size}Text`]];
    
    if (variant === 'primary') {
      baseStyle.push(styles.primaryText);
    } else if (variant === 'secondary') {
      baseStyle.push(styles.secondaryText);
    } else if (variant === 'danger') {
      baseStyle.push(styles.dangerText);
    } else if (variant === 'success') {
      baseStyle.push(styles.successText);
    }
    
    if (disabled || loading) {
      baseStyle.push(styles.disabledText);
    }
    
    return baseStyle as unknown as TextStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      testID={testID || `button-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'secondary' ? Colors.light.gray[700] : Colors.light.white} 
        />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 36,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 48,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 56,
  },
  
  primary: {
    backgroundColor: Colors.light.primary,
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  secondary: {
    backgroundColor: Colors.light.gray[100],
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  danger: {
    backgroundColor: Colors.light.danger,
    shadowColor: Colors.light.danger,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  success: {
    backgroundColor: Colors.light.success,
    shadowColor: Colors.light.success,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  
  disabled: {
    backgroundColor: Colors.light.gray[300],
    shadowOpacity: 0,
    elevation: 0,
  },
  fullWidth: {
    width: '100%',
  },
  
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  
  primaryText: {
    color: Colors.light.white,
  },
  secondaryText: {
    color: Colors.light.gray[700],
  },
  dangerText: {
    color: Colors.light.white,
  },
  successText: {
    color: Colors.light.white,
  },
  disabledText: {
    color: Colors.light.gray[500],
  },
});
