import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { IProduct, Product } from '../models/Product';
import { ProductsService } from "../services/productsService";

@Route('products')
export class ProductsController extends Controller {
  @Get()
  public async getProducts(): Promise<IProduct[]> {
    return new ProductsService().getProducts();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createProduct(@Body() product: Product): Promise<IProduct> {
    this.setStatus(200);
    return new ProductsService().createProduct(product);
  }
}