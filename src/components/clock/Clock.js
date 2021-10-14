import "./clock.scss";
import clockSVG from "../../resources/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeArrow, changeTime } from "../../redux/actions";
import { HOUR, MINUTE, SECOND } from "../../redux/types";

function Clock() {
    const state = useSelector((state) => state.clock);
    const { hour, minute, second } = state.curTime;
    const { selectedArrow } = state;

    const dispatch = useDispatch();

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

    const onHandClick = (e, clazz) => {
        e.preventDefault();
        if (e.type === "click") {
            dispatch(changeArrow(clazz));
        } else if (e.type === "contextmenu") {
            dispatch(changeArrow(null));
        }
    };

    const hand = (clazz) => {
        let rotateAngle = 0;
        let selectedStyle = clazz === selectedArrow ? " hand__item_selected" : "";

        switch (clazz) {
            case HOUR:
                rotateAngle = Math.round(((hour * 60 + minute) / 720) * 360);
                break;
            case MINUTE:
                rotateAngle = Math.round((minute / 60) * 360);
                break;
            case SECOND:
                rotateAngle = Math.round((second / 60) * 360);
                break;
            default:
                break;
        }

        return (
            <div className={`hand`} style={{ transform: `rotate(${rotateAngle}deg)` }}>
                <div className="hand__container">
                    <div
                        className={`hand__item hand__item_${clazz}${selectedStyle}`}
                        onClick={(e) => onHandClick(e, clazz)}
                        onContextMenu={(e) => onHandClick(e, clazz)}
                    />
                </div>
            </div>
        );
    };

    const onRemoveSelection = (e) => {
        e.preventDefault();
        dispatch(changeArrow(null));
    };

    const onSengmentEnter = (e) => {
        if (selectedArrow) {
            dispatch(changeTime(e.target.dataset.count));
        }
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
                            onMouseEnter={onSengmentEnter}
                            onContextMenu={(e) => onRemoveSelection(e)}
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
