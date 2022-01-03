import React, {Component} from 'react';
import Search from "../StockPrediction/Search";


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-6">
                    <Search watchList={this.props.watchList} addToWatchList={this.props.addToWatchList} />
                </div>
            </>
        );
    }
}

export default Header;
