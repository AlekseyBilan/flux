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
                <button onClick = {this.handleDelete}> Delete article </button>
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
        deleteArticle(this.props.article.id);
    }

    getBody() {
        const { article } = this.props;
        const comments = this.props.article.getRelation('comments');
        return (
            <section>
                {article.text}
                <CommentList comments = {comments} />
            </section>
        )
    }
}

export default Article