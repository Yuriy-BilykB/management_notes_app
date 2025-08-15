import React, { useState } from 'react';
import { INote } from '@/interfaces/INote';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { deleteNote, getNotes } from '@/services/notesServices';
import { router, useFocusEffect } from 'expo-router';
import LoadingState from './LoadingState';
import EmptyState from './EmptyState';

export default function NotesList() {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage();
    const [notes, setNotes] = useState<INote[]>([]);
    const [loading, setLoading] = useState(true);
    
    const fetchNotes = async () => {
        try {
            setLoading(true);
            const response = await getNotes()
            setNotes(response)
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setLoading(false);
        }
    }
    
    useFocusEffect(
        React.useCallback(() => {
            fetchNotes();
        }, [])
    );

    const handleDelete = (id: number) => {
        Alert.alert(
            t('notes.deleteNote'),
            t('notes.deleteConfirm'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                { 
                    text: t('common.delete'), 
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deleteNote(id)
                            console.log('Note deleted')
                            fetchNotes()
                        } catch (error) {
                            console.error('Error deleting note:', error);
                            Alert.alert(t('common.error'), t('notes.deleteError'));
                        }
                    }
                }
            ]
        )
    }

    const handleEdit = (note: INote) => {
        router.push({
            pathname: '/notesForm',
            params: { editNote: JSON.stringify(note) }
        })
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const locale = currentLanguage === 'uk' ? 'uk-UA' : 'en-US';
        return date.toLocaleDateString(locale, {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    if (loading) {
        return <LoadingState message={t('notes.loading')} />;
    }

    if (notes.length === 0) {
        return (
            <EmptyState
                icon="📝"
                title={t('notes.noNotes')}
                subtitle={t('notes.noNotesDescription')}
                actionText={t('notes.createNote')}
                onAction={() => router.push('/notesForm')}
            />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id?.toString() || ''}
                renderItem={({ item }) => (
                    <View style={styles.noteCard}>
                        <TouchableOpacity 
                            style={styles.noteContent}
                            onPress={() => router.push(`/noteDetails?id=${item.id}`)}
                            activeOpacity={0.7}
                            testID={`note-item-${item.id}`}
                        >
                            <View style={styles.noteHeader}>
                                <Text style={styles.noteTitle} numberOfLines={1}>
                                    {item.title}
                                </Text>
                                {item.createdAt && (
                                    <Text style={styles.noteDate}>
                                        {formatDate(item.createdAt)}
                                    </Text>
                                )}
                            </View>
                            
                            <Text style={styles.noteDescription} numberOfLines={3}>
                                {item.description || 'No description'}
                            </Text>
                        </TouchableOpacity>
                        
                        <View style={styles.actionButtons}>
                            <TouchableOpacity 
                                style={[styles.actionButton, styles.editButton]}
                                onPress={() => handleEdit(item)}
                                activeOpacity={0.8}
                                testID={`edit-note-${item.id}`}
                            >
                                <Text style={styles.actionButtonText}>✏️</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.actionButton, styles.deleteButton]}
                                onPress={() => handleDelete(item.id!)}
                                activeOpacity={0.8}
                                testID={`delete-note-${item.id}`}
                            >
                                <Text style={styles.actionButtonText}>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 100,
    },
    noteCard: {
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'stretch',
        overflow: 'hidden',
    },
    noteContent: {
        flex: 1,
        padding: 20,
    },
    noteHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        flex: 1,
        marginRight: 8,
    },
    noteDate: {
        fontSize: 12,
        color: '#6c757d',
        fontWeight: '500',
    },
    noteDescription: {
        fontSize: 14,
        color: '#495057',
        lineHeight: 20,
    },
    actionButtons: {
        flexDirection: 'row',
        backgroundColor: '#f8f9fa',
        borderLeftWidth: 1,
        borderLeftColor: '#e9ecef',
    },
    actionButton: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#e3f2fd',
        borderRightWidth: 1,
        borderRightColor: '#e9ecef',
    },
    deleteButton: {
        backgroundColor: '#ffebee',
    },
    actionButtonText: {
        fontSize: 18,
    },
});