import "./Clock.css";
import {useState , useEffect} from "react"

function Clock(): JSX.Element {

    const [now , setNow] = useState<string>()

    useEffect(()=>{
       const intervalID =  setInterval(() => {
            let time = new Date();
            setNow(time.toLocaleTimeString());
            console.log(now);
        } , 1000);

        return() => clearInterval(intervalID)
    })


    return (
        <div className="Clock"  >
			<p>{now}</p>
        </div>
    );
}

export default Clock;
