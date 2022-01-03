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
import CompanyChart from "components/StockPrediction/CompanyChart";

class StockPrediction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            watchList: [],
            activeCompany: null,
        }
    }

    addToWatchList = (stock) => {
        this.setState({watchList: [...this.state.watchList, stock]})
        this.setState({activeCompany: stock})
    }

    removeFromWatchList = (index) => {
        if (this.state.activeCompany !== null && (this.state.watchList[index].symbol === this.state.activeCompany.symbol)) {
            this.setState({activeCompany: null})
        }
        this.setState({
            watchList: this.state.watchList.filter(function (company, companyIndex) {
                return companyIndex !== index
            })
        });
    }

    emptyWatchList = () => {
        this.setState({activeCompany: null})
        this.setState({watchList: []})
    }

    render() {
        let pageContent;
        if (this.state.watchList.length > 0) {
            let watchList = <Col className="order-xl-1" xl="5">
                <WatchList watchList={this.state.watchList} removeFromWatchList={this.removeFromWatchList}
                           emptyWatchList={this.emptyWatchList}/>
            </Col>

            let companyDetails;
            if (this.state.activeCompany !== null) {
                companyDetails = <Col className="order-xl-1" xl="7">
                    <CompanyDetails company={this.state.activeCompany}/>
                    <CompanyChart company={this.state.activeCompany}/>
                </Col>
            }

            pageContent = <Row>{watchList} {companyDetails}</Row>
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
