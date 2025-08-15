import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './db/db.module';
@Module({
  imports: [DatabaseModule, NotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
