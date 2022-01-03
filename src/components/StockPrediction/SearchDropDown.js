import React, {Component} from "react";

class SearchDropDown extends Component {
    constructor(props) {
        super(props);
    }

    addToWatchlist(company) {
        this.props.clearSearchQuery()
        this.props.addToWatchList(company)
    }

    render() {
        let entries;
        if (this.props.searchResults.length > 0) {
            entries = this.props.searchResults.map((company, index) => (
                <li onClick={(e) => this.addToWatchlist(company)}>{company.shortName} <span
                    className="font-weight-bold">({company.symbol})</span></li>
            ))
        } else {
            entries = <li>No company found for your query</li>
        }

        return (
            <div className="search-dropdown">
                <ul>
                    {entries}
                </ul>
            </div>
        )
    }
}

export default SearchDropDown;
