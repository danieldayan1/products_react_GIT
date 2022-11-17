import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to = "/Home">Home</NavLink>
            <br/>
            <NavLink to = "/products">Products</NavLink>
        </div>
    );
}
export default Menu;
