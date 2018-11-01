import React, { Component } from 'react';
import Container from './components/Container';
import articles from './fixtures';

class App extends Component {
    render(){
        return (
            <div>
                <Container articles={articles}/>
            </div>
        )
    }
}
export default App;
