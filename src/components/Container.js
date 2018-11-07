import React, { Component } from 'react';
import ArticleList from './ArticleList';
import {articlesStore} from "../stores";
import {loadAllArticles} from "../AC/articles";

class Container extends Component {

    constructor() {
        super();
        this.state = {
            articles : articlesStore.getAll(),
            loading: articlesStore.loading
        }
    }

    componentDidMount(){
        articlesStore.addChangeListener(this.handleChange);
        if(!this.state.articles.length) loadAllArticles();
    }

    componentWillUnmount(){
        articlesStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            articles : articlesStore.getAll(),
            loading: articlesStore.loading
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
