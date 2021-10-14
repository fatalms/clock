import { CHANGE_ARROW, CHANGE_TIME } from "./types";

export const changeArrow = (arrowType) => {
    return {
        type: CHANGE_ARROW,
        payload: arrowType,
    };
};

export const changeTime = (newTime) => {
    return {
        type: CHANGE_TIME,
        payload: newTime,
    };
};
