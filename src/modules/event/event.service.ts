import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateEventDTO } from './dto/createEvent.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(createEventDto: CreateEventDTO) {
    const event = await this.prisma.event.create({
      data: {
        name: createEventDto.name,
        imageUrl: createEventDto.imageUrl,
        description: createEventDto.description,
        price: createEventDto.price,
        discount: createEventDto.discount,
        companyId: createEventDto.companyId,
        categoryId: createEventDto.categoryId,
      },
    });
    return event;
  }

  async getAllEvents() {
    const events = await this.prisma.event.findMany();
    return events;
  }
}
