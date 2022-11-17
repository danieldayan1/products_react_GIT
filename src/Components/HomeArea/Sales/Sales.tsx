import "./Sales.css";

function Sales(): JSX.Element {

    function isWeekend(): Boolean{
        const time = new Date()
        const day = time.getDay()

        return day>5
    }

    function afterFive():boolean{
        const time = new Date()
        const hour = time.getHours()
        return hour < 17
    }

    return (
        <div className="Sales">
			<div>
                {isWeekend() ? <span>all apples are 10% off!</span> : <span>all peaches are 5% off!</span>}
                {afterFive() && <span>50% off on second beer!</span>}
            </div>
        </div>
    );
}

export default Sales;
