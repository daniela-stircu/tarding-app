import {Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import {Component} from "react";
import classNames from "classnames";

class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
    }

    showDetails(e) {
        e.preventDefault()
        this.setState({showMore: !this.state.showMore});
        if (this.state.showMore) {
            window.scrollTo(0, 0)
        }
    }

    separateThousands(number) {
        if (number !== undefined) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return "N/A"
    }

    removeDigitsAfterComma(number, digits = 4) {
        return Number(number).toFixed(digits);
    }

    timeStampToDate(date) {
        return new Date(date * 1000).toLocaleDateString("en-US")
    }


    render() {

        let show;
        if (this.state.showMore) {
            show = <span className="show-details" onClick={(e) => this.showDetails(e)}>
                Show less
            </span>
        } else {
            show = <span className="show-details" onClick={(e) => this.showDetails(e)}>
                Show more
            </span>
        }
        let recommendationKey_1 = this.props.company.prediction_1 > 0 ? 'buy' : 'sell';
        const actionClass_1 = classNames('text-uppercase',
            {'heading text-success': recommendationKey_1 === 'buy'},
            {'heading text-danger': recommendationKey_1 === 'sell'},
        );
        let recommendationKey_2 = this.props.company.prediction_2 > 0 ? 'buy' : 'sell';
        const actionClass_2 = classNames('text-uppercase',
            {'heading text-success': recommendationKey_2 === 'buy'},
            {'heading text-danger': recommendationKey_2 === 'sell'},
        );
        return (
            <Card className="card-profile shadow">
                <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={this.props.company.logo_url}
                                />
                            </a>
                        </div>
                    </Col>
                </Row>

                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                    </div>
                </CardHeader>

                <CardBody className="">
                    <Row>
                        <div className="col">
                            <div className="card-profile-stats d-flex justify-content-center">
                                <div>
                                                        <span
                                                            className="heading">{this.removeDigitsAfterComma(this.props.company.prediction_1, 2)}%  <span
                                                            className={actionClass_1}>{recommendationKey_1}</span></span>
                                    <span className="description">Prediction 1</span>
                                </div>
                                <div>
                                                        <span
                                                            className="heading">{this.props.company.otherData.currentPrice}</span>
                                    <span className="description">Price</span>
                                </div>
                                <div>
                                                        <span
                                                            className="heading">{this.removeDigitsAfterComma(this.props.company.prediction_2, 2)}%  <span
                                                            className={actionClass_2}>{recommendationKey_2}</span></span>
                                    <span className="description">Prediction 2</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="text-center">
                        <h3>
                            {this.props.company.name}
                        </h3>
                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2"/>
                            {this.props.company.country}, {this.props.company.otherData.city}
                        </div>

                        <div>
                            <i className="ni education_hat mr-2"/>
                            {this.props.company.sector} - {this.props.company.industry}
                        </div>
                        <hr className="my-4"/>

                        <div className={this.state.showMore ? 'd-block' : 'd-none'}>
                            {show}
                            <hr className="my-4"/>
                            <Table className="align-items-center table-flush" responsive>
                                <tbody>
                                <tr>
                                    <th scope="row">Employees</th>
                                    <td>{this.separateThousands(this.props.company.no_employees)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Market Capital</th>
                                    <td>{this.separateThousands(this.props.company.marketCap)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Debt to equity</th>
                                    <td>{this.props.company.otherData.debtToEquity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cash Flow</th>
                                    <td>{this.separateThousands(this.props.company.cashflow)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Earnings Growth</th>
                                    <td>{this.separateThousands(this.props.company.earnings_growth)}</td>
                                </tr>
                                <tr>

                                    <th scope="row">Earnings Quarterly Growth</th>
                                    <td>{this.separateThousands(this.props.company.earningsQuarterlyGrowth)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Dividend rate</th>
                                    <td>{this.props.company.otherData.dividendRate}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Dividend yield</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.dividendYield)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last dividend date</th>
                                    <td>{this.props.company.otherData.lastDividendDate}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last dividend value</th>
                                    <td>{this.timeStampToDate(this.props.company.otherData.lastDividendValue)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ex Dividend Date</th>
                                    <td>{this.timeStampToDate(this.props.company.otherData.exDividendDate)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Five year avg dividend yield</th>
                                    <td>{this.props.company.otherData.fiveYearAvgDividendYield}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Exchange Timezone Name</th>
                                    <td>{this.props.company.otherData.exchangeTimezoneName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Financial Currency</th>
                                    <td>{this.props.company.otherData.financialCurrency}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gross profits</th>
                                    <td>{this.separateThousands(this.props.company.otherData.grossProfits)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last split date</th>
                                    <td>{this.timeStampToDate(this.props.company.otherData.lastSplitDate)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gross margins</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.grossMargins)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gross profits</th>
                                    <td>{this.separateThousands(this.props.company.otherData.grossProfits)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last split factor</th>
                                    <td>{this.props.company.otherData.lastSplitFactor}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last split date</th>
                                    <td>{this.timeStampToDate(this.props.company.otherData.lastSplitDate)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Most recent Quarter</th>
                                    <td>{this.separateThousands(this.props.company.otherData.mostRecentQuarter)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Net Fiscal Year</th>
                                    <td>{this.separateThousands(this.props.company.otherData.nextFiscalYearEnd)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Operational Cash Flow</th>
                                    <td>{this.separateThousands(this.props.company.otherData.operatingCashflow)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Operational margins</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.operatingMargins)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Profit Margins</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.profitMargins)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Return on assets</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.returnOnAssets)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Return on equity</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.returnOnEquity)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Revenue growth</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.revenueGrowth)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Revenue per share</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.revenuePerShare)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Shares out standing</th>
                                    <td>{this.separateThousands(this.props.company.otherData.sharesOutstanding)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Shares Percentage out</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.sharesPercentSharesOut)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Shares short previous month date</th>
                                    <td>{this.timeStampToDate(this.props.company.otherData.sharesShortPreviousMonthDate)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Shares short prior month</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.sharesShortPriorMonth)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total cash</th>
                                    <td>{this.separateThousands(this.props.company.otherData.totalCash)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total cash per share</th>
                                    <td>{this.separateThousands(this.props.company.otherData.totalCashPerShare)}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total debt</th>
                                    <td>{this.removeDigitsAfterComma(this.props.company.otherData.totalDebt)}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total revenue</th>
                                    <td>{this.separateThousands(this.props.company.otherData.totalRevenue)}%</td>
                                </tr>
                                </tbody>
                            </Table>
                            <hr className="my-4"/>
                        </div>
                        {show}
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default CompanyDetails;
