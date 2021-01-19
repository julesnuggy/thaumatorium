import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { Product } from '../models/product';
import { ProductsService, CreateProductParams } from "../services/productsService";

@Route('products')
export class ProductsController extends Controller {
  @Get()
  public async getProducts(): Promise<Product[]> {
    console.log("in controller")
    return new ProductsService().getProducts();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createProduct(@Body() product: CreateProductParams): Promise<Product|void> {
    this.setStatus(200);
    return new ProductsService().createProduct(product);
  }
}