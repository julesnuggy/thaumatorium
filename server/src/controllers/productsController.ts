import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { ProductRequest, ProductResponse } from '../models/Product';
import { ProductsService } from "../services/productsService";

@Route('products')
export class ProductsController extends Controller {
  private service = new ProductsService();

  @Get()
  public async getProducts(): Promise<ProductResponse[]> {
    return this.service.getProducts();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createProduct(@Body() product: ProductRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createProduct(product);
  }
}
