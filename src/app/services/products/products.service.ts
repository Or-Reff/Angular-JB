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
}
