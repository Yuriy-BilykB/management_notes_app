import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class NoteDto {
    @IsString()
    @IsNotEmpty({ message: 'Title is required' })
    @MinLength(1, { message: 'Title must be at least 1 character long' })
    @MaxLength(100, { message: 'Title must not exceed 100 characters' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'Description is required' })
    @MinLength(1, { message: 'Description must be at least 1 character long' })
    @MaxLength(1000, { message: 'Description must not exceed 1000 characters' })
    description: string;
}