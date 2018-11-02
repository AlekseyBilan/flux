import React, { Component } from 'react';
import ArticleList from './ArticleList';
import {articlesStore} from "../stores";

class Container extends Component {

    constructor() {
        super();
        this.state = {
            articles : articlesStore.getAll()
        }
    }

    componentDidMount(){
        articlesStore.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        articlesStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            articles : articlesStore.getAll()
        })
    }

    render() {
        return (
            <ArticleList articles = {this.state.articles}/>
        )
    }
}

export default Container
