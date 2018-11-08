import AppDispatcher from '../dispatchers'
import {DELETE_ARTICLE, LOAD_ALL_ARTICLES_FAIL, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS} from "../constants";

export function deleteArticle(id){
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        payload: { id }
    })
}

export function loadAllArticles(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3001/api/articles', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES_START
        });

        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (this.status !== 200) {
                console.log( 'Error: ' + (this.status ? this.statusText : 'fail response') );
                let error = this.statusText;
                AppDispatcher.dispatch({
                    type: LOAD_ALL_ARTICLES_FAIL,
                    payload: { error: error }
                });
                return;
            }

            let response = this.responseText;
            AppDispatcher.dispatch({
                type: LOAD_ALL_ARTICLES_SUCCESS,
                payload: { response: JSON.parse(response) }
            });
        };
}