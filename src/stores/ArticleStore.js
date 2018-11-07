import {DELETE_ARTICLE, LOAD_ALL_ARTICLES_FAIL, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS} from "../constants";
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers'

class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super();
        this._items = {};
        initialState.forEach(this._addItem);

        AppDispatcher.register((action) => {
            const {type, payload} = action;

            switch (type){
                case DELETE_ARTICLE:
                    this._delete(payload.id);
                    this.emitChange();
                    break;

                case LOAD_ALL_ARTICLES_START:
                    this.loading = true;
                    this.emitChange();
                    break;

                case LOAD_ALL_ARTICLES_SUCCESS:
                    console.log(payload.response);
                    payload.response.forEach(this._addItem);
                    this.loading = false;
                    this.emitChange();
                    break;

                default:
                    break
            }
        })
    }

    getAll() {
        return Object.keys(this._items).map(this.getById);
    }

    getById = (id) => this._items[id];

    _delete(id) {
        delete this._items[id];
    }

    _addItem = (item) => {
        this._items[item.id] = item;
    }

    addChangeListener(callback){
        this.on('SOME_EVENT', callback);
    }

    removeChangeListener(callback){
        this.removeListener('SOME_EVENT', callback);
    }

    emitChange(){
        this.emit('SOME_EVENT');
    }

}

export default ArticleStore