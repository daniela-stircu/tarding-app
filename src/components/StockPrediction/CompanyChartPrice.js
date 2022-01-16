import {Card, CardHeader, Row} from "reactstrap";
import {Component} from "react";
import {Chart} from "react-google-charts";

class CompanyChartPrice extends Component {

    render() {
        if (this.props.company.prices === undefined) {
            return (null);
        }
        const data = [["day", "low", "open", "close", "high"]];

        this.props.company.prices.map((price) => (
            data.push([price[4], price[3], price[1], price[0], price[2]])
        ))

        const options = {
            legend: "none",
            bar: {groupWidth: "100%"}, // Remove space between bars.
            candlestick: {
                fallingColor: {strokeWidth: 0, fill: "#a52714"}, // red
                risingColor: {strokeWidth: 0, fill: "#0f9d58"}, // green
            },
        };
        return (
            <Card>
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                        <div className="col">
                            <h3 className="mb-0">Historical Price</h3>
                        </div>
                    </Row>
                </CardHeader>
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

export default CompanyChartPrice;
