import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Array from "../../HomeArea/Array/Array";
import Routing from "../Routing/Routing";
import "./layout.css";


function Layout(): JSX.Element {
    return (
        <div className="layout">
			<header><Header></Header></header>
            <aside><Menu></Menu></aside>
            <main><Routing></Routing>  </main>
            <footer><Footer></Footer></footer>
        </div>
    );
}

export default Layout;
