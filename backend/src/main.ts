import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'exp://192.168.0.110:8081',
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  await app.listen(process.env.PORT ?? 5000); 
  console.log(`Server is running on port ${process.env.PORT ?? 5000}`);
}
bootstrap();
