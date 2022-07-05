import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

//connecting to mongodb go-to readmi

@Controller('items')
export class ItemsController {
  // inject ItemsService as a dependency in other to use it here in the ItemsController
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItem)
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id)
  }

  @Put(':id')
  update(@Body() updateItem: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItem)
  }
}
