import "./clock.scss"
import clockSVG from "../../resources/clock.svg"

function Clock() {
    const numbers = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => {
            return <div key={i} className={`fractions__item fraction fraction_${i + 1}`}>{12 - i}</div>
        })
    }

    const hand = (clazz) => {
        return (
            <div className={`hand hand_${clazz}`}>
                <div className="hand__container">
                    <div className={`hand__item hand__item_${clazz}`} />
                </div>
            </div>
        )
    }

    return (
        <div className="clock">
            <div className="fractions">
                {numbers()}
            </div>
            {hand("hour")}
            {hand("minute")}
            {hand("second")}
            <img src={clockSVG} alt="" className="clock__border" />
        </div>)
}

export default Clock;