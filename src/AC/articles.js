import AppDispatcher from '../dispatchers'
import {DELETE_ARTICLE, LOAD_ALL_ARTICLES} from "../constants";
import {loadAllArticlesCall, acyncACFactory} from "./webUtils";

export function deleteArticle(id){
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        payload: { id }
    })
}

export const loadAllArticles = acyncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES);