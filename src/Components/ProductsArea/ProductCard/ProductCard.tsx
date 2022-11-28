import "./ProductCard.css";
import ProductModel from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";
import config from "../../../Utils/Config"

interface ProductCardProps{
    product : ProductModel;
}

function ProductCard(props:ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
			<div className="col">
                <div className="card">
                    <NavLink to =  {`product/details/` + props.product.id} >
                        <img src={config.productImagesUrl + props.product.imageName} className="card-img-top" alt="..." />
                    </NavLink>
                    <div className="card-body">
                    <h5 className="card-title"> {props.product.id}</h5>
                        <p className="card-text">{ props.product.name}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
