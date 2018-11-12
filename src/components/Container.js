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
        console.log('Container - componentDidMount this.state.articles', this.state.articles, this.state.articles.length);
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
        console.log('Container, render, articles = ', this.state.articles);
        if(this.state.loading) return <h1>Loading, please wait...</h1>;
        return (
            <ArticleList articles = {this.state.articles}/>
        )
    }
}

export default Container
