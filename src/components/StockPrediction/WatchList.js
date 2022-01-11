import {Button, Card, CardHeader, Row, Table, UncontrolledTooltip} from "reactstrap";
import {Component} from "react";
import classNames from "classnames";

class WatchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.watchList)
        let entries = this.props.watchList.map(({currentPrice, prediction, recommendationKey, symbol}, index) => {

            console.log(currentPrice)
            const predictionClass = classNames('fas mr-3',
                {'fa-arrow-up text-success': recommendationKey === 'buy'},
                {'fa-arrow-down text-danger': recommendationKey === 'sell'},
                {'fa-arrow-up text-success': recommendationKey === 'hold'},
            );

            const actionClass = classNames('text-uppercase',
                {'text-success': recommendationKey === 'buy'},
                {'text-danger': recommendationKey === 'sell'},
                {'text-info': recommendationKey === 'hold'},
            );

            // return (
            //     <tr>
            //         <th scope="row">{symbol}</th>
            //         <td>{currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            //         <td>
            //             <i className={predictionClass}/>{prediction}%
            //         </td>
            //         <td><span className={actionClass}>{recommendationKey}
            //         </span>
            //         </td>
            //         <td><UncontrolledTooltip   delay={0}
            //                                    trigger="hover focus"
            //                                    target="tooltip982655500">Remove from watchlist</UncontrolledTooltip><span id="tooltip982655500" className="fas fa-times removeStock text-danger" onClick={() => this.props.removeFromWatchList(index)}> </span></td>
            //     </tr>
            // )
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
                <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col">Prediction</th>
                        <th scope="col">Action</th>
                        <th scope="col"> </th>
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
