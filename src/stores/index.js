import ArticleStore from './ArticleStore';
import BasicStore from './BasicStore';
import { normalizedComments } from '../fixtures';

const stores = {};

Object.assign(stores, {
   comments: new BasicStore(stores, normalizedComments),
   articles: new ArticleStore(stores)
});

//only for dev
window.stores = stores;

export default stores;

export const articleStore = stores.articles;
export const commentStore = stores.comments;