import { NavLink } from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to = "/Home">Home</NavLink>
            <br/>
            <NavLink to = "/products">Products</NavLink>
            
            <TotalProducts/>
        </div>
    );
}
export default Menu;
