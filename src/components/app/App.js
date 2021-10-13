import clockSVG from "../../resources/clock.svg"
import "./app.scss"

function App() {
  return (
    <div className="wrapper">
      <main className="page">
        <div className="page__container">
          <div className="clock">
            <div className="fractions">
              <div className="fractions__item fraction fraction_1">12</div>
              <div className="fractions__item fraction fraction_2">11</div>
              <div className="fractions__item fraction fraction_3">10</div>
              <div className="fractions__item fraction fraction_4">9</div>
              <div className="fractions__item fraction fraction_5">8</div>
              <div className="fractions__item fraction fraction_6">7</div>
              <div className="fractions__item fraction fraction_7">6</div>
              <div className="fractions__item fraction fraction_8">5</div>
              <div className="fractions__item fraction fraction_9">4</div>
              <div className="fractions__item fraction fraction_10">3</div>
              <div className="fractions__item fraction fraction_11">2</div>
              <div className="fractions__item fraction fraction_12">1</div>
            </div>
            <div className="hand hand_hour">
              <div className="hand__container">
                <div className="hand__item hand__item_hour" />
              </div>
            </div>
            <div className="hand hand_minute">
              <div className="hand__container">
                <div className="hand__item hand__item_minute" />
              </div>
            </div>
            <div className="hand hand_second">
              <div className="hand__container">
                <div className="hand__item hand__item_second" />
              </div>
            </div>
            <img src={clockSVG} alt="" className="clock__border" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
