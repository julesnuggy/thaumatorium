import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import {
  EquipmentRequest,
  EquipmentResponse, 
} from '../models/Equipment';
import { EquipmentService } from '../services/equipmentService';

@Route('equipment')
export class ProductsController extends Controller {
  private service = new EquipmentService();

  @Get()
  public async getProducts(): Promise<EquipmentResponse[]> {
    return this.service.getEquipment();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createProduct(@Body() equipment: EquipmentRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createEquipment(equipment);
  }
}
