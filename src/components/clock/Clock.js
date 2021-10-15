import "./clock.scss";
import clockSVG from "../../resources/clock.svg";
import { useSelector } from "react-redux";
import Segments from "./Segments";
import Hand from "./Hand";

function Clock() {
    const state = useSelector((state) => state.clock);
    const { selectedArrow } = state;

    const numbers = () => {
        return Array(12)
            .fill(0)
            .map((item, i) => {
                return (
                    <div key={i} className={`fractions__item fraction fraction_${i + 1}`}>
                        {12 - i}
                    </div>
                );
            });
    };

    return (
        <div className="clock">
            <div className="fractions">{numbers()}</div>
            <Hand clazz="hour" />
            <Hand clazz="minute" />
            <Hand clazz="second" />
            <Segments selectedArrow={selectedArrow} />
            <img src={clockSVG} alt="" className="clock__border" />
        </div>
    );
}

export default Clock;
