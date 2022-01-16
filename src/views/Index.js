/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import Header from "components/Headers/Header.js";
import WatchList from "components/StockPrediction/WatchList.js";
import CompanyDetails from "components/StockPrediction/CompanyDetails";
import CompanyChartPrice from "components/StockPrediction/CompanyChartPrice";
import CompanyChartPrediction from "components/StockPrediction/CompanyChartPrediction";
import axios from "axios";

class StockPrediction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            watchList: [],
            activeCompany: null,
        }
        this.populateWatchList()
    }

    addToWatchList = (companySymbol) => {
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/add_stock/' + companySymbol).then(response => {
            this.populateWatchList()
        })

    }

    populateWatchList = () => {
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/get_details/').then(response => {

            const StockList = []
            response.data.forEach((item) => {
                StockList.push({
                    symbol: item[0],
                    name: item[1],
                    country: item[2],
                    sector: item[3],
                    industry: item[4],
                    currency: item[5],
                    cashflow: item[6],
                    debt: item[7],
                    earnings_growth: item[8],
                    ipo_year: item[9],
                    exchange: item[10],
                    exchange_name: item[11],
                    logo_url: item[12],
                    no_employees: item[13],
                    otherData: item[14],
                    prediction_1: item[15],
                    prediction_2: item[16],
                })
            })
            this.setState({watchList: StockList})
        })
    }

    showStockDetails = (e, index) => {
        if (e.target.classList.contains("removeStock")) {
            return;
        }
        const currentStock = this.state.watchList[index]
        this.setState(state => (state.activeCompany = currentStock))
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/get_price/' + currentStock.symbol).then(response => {
            this.setState(state => (state.activeCompany.prices = response.data))

        })
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/get_prediction/' + currentStock.symbol).then(response => {
            this.setState(state => (state.activeCompany.predictions = response.data))
        })
    }

    removeFromWatchList = (e, index) => {
        e.preventDefault()
        if (this.state.activeCompany !== null && (this.state.watchList[index].symbol === this.state.activeCompany.symbol)) {
            this.setState({activeCompany: null})
        }
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/remove_stock/' + this.state.watchList[index].symbol).then(response => {
            this.setState({
                watchList: this.state.watchList.filter(function (company, companyIndex) {
                    return companyIndex !== index
                })
            });
        })
    }

    emptyWatchList = () => {
        axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/remove_stock/').then(response => {
            this.setState({activeCompany: null})
            this.setState({watchList: []})
        })
    }

    render() {
        let pageContent;
        if (this.state.watchList.length > 0) {
            let watchList = <Col className="order-xl-1" xl="4">
                <WatchList watchList={this.state.watchList} removeFromWatchList={this.removeFromWatchList}
                           showStockDetails={this.showStockDetails}
                           emptyWatchList={this.emptyWatchList}/>
            </Col>

            let companyDetails, graphs
            if (this.state.activeCompany !== null) {
                companyDetails = <Col className="order-xl-1" xl="8">
                    <CompanyDetails company={this.state.activeCompany}/></Col>
                graphs         = <Row className="mt-3">
                    <Col className="order-xl-1" xl="6"><CompanyChartPrice company={this.state.activeCompany}/></Col>
                    <Col className="order-xl-1" xl="6"><CompanyChartPrediction
                        company={this.state.activeCompany}/></Col>
                </Row>
            }

            pageContent = <div><Row>{watchList} {companyDetails}</Row> {graphs}</div>
        } else {
            pageContent = <Col className="order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                    <CardHeader className="border-0">
                        <Row className="align-items-center">
                            <div className="col">
                                <h3 className="mb-0">How it works?</h3>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <div>
                            Our tool offers you predictions on the future value of the stock base on carefully selected
                            parameters.
                            <br/>
                            <br/>
                            When you decide to try your hand at stock picking, it's essential to do your homework. Your
                            goal is to find a good value – especially if you plan to hold on to an asset for a while.
                            But
                            before you put full faith in a company, you should do thorough research, reviewing a stock's
                            fundamentals to monitor its viability and checking whether it still has room in your
                            portfolio.


                        </div>
                    </CardBody>
                </Card>
            </Col>
        }

        return (
            <>
                <Header watchList={this.state.watchList} addToWatchList={this.addToWatchList}/>
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {pageContent}
                </Container>
            </>
        )
    }
}


export default StockPrediction;
