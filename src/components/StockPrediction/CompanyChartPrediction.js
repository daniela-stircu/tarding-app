import {Card, CardHeader, Row} from "reactstrap";
import {Component} from "react";
import {Chart} from "react-google-charts";

class CompanyChartPrediction extends Component {

    render() {

        if (this.props.company.predictions === undefined) {
            return (null);
        }

        const data = [
            [
                "Date",
                "Prediction 1",
                "Prediction 2",
            ]];
        this.props.company.predictions.map((prediction, index) => {
            data.push(prediction)
        })

        const options = {
            legend: {position: 'right'}
        };
        return (
            <Card>
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                        <div className="col">
                            <h3 className="mb-0">Prediction Price</h3>
                        </div>
                    </Row>
                </CardHeader>
                <div>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
            </Card>
        )
    }
}

export default CompanyChartPrediction;
