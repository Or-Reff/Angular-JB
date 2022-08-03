import { createStore } from 'redux';
import { ProductModel } from 'src/app/models/product.model';

// 1. Products state:
// המידע הגלובלי ברמת האפליקציה
export class ProductState {
  public products: ProductModel[] = [];
}

// 2. Products ActionType:  
// רשימת הפעולות הניתנות לביצוע על המידע
export enum ProductsActionType {
    FetchProduct,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
}

// 3. Products Action
// אובייקט אחד ויחיד לשליחה עבור שינוי המידע
export interface ProductsAction{
    type: ProductsActionType; // for example type: AddProduct
    payload: any; // data //for example: {name: "car",amount: 100}
}

// 4. Products 
// פונקציה שמבצעת את הפעולה הדרושה בפועל
export function productReducer(currentState = new ProductState(),action: ProductsAction):ProductState{
    const newState = {...currentState}; // Spread Operator // makes new object from object currentState

    switch(action.type){
        case ProductsActionType.FetchProduct: // Here the payload is ProductModel[] array
             newState.products = action.payload;
        break;
        case ProductsActionType.AddProduct: // Here the payload is Productmodel object 
            newState.products.push(action.payload);
        break;
        case ProductsActionType.UpdateProduct: // Here the payload is Productmodel object
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            if(indexToUpdate >= 0){ 
                newState.products[indexToUpdate] = action.payload
            }
        break;
        case ProductsActionType.DeleteProduct: // Here the payload is id to delete
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload.id);
            if(indexToDelete >= 0){
                newState.products.splice(indexToDelete, 1);
            }
            break;
    }
    return newState;
}
// Products Store
export const productsStore = createStore(productReducer);
