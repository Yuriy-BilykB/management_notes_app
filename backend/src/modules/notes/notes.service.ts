import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from './entity/Note';
import { NoteDto } from './dto/note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>,
    ) {}

    createNote(noteDto: NoteDto) {
        const note = this.noteRepository.create(noteDto);
        return this.noteRepository.save(note);
    }

    async getNotes() {
        const notes = await this.noteRepository.find();
        if (!notes) {
            throw new NotFoundException('Notes not found');
        }
        return notes;
    }

    async getNoteById(id: number) {
        const note = await this.noteRepository.findOne({ where: { id } });
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return note;
    }

    async updateNote(id: number, noteDto: NoteDto) {
        const note = await this.noteRepository.findOne({ where: { id } });
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        await this.noteRepository.update(id, noteDto);
        return this.noteRepository.findOne({ where: { id } });
    }

    async deleteNote(id: number) {
        const note = await this.noteRepository.findOne({ where: { id } });
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return this.noteRepository.delete(id);
    }
    
}