import { Controller, Post, Body } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { CreateWishListDto } from './dto/create-wish-list.dto';

@Controller('wish-list')
export class WishListController {
  constructor(private readonly wishListService: WishListService) {}

  @Post()
  create(@Body() createWishListDto: CreateWishListDto) {
    return this.wishListService.create(createWishListDto);
  }
}
