import { useDispatch, useSelector } from "react-redux";
import { changeArrow } from "../../redux/actions";
import { HOUR, MINUTE, SECOND } from "../../redux/types";

const Hand = ({ clazz }) => {
    const state = useSelector((state) => state.clock);
    const { hour, minute, second } = state.curTime;
    const { selectedArrow } = state;

    const dispatch = useDispatch();

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

    return <>{hand(clazz)}</>;
};

export default Hand;
