import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import 'react-native-reanimated';
import '../i18n';

export default function RootLayout() {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: t('navigation.main') }} />
        <Stack.Screen name="notesForm" options={{ title: t('navigation.addNotes') }} />
        <Stack.Screen name="noteDetails" options={{ title: t('navigation.noteDetails') }} />
        <Stack.Screen name="settings" options={{ title: t('navigation.settings') }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
