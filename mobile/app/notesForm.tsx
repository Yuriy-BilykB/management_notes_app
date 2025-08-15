import { View, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import NotesForm from '@/components/NotesForm';

export default function NotesFormPage() {
    const { t } = useTranslation()
    const { editNote } = useLocalSearchParams()
    const isEditing = !!editNote

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <NotesForm />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
});
