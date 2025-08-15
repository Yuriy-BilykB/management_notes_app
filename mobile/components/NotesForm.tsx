import { useEffect, useState } from 'react'
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { INote } from '@/interfaces/INote'
import { useLocalSearchParams, router } from 'expo-router'
import { createNote, updateNote } from '@/services/notesServices'
import Input from './Input'
import Button from './Button'

export default function NotesForm() {
    const { t } = useTranslation()
    const { editNote } = useLocalSearchParams()
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<{ title?: string; description?: string }>({})
    const [note, setNote] = useState<INote>({
        title: '',
        description: '',
    })

    useEffect(() => {
        if (editNote) {
            setNote(JSON.parse(editNote as string))
            setIsEditing(true)
        }
    }, [editNote])

    const validateForm = () => {
        const newErrors: { title?: string; description?: string } = {}
        
        if (!note.title.trim()) {
            newErrors.title = t('notes.titleRequired')
        } else if (note.title.length < 3) {
            newErrors.title = t('notes.titleMinLength')
        }
        
        if (!note.description.trim()) {
            newErrors.description = t('notes.descriptionRequired')
        } else if (note.description.length < 10) {
            newErrors.description = t('notes.descriptionMinLength')
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = async () => {
        if (!validateForm()) {
            return
        }
        
        try {
            setLoading(true)
            if (isEditing) {
                await updateNote(note.id!, note)
                router.back()
            } else {
                await createNote(note)
                Alert.alert(t('common.success'), t('notes.noteCreated'), [
                    { text: 'OK', onPress: () => router.back() }
                ])
            }
        } catch (error) {
            console.error('Error saving note:', error)
            Alert.alert(t('common.error'), t('notes.saveError'))
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        if (note.title.trim() || note.description.trim()) {
            Alert.alert(
                t('notes.discardChanges'),
                t('notes.discardChangesMessage'),
                [
                    { text: t('notes.keepEditing'), style: 'cancel' },
                    { text: t('common.discard'), style: 'destructive', onPress: () => router.back() }
                ]
            )
        } else {
            router.back()
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.formContainer}>
                    <Input
                        label={t('notes.title')}
                        placeholder={t('notes.titlePlaceholder')}
                        value={note.title}
                        onChangeText={(text) => {
                            setNote({ ...note, title: text })
                            if (errors.title) setErrors({ ...errors, title: undefined })
                        }}
                        error={errors.title}
                        required
                        maxLength={100}
                        helperText={`${note.title.length}/100 ${t('notes.characters')}`}
                        testID="note-title-input"
                    />

                    <Input
                        label={t('notes.description')}
                        placeholder={t('notes.descriptionPlaceholder')}
                        value={note.description}
                        onChangeText={(text) => {
                            setNote({ ...note, description: text })
                            if (errors.description) setErrors({ ...errors, description: undefined })
                        }}
                        error={errors.description}
                        required
                        multiline
                        numberOfLines={6}
                        textAlignVertical="top"
                        maxLength={1000}
                        helperText={`${note.description.length}/1000 ${t('notes.characters')}`}
                        testID="note-description-input"
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            title={t('common.cancel')}
                            onPress={handleCancel}
                            variant="secondary"
                            disabled={loading}
                            style={styles.cancelButton}
                        />

                        <Button
                            title={loading ? t('common.saving') : (isEditing ? t('common.update') : t('common.create'))}
                            onPress={handleSave}
                            loading={loading}
                            disabled={!note.title.trim() || !note.description.trim()}
                            style={styles.saveButton}
                            testID="save-note-button"
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
        minHeight: 400,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
    },
    cancelButton: {
        flex: 1,
    },
    saveButton: {
        flex: 1,
    },
})

