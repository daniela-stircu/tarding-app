import React, {Component} from "react";

class SearchDropDown extends Component {

    addToWatchlist(company) {
        this.props.clearSearchQuery()
        this.props.addToWatchList(company)
    }

    render() {
        let entries;
        if (this.props.searchResults.length > 0) {
            entries = this.props.searchResults.map((company, index) => (
                <li key={company[0]} onClick={(e) => this.addToWatchlist(company[0])}>{company[1]} <span
                    className="font-weight-bold">({company[0]})</span></li>
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
