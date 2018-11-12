import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, START, SUCCESS} from "../constants";
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatchers'
import DataWrapper from './DataWrapper'

class ArticleStore extends EventEmitter {
    constructor(stores, initialState = []) {
        super();
        this.errors = [];
        this._items = {};
        initialState.forEach(this._addItem);

        AppDispatcher.register((action) => {
            const {type, payload} = action;

            switch (type){
                case DELETE_ARTICLE:
                    this._delete(payload.id);
                    break;

                case LOAD_ALL_ARTICLES+START:
                    this.loading = true;
                    break;

                case LOAD_ALL_ARTICLES+SUCCESS:
                    payload.response.forEach(this._addItem);
                    this.loading = false;
                    break;

                case LOAD_ALL_ARTICLES+FAIL:
                    this.errors = payload.errors;
                    break;

                default:
                    break
            }
            this.emitChange();
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
        this._items[item.id] = new DataWrapper(item, this);
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