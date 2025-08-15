
import { Link } from 'expo-router';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import NotesList from '@/components/NotesLIst';

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>📝 {t('navigation.notes')}</Text>
          <Link href="/settings" asChild>
            <TouchableOpacity style={styles.settingsButton}>
              <Text style={styles.settingsIcon}>⚙️</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Text style={styles.headerSubtitle}>{t('home.subtitle')}</Text>
      </View>

      <View style={styles.notesContainer}>
        <NotesList />
      </View>
      <View style={styles.fabContainer}>
      <Link href="/notesForm">
        <Text style={styles.fabText} testID="add-note-button">+</Text>
      </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  settingsButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  settingsIcon: {
    fontSize: 24,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '500',
  },
  notesContainer: {
    flex: 1,
    paddingTop: 16,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    height: '100%',
    color: 'white',
    fontSize: 36,
    fontWeight: '200',  
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    lineHeight: 36,
  },
});
