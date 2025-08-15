import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '../notes/entity/Note';
export const DatabaseModule = TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Note],
    synchronize: true,
  });