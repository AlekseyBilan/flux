class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item)
        this._store = store
    }

    getRelation(relation) {
    /*
            if (!Array.isArray(this[rel])) throw new Error('no such relation')
            return this[rel]
                .map((id) => this.getStore().stores[rel].getById(id))
    */
    return []
    }
}

export default DataWrapper