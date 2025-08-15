import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import LanguageSelector from '@/components/LanguageSelector';

export default function SettingsPage() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <LanguageSelector />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
});
