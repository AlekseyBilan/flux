import React, { Component } from 'react';
import ArticleList from './ArticleList';
import {articleStore} from "../stores";
import {loadAllArticles} from "../AC/articles";

class Container extends Component {

    constructor() {
        super();
        this.state = {
            articles : articleStore.getAll(),
            loading: articleStore.loading
        }
    }

    componentDidMount(){
        articleStore.addChangeListener(this.handleChange);
        if(!this.state.articles.length) loadAllArticles();
    }

    componentWillUnmount(){
        articleStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            articles : articleStore.getAll(),
            loading: articleStore.loading
        })
    }

    render() {
        if(this.state.loading) return <h1>Loading, please wait...</h1>;
        return (
            <ArticleList articles = {this.state.articles}/>
        )
    }
}

export default Container
