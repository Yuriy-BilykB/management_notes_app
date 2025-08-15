import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface LoadingStateProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

export default function LoadingState({ 
  message = 'Loading...', 
  size = 'large',
  color = Colors.light.primary 
}: LoadingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.light.gray[600],
    textAlign: 'center',
  },
});
