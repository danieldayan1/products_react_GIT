import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import { productsStore } from "../../../redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const [count , setCount] = useState<number>(0)

    useEffect(()=>{
        setCount(productsStore.getState().products.length);
       const unsubscribe =  productsStore.subscribe(()=> setCount(productsStore.getState().products.length)); // listen to changes and calculate

       return ()=>{
        unsubscribe();
       }
    },[])


    return (
        <div className="TotalProducts">
			<span>total products is: {count}</span>
        </div>
    );
}

export default TotalProducts;
