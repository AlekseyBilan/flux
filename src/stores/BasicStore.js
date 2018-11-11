import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers';
import DataWrapper from './DataWrapper'

class BasicStore extends EventEmitter {
    constructor(stores, initialState = []) {
        super();
        this._stores = stores;
        this._items = [];
    }

    _registerActionSubscription(callback){
        this.dipatchToken = AppDispatcher.register(callback);
    }

    getStores() {
        return this._stores
    }


    getAll() {
        return this._items.slice()
    }

    getById(id) {
        return this._items.filter((item) => item.id === id)[0]
    }

    delete(id) {
        this._items = this._items.filter((item) => item.id !== id)
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

export default BasicStore