import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class Container extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    constructor() {
        super();
    }

    render() {
        return (
            <ArticleList articles = {this.props.articles} />
        )
    }
}

export default Container
