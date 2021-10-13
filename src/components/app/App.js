import Clock from "../clock/Clock"

import "./app.scss"

function App() {
  return (
    <div className="wrapper">
      <main className="page">
        <div className="page__container">
          <Clock />
        </div>
      </main>
    </div>
  );
}

export default App;
