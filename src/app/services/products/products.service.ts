import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsActionType, productsStore } from 'src/app/redux/products-state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Dependency injection
  constructor(private http: HttpClient) {}
  // 2015 Promise to the rescue
  public async getAllProducts(): Promise<ProductModel[]> {
    let products = productsStore.getState().products;

    if(products.length === 0){
        products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productUrl));

        // Save to global state
        productsStore.dispatch({type: ProductsActionType.FetchProduct, payload: products});
    }
    return products;
  }
  public async getOneProduct(id: number): Promise<ProductModel> {
    
    // Read global state:
    let products = productsStore.getState().products; 

    let product = products.find(p => p.id === id);

    if(!product){
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productUrl+id));
        this.http.get<ProductModel>(environment.productUrl+id);
    }
    return product;
  }
  public async addProduct(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    const addedProduct = await firstValueFrom(
      this.http.post<ProductModel>(environment.productUrl, formData)
    );

    // Save to global state: // like delivery guy to a global use
    productsStore.dispatch({type: ProductsActionType.AddProduct, payload: addedProduct});
  }

  public async updateProduct(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    // put request because we modify values of formData
    const updatedProduct = await firstValueFrom(
      this.http.put<ProductModel>(environment.productUrl + product.id, formData)
    );

     // Save to global state:
     productsStore.dispatch({type: ProductsActionType.UpdateProduct, payload: updatedProduct})
  }
  public async deleteProduct(id: number): Promise<void> {
    await firstValueFrom(this.http.delete(environment.productUrl + id)) 
    productsStore.dispatch({type: ProductsActionType.DeleteProduct, payload: id})
  }
}
