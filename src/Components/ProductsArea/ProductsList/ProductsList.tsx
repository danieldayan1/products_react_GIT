import "./ProductsList.css";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import { useState , useEffect } from "react";
import productService from "../../../Services/ProductsService";
import { NavLink } from "react-router-dom";
import Loading from "../../SharedArea/Loading/Loading";

function ProductsList(): JSX.Element {

    const [products , setProducts] = useState<ProductModel[]>([]) 

    useEffect(()=>{
        productService.fetchAllProducts()
            .then(productsFromBackend => setProducts(productsFromBackend))
            .catch(err => alert(err.message))
    } , [])
    

    return (
        <div className="ProductsList">

            {products.length === 0 && <Loading />}

            <NavLink to ="/products/new">👌 הוספת פריט</NavLink>
            <br/>
			<div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(p=><ProductCard key = {p.id} product={p} />)}
            </div>
        </div>
    );
}

export default ProductsList;
