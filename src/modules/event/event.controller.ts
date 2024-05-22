import { Controller, Post, Body } from '@nestjs/common';
import { EventsService } from './event.service';
import { CreateEventDTO } from './dto/CreateEvent.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDTO) {
    return this.eventService.createEvent(createEventDto);
  }
}
