import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import {deleteArticle} from  '../AC/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    constructor(...args) {
        super(...args)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props
        if (!article) return <span>No article</span>
        const body = this.state.isOpen ? this.getBody() : null
        return (
            <div>
                <h1 onClick = {this.toggleOpen}> {article.title} </h1>
                <a href='#' onClick = {this.handleDelete}> Delete article </a>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleDelete = (ev) => {
        ev.preventDefault();
        console.log('Delete article id = ', this.props.article.id);
        deleteArticle(this.props.article.id);
    }

    getBody() {
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} />
            </section>
        )
    }
}

export default Article