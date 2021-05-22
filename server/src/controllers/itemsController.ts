import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import {
  ItemRequest,
  ItemResponse, 
} from '../models/Item';
import { ItemsService } from '../services/itemsService';

@Route('items')
export class ItemsController extends Controller {
  private service = new ItemsService();

  @Get()
  public async getItems(): Promise<ItemResponse[]> {
    return this.service.getItems();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createItem(@Body() item: ItemRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createItem(item);
  }

  @SuccessResponse('204', 'Success')
  @Delete('/{itemId}')
  public async deleteItem(@Path() itemId: string): Promise<void> {
    return this.service.deleteItem(itemId);
  }
}
