import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'
import { getNoteById } from '@/services/notesServices'
import { INote } from '@/interfaces/INote'
import Note from '@/components/Note'
import Header from '@/components/Header'

export default function NoteDetails() {
    const { id } = useLocalSearchParams()
    const [note, setNote] = useState<INote | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchNote = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await getNoteById(Number(id))
                setNote(response)
            } catch (err) {
                console.error('Error fetching note:', err)
                setError('Failed to load note')
            } finally {
                setLoading(false)
            }
        }
        fetchNote()
    }, [id])

    if (loading) {
        return (
            <View style={styles.container}>
                <Header title="Loading..." showBack={true} />
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <Text style={styles.loadingText}>Loading note...</Text>
                </View>
            </View>
        )
    }

    if (error || !note) {
        return (
            <View style={styles.container}>
                <Header title="Error" showBack={true} />
                <View style={styles.errorContainer}>
                    <Text style={styles.errorIcon}>⚠️</Text>
                    <Text style={styles.errorTitle}>Note not found</Text>
                    <Text style={styles.errorSubtitle}>
                        The note you&apos;re looking for doesn&apos;t exist or has been deleted.
                    </Text>
                    <TouchableOpacity 
                        style={styles.retryButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.retryButtonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Note note={note} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#6c757d',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 60,
    },
    errorIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    errorTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
        textAlign: 'center',
    },
    errorSubtitle: {
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
    },
    retryButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    retryButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});