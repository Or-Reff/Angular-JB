import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Dependency injection
  constructor(private http: HttpClient) {}
  // 2015 Promise to the rescue
  public async getAllProduct(): Promise<ProductModel[]> {
    const products = await firstValueFrom(
      this.http.get<ProductModel[]>(environment.productUrl)
    );
    return products;
  }
  public async getOneProduct(id: number): Promise<ProductModel> {
    const product = await firstValueFrom(
      this.http.get<ProductModel>(environment.productUrl + id)
    );
    return product;
  }

  public async addProduct(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    const addedProduct = await firstValueFrom(
        this.http.post<ProductModel>(environment.productUrl,formData)
    )
  }
}
