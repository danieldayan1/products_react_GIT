import "./Home.css";
import Clock from "../Clock/Clock";
import Sales from "../Sales/Sales";

function Home(): JSX.Element{ 
    return (
        <div className="Home">
            <Clock />
            <Sales/>
        </div>
    );
}

export default Home;
