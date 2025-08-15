import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './dto/note.dto';
@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async getNotes() {
       return this.notesService.getNotes();
    }

    @Get(':id')
    async getNoteById(@Param('id') id: number) {
        return this.notesService.getNoteById(id);
    }

    @Post()
    async createNote(@Body() noteDto: NoteDto) {
        console.log(noteDto);
        return this.notesService.createNote(noteDto);
    }

    @Put(':id')
    async updateNote(@Param('id') id: number, @Body() noteDto: NoteDto) {
        return this.notesService.updateNote(id, noteDto);
    }

    @Delete(':id')
    async deleteNote(@Param('id') id: number) {
        return this.notesService.deleteNote(id);
    }
}   