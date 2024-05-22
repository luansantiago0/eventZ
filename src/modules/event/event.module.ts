import { Module } from '@nestjs/common';
import { EventsService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [EventController],
  providers: [EventsService, PrismaService],
})
export class EventModule {}
