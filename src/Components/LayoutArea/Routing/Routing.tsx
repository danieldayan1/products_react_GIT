import { Route, Routes , Navigate } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import NotFound404 from "../NotFound404/NotFound404";
import ProductDeatils from "../../ProductsArea/ProductDeatils/ProductDeatils";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path='/' element={<Navigate to="/Home" />}> </Route>
                <Route path = '/*' element={<NotFound404 />}> </Route>
                <Route path='/Home' element={<Home />}> </Route>
                <Route path = 'products' element = {<ProductsList />} ></Route>
                <Route path = 'products/edit/:prodToEdit' element = {<EditProduct />} ></Route>
                <Route path = 'products/product/details/:prodId' element = {<ProductDeatils />}></Route>
                <Route path = "products/new" element = {<AddProduct/>}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
