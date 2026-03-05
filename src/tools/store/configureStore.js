import {createStore,combineReducers} from 'redux'
import productReducer from '../reducers/productReducer';
import {categoryReducer } from '../reducers/categoryReducer';

const configureStore = () => {
  const store = createStore(combineReducers({
    product: productReducer,
    category: categoryReducer

  }));

  return store
}

export default configureStore
