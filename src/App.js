import { Chart } from "react-google-charts";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />
      </header>
    </div>
  );
}

export default App;
