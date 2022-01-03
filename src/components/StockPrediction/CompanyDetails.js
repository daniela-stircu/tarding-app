import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {Component} from "react";

class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
    }

    showDetails(e)
    {
        e.preventDefault()
        this.setState({showMore: !this.state.showMore});
    }

    render() {

        let show;
        if (this.state.showMore) {
            show = <a href="javascript:;" onClick={(e) => this.showDetails(e)}>
                Show less
            </a>
        } else {
            show = <a href="javascript:;" onClick={(e) => this.showDetails(e)}>
                Show more
            </a>
        }
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
                                                            className="heading">{this.props.company.currentPrice}</span>
                                    <span className="description">Price</span>
                                </div>
                                <div>
                                                        <span
                                                            className="heading">{this.props.company.prediction}%</span>
                                    <span className="description">Prediction</span>
                                </div>
                                <div>
                                                        <span
                                                            className="heading">{this.props.company.recommendationKey}</span>
                                    <span className="description">Acton</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="text-center">
                        <h3>
                            {this.props.company.shortName}
                            {/*<span className="font-weight-light">, 27</span>*/}
                        </h3>
                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2"/>
                            {this.props.company.country}, {this.props.company.city}
                        </div>

                        <div>
                            <i className="ni education_hat mr-2"/>
                            {this.props.company.sector} - {this.props.company.industry}
                        </div>
                        <hr className="my-4"/>
                        <p className={this.state.showMore ? 'show-more' : 'show-less'}>
                            {this.props.company.longBusinessSummary}
                        </p>
                        {show}
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default CompanyDetails;
