import api from '@/axios/axios';
import { INote } from '@/interfaces/INote';

export const getNotes = async () => {
    try {
        const response = await api.get('/notes');
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
}

export const createNote = async (note: INote) => {
    try {
        console.log("Creating note:", note);
        console.log("API URL:", api.defaults.baseURL);
        const response = await api.post('/notes', note);
        console.log("Response:", response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error creating note:', error);
        console.error('Error details:', error.response?.data);
        throw error;
    }
}

export const getNoteById = async (id: number) => {
    try {
        const response = await api.get(`/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching note by id:', error);
        throw error;
    }
}

export const updateNote = async (id: number, note: INote) => {
    try {
        const response = await api.put(`/notes/${id}`, note);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
}

export const deleteNote = async (id: number) => {
    try {
        const response = await api.delete(`/notes/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
}