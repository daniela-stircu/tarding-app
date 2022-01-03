import {Card} from "reactstrap";
import {Component} from "react";
import {Chart} from "react-google-charts";

class CompanyChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            ["day", "a", "b", "c", "d"],
            ["Mon", 20, 28, 38, 45],
            ["Tue", 31, 38, 55, 66],
            ["Wed", 50, 55, 77, 80],
            ["Thu", 50, 77, 66, 77],
            ["Fri", 15, 66, 22, 68],
            ["Mon", 20, 28, 38, 45],
            ["Tue", 31, 38, 55, 66],
            ["Wed", 50, 55, 77, 80],
            ["Thu", 50, 77, 66, 77],
            ["Fri", 15, 66, 22, 68],
            ["Mon", 20, 28, 38, 45],
            ["Tue", 31, 38, 55, 66],
            ["Wed", 50, 55, 77, 80],
            ["Thu", 50, 77, 66, 77],
            ["Fri", 15, 66, 22, 68],
            ["Mon", 20, 28, 38, 45],
            ["Tue", 31, 38, 55, 66],
            ["Wed", 50, 55, 77, 80],
            ["Thu", 50, 77, 66, 77],
            ["Fri", 15, 66, 22, 68],
        ];

        const options = {
            legend: "none",
            bar: { groupWidth: "100%" }, // Remove space between bars.
            candlestick: {
                fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
                risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
            },
        };
        return (
            <Card>
                <Chart
                    chartType="CandlestickChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </Card>
        )
    }
}

export default CompanyChart;
