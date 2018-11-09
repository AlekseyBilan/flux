import {FAIL, START, SUCCESS} from "../constants";
import AppDispatcher from '../dispatchers'

export function loadAllArticlesCall(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/api/articles', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    return xhr;
}

export function acyncACFactory(apiCall, action){
    return () => {
        AppDispatcher.dispatch({
            type: action + START
        });

        apiCall().onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (this.status !== 200) {
                console.log( 'Error: ' + (this.status ? this.statusText : 'fail response') );
                let error = this.statusText;
                AppDispatcher.dispatch({
                    type: action + FAIL,
                    payload: { error: error }
                });
                return;
            }

            let response = this.responseText;
            AppDispatcher.dispatch({
                type: action + SUCCESS,
                payload: { response: JSON.parse(response) }
            });
        }
    }
}