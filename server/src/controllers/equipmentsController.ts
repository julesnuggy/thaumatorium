import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { EquipmentRequest, EquipmentResponse } from '../models/Equipment';
import { EquipmentsService } from '../services/equipmentsService';

@Route('equipment')
export class ProductsController extends Controller {
  private service = new EquipmentsService();

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
