import { useDispatch } from "react-redux";
import { changeArrow, changeTime } from "../../redux/actions";

const Segments = ({ selectedArrow }) => {
    const dispatch = useDispatch();

    const onRemoveSelection = (e) => {
        e.preventDefault();
        dispatch(changeArrow(null));
    };

    const onSengmentEnter = (e) => {
        if (selectedArrow) {
            dispatch(changeTime(e.target.dataset.count));
        }
    };

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

export default Segments;
