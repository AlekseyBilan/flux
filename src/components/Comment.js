import React from 'react';
import toggleOpen from '../decorators/toggleOpen'

function Comment(props){
    const {comment, isOpen, toggleOpen} = props;
    return (
        <section>
            {getCommentLayout(comment, isOpen)}
            <button onClick={toggleOpen}>
                {(isOpen)? 'Close Comment' : 'Open Comment'}
            </button>
        </section>
    )
}
function getCommentLayout (comment, isOpen){
    if (isOpen){
        return (<section><h4>{comment.user}</h4><p>{comment.text}</p></section>)
    } else {
        return null;
    }
}

export default toggleOpen(Comment)