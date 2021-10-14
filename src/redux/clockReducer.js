import { CHANGE_ARROW, CHANGE_TIME, HOUR, MINUTE, SECOND } from "./types";

const initialState = () => {
    const date = new Date();
    let hour = +date.getHours();
    if (hour >= 12) hour -= 12;

    return {
        curTime: { hour, minute: +date.getMinutes(), second: +date.getSeconds() },
        selectedArrow: null,
    };
};

export const clockReducer = (state = initialState(), action) => {
    function changeTimeItems(state, payload) {
        let { hour, minute, second } = state.curTime;

        if (state.selectedArrow === HOUR) hour = Math.floor(payload / 5);
        else if (state.selectedArrow === SECOND) second = payload;
        else if (state.selectedArrow === MINUTE) {
            if (minute === 59 && payload === 0) hour++;
            if (minute === 0 && payload === 59) hour--;
            hour = hour >= 12 ? hour - 12 : hour < 0 ? hour + 12 : hour;
            minute = payload;
        }

        return { ...state, curTime: { hour, minute, second } };
    }

    switch (action.type) {
        case CHANGE_TIME:
            return changeTimeItems(state, +action.payload);

        case CHANGE_ARROW:
            return { ...state, selectedArrow: action.payload };

        default:
            return state;
    }
};
