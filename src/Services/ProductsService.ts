import axios from "axios";
import ProductModel from "../Models/ProductModel";
import config from "../Utils/Config";

class ProductsService{

public async fetchAllProducts():Promise<ProductModel[]>{
    const response = await axios.get<ProductModel[]>(config.productsUrl);
    const products = response.data
    return products 
}

public async getOneProductById(id: number): Promise<ProductModel> {
    const response = await axios.get<ProductModel>(config.productsUrl+'/' + id);
    const product = response.data;
    return product;
}

public async addProduct(product:ProductModel): Promise<ProductModel>{
    const response = await axios.post<ProductModel>(config.productsUrl , product)
    const  addProduct = response.data
    return addProduct
}


}
const productService = new ProductsService();
export default productService;


