import { useParams } from "react-router-dom";
import "./ProductDeatils.css";
import config from "../../../Utils/Config";
import productService from "../../../Services/ProductsService";
import { useEffect , useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";


function ProductDeatils(): JSX.Element {

    const params = useParams()
    
    const [product , setProduct] = useState<ProductModel>()
    
    useEffect(()=>{
        const prodId = +params.prodId
        productService.getOneProductById(prodId)
        .then(p => setProduct(p))
        .catch(err => alert(err.message))
       })

    return (
        <div className="ProductDeatils">
            { product && <div >
			<div className="card">
                <img src={config.productImagesUrl + product.imageName} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <NavLink to = '/products' >
                        <button>BACK</button>
                    </NavLink>
                </div>
            </div>
            }
        </div>
    );
}

export default ProductDeatils;
