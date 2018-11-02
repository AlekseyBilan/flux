import AppDispatcher from '../dispatchers'

export function deleteArticle(id){
    const action = {
        type: 'DELETE_ARTICLE',
        payload: {
            id
        }
    }

    AppDispatcher.dispatch(action);
    console.log('AC--- deleteArticle', action);
}