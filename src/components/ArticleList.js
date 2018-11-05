import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    };

    render(){
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article = {article}/>
            </li>);

        return(
            <div>
                <h1>Articles List</h1>
                <ul>{articleElements}</ul>
            </div>

        )
    }
}