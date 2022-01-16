import {Button, Card, CardHeader, Row, Table, UncontrolledTooltip} from "reactstrap";
import {Component} from "react";
import classNames from "classnames";

class WatchList extends Component {

    separateThousands(number) {
        if (number !== undefined) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return "N/A"
    }

    removeDigitsAfterComma(number, digits = 4) {
        return Number(number).toFixed(digits);
    }

    render() {

        let entries = this.props.watchList.map(({otherData, prediction_1, prediction_2, symbol}, index) => {

            const recommendationKey_1 = prediction_1 > 0 ? 'buy' : 'sell';
            const predictionClass_1   = classNames('fas mr-3',
                {'fa-arrow-up text-success': recommendationKey_1 === 'buy'},
                {'fa-arrow-down text-danger': recommendationKey_1 === 'sell'},
            );

            const actionClass_1 = classNames('text-uppercase',
                {'d-block text-center text-success': recommendationKey_1 === 'buy'},
                {'d-block text-center text-danger': recommendationKey_1 === 'sell'},
            );

            const recommendationKey_2 = prediction_2 > 0 ? 'buy' : 'sell';
            const predictionClass_2   = classNames('fas mr-3',
                {'fa-arrow-up text-success': recommendationKey_2 === 'buy'},
                {'fa-arrow-down text-danger': recommendationKey_2 === 'sell'},
            );

            const actionClass_2 = classNames('text-uppercase',
                {'d-block text-center text-success': recommendationKey_2 === 'buy'},
                {'d-block text-center text-danger': recommendationKey_2 === 'sell'},
            );

            return (
                <tr onClick={(e) => this.props.showStockDetails(e, index)}  key={symbol}>
                    <th scope="row">{symbol}</th>
                    <td>{this.removeDigitsAfterComma(otherData.currentPrice)}</td>
                    <td>
                        <i className={predictionClass_1}/>{this.removeDigitsAfterComma(prediction_1, 2)}%
                        <br/>
                        <span className={actionClass_1}>{recommendationKey_1}</span>
                    </td>
                    <td>
                        <i className={predictionClass_2}/>{this.removeDigitsAfterComma(prediction_2, 2)}%
                        <br/>
                        <span className={actionClass_2}>{recommendationKey_2}</span>
                    </td>
                    <td><UncontrolledTooltip delay={0}
                                             trigger="hover focus"
                                             target="tooltip982655500">Remove from watchlist</UncontrolledTooltip><span
                        id="tooltip982655500" className="fas fa-times removeStock text-danger"
                        onClick={(e) => this.props.removeFromWatchList(e,index)}> </span></td>
                </tr>
            )
        })

        return (
            <Card className="shadow">
                <CardHeader className="border-0">
                    <Row className="align-items-center">
                        <div className="col">
                            <h3 className="mb-0">WatchList</h3>
                        </div>
                        <div className="col text-right">
                            <Button
                                color="primary"
                                href="#pablo"
                                onClick={() => this.props.emptyWatchList()}
                                size="sm"
                            >
                                Remove All
                            </Button>
                        </div>
                    </Row>
                </CardHeader>
                <Table className="align-items-center table-flush watchlist" responsive>
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col"><div className="text-center"> Prediction<br/> 1</div></th>
                        <th scope="col"><div className="text-center"> Prediction<br/> 2</div></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {entries}
                    </tbody>
                </Table>
            </Card>
        )
    }
}

export default WatchList;
