class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item);
        this._store = store;
    }

    getRelation(relation) {
        const relStore = this._store.getStores()[relation];
        if (!relStore || !this[relation]) return [];
        return this[relation].map(relStore.getById);
    }
}

export default DataWrapper