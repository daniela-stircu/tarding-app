import React, {Component} from 'react';
import axios from 'axios'
import SearchDropDown from "./SearchDropDown";
// reactstrap components
import {
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
} from "reactstrap";

class SearchStock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            searchResults: null,
        }
    }

    clearSearchQuery = () => {
        this.setState({searchQuery: ""})
        this.setState({searchResults: null});

    }

    //Function which is called when the component loads for the first time
    componentDidMount() {
    }

    searchStocks(e) {
        if(e.key === 'Enter') {
            if (this.state.searchQuery.length) {
                axios.get('https://radu-galan1-2un4mcz1nnmxv955.socketxp.com/search/' + this.state.searchQuery).then(response => {
                    this.setState({searchResults: response.data.length ? response.data : []})
                })
            } else {
                this.setState({searchResults: []})
            }
        }
    }

    handleChange(e) {
        this.setState({searchQuery: e.target.value});
    }

    //Function to Load the customerdetails data from json.
    getCustomerDetails(id) {
        axios.get('assets/samplejson/customer' + id + '.json').then(response => {
            this.setState({customerDetails: response})
        })
    };

    render() {
        return (
            <div className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                <div className="mb-0 stock-search">
                    <InputGroup className="input-group-alternative ">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fas fa-search"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search"
                               type="text"
                               name="searchQuery"
                               value={this.state.searchQuery}
                               onChange={this.handleChange.bind(this)}
                               onKeyUp={this.searchStocks.bind(this)}
                        />
                    </InputGroup>
                    {this.state.searchResults !== null ?
                        <SearchDropDown searchResults={this.state.searchResults} watchList={this.props.watchList}
                                        addToWatchList={this.props.addToWatchList} clearSearchQuery={this.clearSearchQuery}/> : null}
                </div>
            </div>
        )
    };


};

export default SearchStock;
