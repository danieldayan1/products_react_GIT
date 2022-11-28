import { createStore } from "redux";
import ProductModel from "../Models/ProductModel";


//1. global state
export class ProductsState{
    public products: ProductModel[] = [];
}

//2. action type  - list of operations we can perform on global state
export enum ProductsActionType{
    FetchAllProducts = 'fetch all products',
    AddProduct = 'add product' ,
    EditProduct = 'edit product' ,
    DeleteProduct = 'delete product'
}

//3. action - a single object which dispatch sends to redux for some changes
export interface ProductsAction{
    type: ProductsActionType,
    payload: any ;
}

//4. reducer - function which will be invoked when calling dispach to perform the operation
export function productsReducer(currentState = new ProductsState() , action:ProductsAction ){
    const newState = {...currentState};

    switch(action.type){
        case ProductsActionType.FetchAllProducts:
            newState.products = action.payload;
        break;
        case ProductsActionType.AddProduct:
            newState.products.push(action.payload);
        break;
        case ProductsActionType.EditProduct:
            const indexToUpdate =  newState.products.findIndex(p => p.id === action.payload.id);
            if (indexToUpdate >=0){
                newState.products[indexToUpdate] = action.payload
            }
        break;
        case ProductsActionType.DeleteProduct:
            const indexToDelete =  newState.products.findIndex(p => p.id === action.payload.id);
            if(indexToDelete >= 0){
                    newState.products.splice(indexToDelete,1)
            }
        break;
    }
    return newState
}


//5. store - manager object from redux which handels the entire operations (dispatch , getState , subscribe)
export const productsStore = createStore(productsReducer);




