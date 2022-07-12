import { Chart } from "react-google-charts";

import { perfDataBase } from "../perfData";

export const perfData = perfDataBase
console.log(perfData)

export const data = [
    ["Date", "Hang power clean [kg]"],
    ["29/04/2021", 63],
    ["24/06/2022", 65],
    ["11/07/2022", 75],
];

export const options = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
};

function BuildChart() {
    return (
        <div>
            <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default BuildChart;