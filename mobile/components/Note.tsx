import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks/useLanguage'
import { INote } from '@/interfaces/INote'

export default function Note({ note }: { note: INote }) {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage();
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const locale = currentLanguage === 'uk' ? 'uk-UA' : 'en-US';
        return date.toLocaleDateString(locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{note.title}</Text>
                    {note.createdAt && (
                        <Text style={styles.date}>
                            {t('note.created')} {formatDate(note.createdAt)}
                        </Text>
                    )}
                    {note.updatedAt && note.updatedAt !== note.createdAt && (
                        <Text style={styles.date}>
                            {t('note.updated')} {formatDate(note.updatedAt)}
                        </Text>
                    )}
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>
                        {note.description || 'No description provided'}
                    </Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.metaInfo}>
                        <Text style={styles.metaText}>📝 {t('note.noteNumber')}{note.id}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    card: {
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
        overflow: 'hidden',
    },
    header: {
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 12,
        lineHeight: 36,
    },
    date: {
        fontSize: 14,
        color: '#6c757d',
        fontWeight: '500',
        marginBottom: 4,
    },
    content: {
        padding: 24,
        minHeight: 200,
    },
    description: {
        fontSize: 16,
        color: '#495057',
        lineHeight: 26,
        textAlign: 'justify',
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
        backgroundColor: '#f8f9fa',
    },
    metaInfo: {
        alignItems: 'center',
    },
    metaText: {
        fontSize: 14,
        color: '#6c757d',
        fontWeight: '500',
    },
});