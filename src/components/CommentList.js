import React, {Component} from 'react';
import Comment from "./Comment";
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component{
    static defaultProps = {
        comments: []
    };
    render (){
        const {comments, isOpen, toggleOpen} = this.props;
        if(comments.length){
            const commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment} isOpen = {isOpen}/></li>);
            return (
                <div>
                    {isOpen?(<ul>{commentElements}</ul>): null}
                    <button onClick={toggleOpen}>{(isOpen)? 'Close Comments' : 'Open Comments'}</button>
                </div>
            )
        } else {
            return  <p>There are no comments here.</p>
        }
    }
}

export default toggleOpen(CommentsList)