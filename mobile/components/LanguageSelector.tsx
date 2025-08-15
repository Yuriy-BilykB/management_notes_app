import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Colors } from '@/constants/Colors';

export default function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: t('settings.english') },
    { code: 'uk', name: t('settings.ukrainian') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings.language')}</Text>
      <Text style={styles.description}>{t('settings.languageDescription')}</Text>
      
      <View style={styles.languageContainer}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageButton,
              currentLanguage === language.code && styles.activeLanguageButton,
            ]}
            onPress={() => changeLanguage(language.code as 'en' | 'uk')}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.languageText,
                currentLanguage === language.code && styles.activeLanguageText,
              ]}
            >
              {language.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: Colors.light.secondary,
    marginBottom: 20,
  },
  languageContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  languageButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.light.border,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  activeLanguageButton: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.primary,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  activeLanguageText: {
    color: 'white',
  },
});
