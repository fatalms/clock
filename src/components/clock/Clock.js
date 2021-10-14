import "./clock.scss";
import clockSVG from "../../resources/clock.svg";

function Clock() {
    const numbers = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => {
            return (
                <div key={i} className={`fractions__item fraction fraction_${i + 1}`}>
                    {12 - i}
                </div>
            );
        });
    };

    const hand = (clazz) => {
        return (
            <div className={`hand hand_${clazz}`}>
                <div className="hand__container">
                    <div className={`hand__item hand__item_${clazz}`} />
                </div>
            </div>
        );
    };

    const segments = () => {
        const segmentList = (count) => {
            return Array(count)
                .fill(0)
                .map((_, i) => {
                    return (
                        <li
                            key={i}
                            className={`segments__item segments__item_${i}`}
                            data-count={i}
                            onMouseEnter={(e) => console.log(`onMouseEnter ${e.target.dataset.count}`)}
                        />
                    );
                });
        };

        return <ul className="segments">{segmentList(60)}</ul>;
    };

    return (
        <div className="clock">
            <div className="fractions">{numbers()}</div>
            {hand("hour")}
            {hand("minute")}
            {hand("second")}
            {segments(60)}
            <img src={clockSVG} alt="" className="clock__border" />
        </div>
    );
}

export default Clock;
